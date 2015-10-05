Ext.define('AppsBoard.view.blog.blogModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.blog',
    formulas: {
    },

    stores: {
        navItems: {
            type: 'tree',
            fields: ['id','text'],
	        root: {
	          text: '/',
	          id: '-1',
	          expanded: true
	        },
	        proxy: {
	          type: 'ajax',
	          url: '/wordpress/index.php?action=category_list',
	          reader: {
	            type: 'json',
	            rootProperty : 'data'
	          }
	        }
        },
        userSharedItemsStore: {
            autoLoad: true,
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'parent_id'
                },
                {
                    name: 'name'
                },
                {
                    name: 'source'
                },
                {
                    name: 'date'
                },
                {
                    name: 'isActive'
                },
                {
                    name: 'time'
                },
                {
                    name: 'content'
                },{
                	name : 'post_title'
                }
            ],
            proxy: {
                type: 'ajax',
                url: '/wordpress/index.php?action=blog_list',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }            
        }
    }

});
