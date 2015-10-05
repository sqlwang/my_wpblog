<?php
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
	  //$title = $html->find ( '#playerNameLink', 0 )->innertext . " 的召唤师详情" ."\n";
	  $title = "——《召唤师详情》——\n";
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
	  
	  //获取最近常用英雄
	  $hero = "";
	  $herostr = $html->find ( '.mod-pic li img' );
	  for($i = 0; $i < count ( $herostr ); $i ++)
	    $hero .= $herostr [$i]->title . "\n";
	  
	  //将获得的数据整理成想要的格式并赋值给$result，在这里我就只是简单的返回一个字符串，大家可以根据不同的需求整理成数组类型或再转为JSON格式等等
	  $result = $title . $level . $fighting . $good . $bad . "【匹配模式】\n" . $matchstr . "\n【S4排位赛】\n" . $S4str . "\n【战斗力评估】\n" . $fighting_count . "\n【最近常用英雄】\n" . $hero;
	}
	//释放资源
	$html->clear ();
	//返回结果
	return  $result;
?>