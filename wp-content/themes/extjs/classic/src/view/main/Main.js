/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppsBoard.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'AppsBoard.view.main.MainController',
        'AppsBoard.view.main.MainModel',
       // 'AppsBoard.view.main.MainContainerWrap',
        'AppsBoard.view.home.UserProfile',
        'AppsBoard.view.blog.blog',
        'AppsBoard.view.header.header'
    ],

    controller: 'main',
    viewModel: 'main',
	layout:'border',
	items: [{
		xtype: 'header',
		region: 'north',
        cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
        height: 64,
        itemId: 'headerBar'
	},
    {
        xtype: 'tabpanel',
        ui: 'navigation',
        region: 'center', 
        tabPosition : 'left',
        tabRotation: 0,
        height: 1000,
        tabBar: {
	        flex: 1,
	        layout: {
	            align: 'stretch',
	            overflowHandler: 'none'
	        }
	    },
	    responsiveConfig: {
	        tall: {
	            headerPosition: 'top'
	        },
	        wide: {
	            headerPosition: 'left'
	        }
	    },
	
	    defaults: {
	        bodyPadding: 20,
	        tabConfig: {
	            plugins: 'responsive',
	            responsiveConfig: {
	                wide: {
	                    iconAlign: 'left',
	                    textAlign: 'center',
	                    width: 250
	                },
	                tall: {
	                    iconAlign: 'top',
	                    textAlign: 'center',
	                    width: 120
	                }
	            }
	        }
	    },
	    items: [{
	        // This page has a hidden tab so we can only get here during initialization. This
	        // allows us to avoid rendering an initial activeTab only to change it immediately
	        // by routing
	        xtype: 'component',
	        tabConfig: {
	            hidden: true
	        }
	    },{
	        xtype: 'userprofile',
	        title: 'Home',
	        iconCls: 'fa-home',
	        itemId: 'card-home'
	    },{
	        xtype: 'blog',
	        title: 'Blog',
	        iconCls: 'fa-pagelines'
	    }]
    }]
});
