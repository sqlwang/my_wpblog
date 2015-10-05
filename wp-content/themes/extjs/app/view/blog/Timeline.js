Ext.define('AppsBoard.view.blog.Timeline', {
    extend: 'Ext.grid.Panel',
    xtype: 'profiletimelinepanel',

    cls:'timeline-items-wrap shadow-panel',
    hideHeaders: true,
    bind: {
        store: '{userSharedItemsStore}'
    },
    listeners: {
        select:'onSelectGrid'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            flex: 1,
            renderer: function (value, metaData, record) {
                if (record.data._id !== record.data.parent_id) {
                   return "<div id =" + record.data._id + ">" + 
						        "<article>"+
						        	"<header>"+
						                  "<h3>"+ record.data.post_title + "</h3>" +
						            "</header>"+
						            "<hr> </hr>"+
						            	"<div class='content'><p>" + record.data.content + "</p></div>"+
						        	"<hr></hr>"+
						        "</article>"+ 
						        "<div class='like-comment-btn-wrap'>"+
	                                "<button type='button' class='x-fa fa-thumbs-up' onclick=''></button>"+
	                                "<button type='button' class='x-fa fa-thumbs-down' onclick=''></button>"+
	                                "<button type='button' onclick='' class='x-fa fa-comments'></button>"+
	                            "</div>"+
						"</div>";
                }
                return "<div>" + 
//						    "<div class='large-2 columns small-3'>"+
//						        "<a class='author-icons'  title= ''>"+
//						            "<img src= ''/> "+
//						        "</a>" + 
//								"<div class='categories-icons'>"+
//						    		"<img src=''>"+
//						    	"</div>"+
//						    "</div>"+
						    "<div>"+
						        "<article>"+
						        	"<header>"+
						                  "<h6>"+ record.data.post_title + "</h6>" +
						            "</header>"+
//						            "<hr> </hr>"+
//						            	"<div class='content'>" + record.data.content + "</div>"+
//						        	"<hr></hr>"+
						        "</article>"+ 
						         "<div class='like-comment-btn-wrap'>"+
                                    "<button type='button' class='x-fa fa-thumbs-up' onclick=''></button>"+
                                    "<button type='button' class='x-fa fa-thumbs-down' onclick=''></button>"+
                                    "<button type='button' onclick='' class='x-fa fa-comments'></button>"+
                                "</div>"+
						   "</div>" +
						"</div>";
            }
        }
    ]
});
