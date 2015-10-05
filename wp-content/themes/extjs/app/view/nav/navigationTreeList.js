Ext.define('AppsBoard.view.nav.navigationTreeList', {
    extend: 'Ext.list.Tree',
    xtype: 'navigation-tree',
    requires: [
        'Ext.list.Tree'
    ],

    reference: 'navigationTreeList',
    itemId: 'navigationTreeList',
    ui: 'navigation',
    store: 'NavigationTree',
    width: 250,
    expanderFirst: false,
    expanderOnly: false,
    listeners: {
        //selectionchange: 'onNavigationTreeSelectionChange'
    }
});
