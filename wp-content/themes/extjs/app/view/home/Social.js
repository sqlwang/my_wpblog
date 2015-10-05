Ext.define('AppsBoard.view.home.Social', {
    extend: 'Ext.panel.Panel',
    xtype: 'profilesocialpanel',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.layout.container.VBox'
    ],
	scrollable : true,
    bodyPadding: 10,
    layout: {
        type: 'vbox',
        align: 'middle'
    },

    cls: 'social-panel shadow-panel',

    items: [{
    	xtype: 'panel',
    	//border : true,
    	width: '100%',
    	items:[{
	        xtype: 'container',
	        html: '<h2 class="x-fa fa-gamepad"> 英雄联盟</h2>'
	    },{
	    	xtype:'form-lol'
	    }]
    }]
});
