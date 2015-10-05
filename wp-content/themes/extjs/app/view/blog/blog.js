
Ext.define("AppsBoard.view.blog.blog",{
    extend: "Ext.panel.Panel",

    requires: [
        "AppsBoard.view.blog.blogController",
        "AppsBoard.view.blog.blogModel",
        //"AppsBoard.view.blog.Timeline",
        "AppsBoard.view.blog.article"
    ],

    controller: "blog",
    viewModel: {
        type: "blog"
    },
	
    xtype: 'blog',
    width: 500,
    height: 450,
    title: 'TreeList',
    iconCls: 'fa fa-gears',
    layout: 'border',

    header: {
        items: [{
            xtype: 'button',
            text: 'Options',
            menu: [{
                text: 'Expander Only',
                checked: true,
                handler: 'onToggleConfig',
                config: 'expanderOnly'
            }, {
                text: 'Single Expand',
                checked: false,
                handler: 'onToggleConfig',
                config: 'singleExpand'
            }]
        },{
            xtype: 'button',
            text: 'Nav',
            enableToggle: true,
            reference: 'navBtn',
            toggleHandler: 'onToggleNav'
        },{
            xtype: 'button',
            text: 'Micro',
            enableToggle: true,
            toggleHandler: 'onToggleMicro'
        }]
    },

    items: [{
        region: 'west',
        width: '15%',
        split: true,
        reference: 'treelistContainer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,
        scrollable: 'y',
        items: [{
            xtype: 'treelist',
            //reference: 'treelist',
            bind: '{navItems}',
            listeners: {
	            selectionchange:'onChangeClick'
	        }
        }]
    }, {
        region: 'center',
        bodyPadding: 10,
       	scrollable: 'y',
        items: [{
        	reference: 'profiletimelinepanel',
            xtype: 'profiletimelinepanel'
        }]
    }, {
        region: 'east',
        bodyPadding: 10,
       	scrollable: 'y',
        width: '45%',
        split: true  ,
        items: [{
            xtype: 'article'
        }]
    }]
});
