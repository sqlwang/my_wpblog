<?php
require( get_template_directory() . '/lib/Response.php' );

add_theme_support( 'nav-menus' );
register_nav_menus(array(
	"primary" => "Primary Navigation"
));


function ajax_load(){
    if( isset($_GET['action'])){
        if($_GET['action'] == 'menu'  ){
            get_menu_list();exit();
        }
		
		if($_GET['action'] == 'category_list'  ){
            get_category_list();exit();
        }
		
		if($_GET['action'] == 'blog_list'  ){
            get_blog_list();exit();
        }
		
		if($_GET['action'] == 'lol_list'  ){
            get_lol_list();exit();
        }
		
		if($_GET['action'] == 'lol_hero_list'  ){
            get_lol_hero_list();exit();
        }
		
		if($_GET['action'] == 'lol_info'  ){
            get_lol_info();exit();
        }
    }
}
add_action('init', 'ajax_load');

function get_menu_list()
{
	$menus = get_terms('nav_menu');
	$data=array();
	foreach ($menus as $key => $value) {
		$array =  get_object_vars($value);
		array_push($data, $array);
	}
	$res = new Response();
	$res -> success = true;
	$res -> message = '';
	$res -> data = $data;
	echo $res->to_json();			
}

function get_category_list()
{
	$terms = get_terms('category', 'orderby=name&hide_empty=0' );

    // 获取到的分类数量
    $count = count($terms);
	$data = array();
    if($count > 0){
        // 循环输出所有分类信息
        foreach ($terms as $term) {
        	$term_array =  get_object_vars($term);
			// ["term_id"]=> string(1) "7" 
			// ["name"]=> string(7) "ASP.NET" 
			// ["slug"]=> string(6) "aspnet" 
			// ["term_group"]=> string(1) "0" 
			// ["term_taxonomy_id"]=> string(1) "7" 
			// ["taxonomy"]=> string(8) "category" 
			// ["description"]=> string(0) "" 
			//["parent"]=> string(1) "4" 
			// ["count"]=> string(1) "1" }
            // echo '<li><a href="'.get_term_link($term, $term->slug).'" title="'.$term->name.'">'.$term->name.'</a></li>';
        	$array = array(
				'text' => $term_array['name'],
				'id' => $term_array['term_id'],
				'count' => $term_array['count'],
				'description' => $term_array['description'],
	            'iconCls' => 'x-fa fa-inbox',
	            'leaf' => true
			);
			// if (!$is_leaf) {
				// $array =array_merge($array, $NextAgent);
			// }
			array_push($data, $array);
		}
    }
	
	$res = new Response();
	$res -> success = true;
	$res -> message = '';
	$res -> data = $data;
	echo $res->to_json();			
}


function get_blog_list()
{
	//$terms = get_terms('category', 'orderby=name&hide_empty=0' );
	$category = $_REQUEST['category'];
	
	$posts = get_posts("category=$category&numberposts=10");
	if ($posts) {
		$data = array();
		foreach ($posts as $key => $value) {
			if (is_object($value)) {
				$p_value = get_object_vars($value);
			} else {
				$p_value= $value;
			}
			
// ["post_author"]=> string(1) "1" 
// ["post_date"]=> string(19) "2013-06-21 11:17:28" 
// ["post_content"]=> string(1104) "废话不多说，分享下我收藏的HTML5和CSS3一些经典图书。 HTML5： 
// df " 
// ["post_title"]=> string(36) "HTML5和CSS3一些经典图书分享" 
// ["post_excerpt"]=> string(72) "废话不多说，分享下我收藏的HTML5和CSS3一些经典图书。" 
// ["post_status"]=> string(7) "publish" ["comment_status"]=> string(4) "open" 
// ["ping_status"]=> string(4) "open" 
// ["post_password"]=> string(0) "" 
// ["post_name"]=> string(90) "html5%e5%92%8ccss3%e4%b8%80%e4%ba%9b%e7%bb%8f%e5%85%b8%e5%9b%be%e4%b9%a6%e5%88%86%e4%ba%ab"
 // ["post_content_filtered"]=> string(0) ""
  // ["post_parent"]=> int(0) 
 // ["guid"]=> string(29) "http://www.sqlwang.com/?p=797" 
 // ["comment_count"]=> string(1) "0" 
			$array = array(
			     "_id" => $p_value['ID'],
		        "parent_id" => $p_value['post_parent'],
		        "name" => $p_value['post_author'],
		        "source" => $p_value['ID'],
		        "date" => $p_value['post_date'],
		        "isActive" => $p_value['post_status'],
		        "time" => $p_value['post_date'],
		        "content" => rtrim($p_value['post_content'], '<!--more-->') ,
		        "comment_count" => $p_value['comment_count'],
		        "post_title" =>$p_value['post_title']
			);
			array_push($data,$array);
		}
	}
	$res = new Response();
	$res -> success = true;
	$res -> message = '';
	$res -> data = $data;
	echo $res->to_json();			
}



function get_category_root_id($cat)
{
	$this_category = get_category($cat);   // 取得当前分类
	while($this_category->category_parent) // 若当前分类有上级分类时,循环
	{
		$this_category = get_category($this_category->category_parent); // 将当前分类设为上级分类(往上爬)
	}
	return$this_category->term_id; // 返回根分类的id号
}

function get_lol_hero_list(){
	//从网址中获得服务器名和玩家ID
	//$serverName = $_GET["serverName"];
	//$playerName = $_GET["playerName"];
	$serverName = "水晶之痕";
	$playerName = "能飞的翔";
	//将获得的服务器名和玩家ID拼接到查询链接
	$url = "http://lolbox.duowan.com/playerDetail.php?serverName=" . $serverName . "&playerName=" . $playerName;
	//引入simple_html_dom.php文件，这个文件要同时上传到SAE上
	include_once 'simple_html_dom.php';
	//创建html数据对象
	$html = file_get_html ( $url );
	//判断是否有返回数据
	$error = $html->find ( '.notice' );
	if (count ( $error )) {
	  $result = "输入有误或无相关数据，请重新输入或打一场匹配恢复战绩。";
	} else {  
	 
	  //获取最近常用英雄
	  $hero = array();
	  $herostr = $html->find ( '.mod-pic li img' );
	  for($i = 0; $i < count ( $herostr ); $i ++){
	  		$array = array(
				'src'=> $herostr [$i]->src,
				'alt' =>$herostr [$i]->alt,
				'name' =>$herostr [$i]->title,
			);
			array_push($hero, $array);
	  }
	  
	}
	//释放资源
	$html->clear ();
	$images = array();
	$images['images'] = $hero;
	echo json_encode($images);
}

function get_lol_info(){
	//从网址中获得服务器名和玩家ID
	//$serverName = $_GET["serverName"];
	//$playerName = $_GET["playerName"];
	$serverName = "水晶之痕";
	$playerName = "能飞的翔";
	//将获得的服务器名和玩家ID拼接到查询链接
	$url = "http://lolbox.duowan.com/playerDetail.php?serverName=" . $serverName . "&playerName=" . $playerName;
	//引入simple_html_dom.php文件，这个文件要同时上传到SAE上
	include_once 'simple_html_dom.php';
	//创建html数据对象
	$html = file_get_html ( $url );
	//判断是否有返回数据
	$error = $html->find ( '.notice' );
	if (count ( $error )) {
	  $result = "输入有误或无相关数据，请重新输入或打一场匹配恢复战绩。";
	} else {  
	  //获取标题
	  $title = $html->find ( '#playerNameLink', 0 )->innertext . "(水晶之痕)";
	  //$title = "——《召唤师详情》——\n";
	  //获取等级数据
	  $level = $html->find ( '.avatar', 0 )->children ( 2 )->innertext;
	  //获取战斗力数据
	  $fighting = $html->find ( '.fighting', 0 )->children ( 1 )->children ( 0 )->children ( 0 )->innertext;
	  
	  //获取被赞次数
	  $good = preg_replace('/\D/s', '',  $html->find ( '.text', 0 )->children ( 1 )->innertext).'次';
	  
	  //获取被拉黑次数
	  $bad = preg_replace('/\D/s', '', $html->find ( '.text', 0 )->children ( 2 )->innertext ).'次';
	}
	//释放资源
	$html->clear ();
	//返回结果

	$info = array(
		'name' => $title,
		'level' => $level,
		'fighting' => $fighting,
		'good' =>$good,
		'bad' => $bad
	);
	$data = array(
		'data' => $info ,
		'success' =>true,
	);
	
	echo json_encode($data);
}


function get_lol_data(){
	//从网址中获得服务器名和玩家ID
	//$serverName = $_GET["serverName"];
	//$playerName = $_GET["playerName"];
	$serverName = "水晶之痕";
	$playerName = "能飞的翔";
	//将获得的服务器名和玩家ID拼接到查询链接
	$url = "http://lolbox.duowan.com/playerDetail.php?serverName=" . $serverName . "&playerName=" . $playerName;
	//引入simple_html_dom.php文件，这个文件要同时上传到SAE上
	include_once 'simple_html_dom.php';
	//创建html数据对象
	$html = file_get_html ( $url );
	//判断是否有返回数据
	$error = $html->find ( '.notice' );
	if (count ( $error )) {
	  $result = "输入有误或无相关数据，请重新输入或打一场匹配恢复战绩。";
	} else {  
	  //获取标题
	  $title = $html->find ( '#playerNameLink', 0 )->innertext . "(水晶之痕)" ."\n";
	  //$title = "——《召唤师详情》——\n";
	  //获取等级数据
	  $level = "等级：" . $html->find ( '.avatar', 0 )->children ( 2 )->innertext . "\n";
	  //获取战斗力数据
	  $fighting = "战斗力：" . $html->find ( '.fighting', 0 )->children ( 1 )->children ( 0 )->children ( 0 )->innertext . "\n";
	  
	  //获取被赞次数
	  $good = $html->find ( '.text', 0 )->children ( 1 )->innertext . "\n";
	  
	  //获取被拉黑次数
	  $bad = $html->find ( '.text', 0 )->children ( 2 )->innertext . "\n";
	  //获取匹配模式数据
	  $matchArr = $html->find ( '.mod-tabs-content' );
	  $matching = $matchArr [0]->children ( 0 )->find ( 'tr' );  $matchstr = "";
	  for($i = 1; $i < count ( $matching ); $i ++)
	    $matchstr .= $matching [$i]->children ( 0 )->innertext . "：\n总场数（" . trim($matching [$i]->children ( 1 )->innertext) . "）\n胜率（" . $matching [$i]->children ( 2 )->innertext . "）\n";
	  
	  //获取S4排位赛数据
	  $S4 = $matchArr [1]->children ( 0 )->find ( 'tr' );
	  $S4str = "";
	  for($i = 1; $i < count ( $S4 ); $i ++)
	    $S4str .= str_replace(':', '', $S4 [$i]->children ( 0 )->innertext) . "：\n总场数（" . trim($S4 [$i]->children ( 3 )->innertext) . "）\n胜率（" . $S4 [$i]->children ( 4 )->innertext . "）\n";
	  
	  //获取战斗力评估数据
	  $fighting_count = $matchArr [2]->children ( 0 )->children ( 0 )->plaintext;
	  $fighting_count = trim(str_replace('算法', '', $fighting_count));

	}
	//释放资源
	$html->clear ();
	//返回结果
	
	// {"images":[{"name":"dance_fever.jpg","size":2067,
	// "lastmod":1416932570000,"url":"images\/dance_fever.jpg"},{"name":"gangster_zack.jpg","size":2115,"lastmod":1416932570000,"url":"images\/gangster_zack.jpg"},{"name":"kids_hug.jpg","size":2477,"lastmod":1416932570000,"url":"images\/kids_hug.jpg"},{"name":"kids_hug2.jpg","size":2476,"lastmod":1416932570000,"url":"images\/kids_hug2.jpg"},{"name":"sara_pink.jpg","size":2154,"lastmod":1416932570000,"url":"images\/sara_pink.jpg"},{"name":"sara_pumpkin.jpg","size":2588,"lastmod":1416932570000,"url":"images\/sara_pumpkin.jpg"},{"name":"sara_smile.jpg","size":2410,"lastmod":1416932570000,"url":"images\/sara_smile.jpg"},{"name":"up_to_something.jpg","size":2120,"lastmod":1416932570000,"url":"images\/up_to_something.jpg"},{"name":"zack.jpg","size":2901,"lastmod":1416932570000,"url":"images\/zack.jpg"},{"name":"zack_dress.jpg","size":2645,"lastmod":1416932570000,"url":"images\/zack_dress.jpg"},{"name":"zack_hat.jpg","size":2323,"lastmod":1416932570000,"url":"images\/zack_hat.jpg"},{"name":"zack_sink.jpg","size":2303,"lastmod":1416932570000,"url":"images\/zack_sink.jpg"},{"name":"zacks_grill.jpg","size":2825,"lastmod":1416932570000,"url":"images\/zacks_grill.jpg"}]}
	// echo  $result;
	$images = array();
	$images['images'] = $hero;
	echo json_encode($images);
}

   

?>