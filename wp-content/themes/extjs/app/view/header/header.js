Ext.define("AppsBoard.view.header.header",{
    extend: "Ext.toolbar.Toolbar",

    requires: [
        "AppsBoard.view.header.headerController",
        "AppsBoard.view.header.headerModel"
    ],

    controller: "header-header",
    viewModel: {
        type: "header-header"
    },
    xtype: 'header',
   	cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
    items:[{  
        xtype: 'component',
        html: '<div><h2>Select *from sqlwang;</h2></div>',
        width: 250
    }]
});
