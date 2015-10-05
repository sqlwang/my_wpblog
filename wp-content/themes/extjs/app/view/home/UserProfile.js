Ext.define('AppsBoard.view.home.UserProfile', {
    extend: 'Ext.container.Container',
    xtype: 'userprofile',

    requires: [
    	//'Ext.ux.layout.ResponsiveColumn',
    	'AppsBoard.view.home.Social',
    	'AppsBoard.view.home.Description',
    	'AppsBoard.view.home.Lol'
    ],
    controller: 'userprofile',
    viewModel: {
        type: 'userprofile'
    },
   // cls: 'userProfile-container',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'profiledescriptionpanel',
        bodyPadding: 5,
	    width: '50%',
	    border : true
    },{
        xtype: 'profilesocialpanel',
        bodyPadding: 5,
	    width: '50%',
	    border : true
    }]
});
