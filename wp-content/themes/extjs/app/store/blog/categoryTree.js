Ext.define('AppsBoard.store.blog.categoryTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [{
            text:   'Home',
            view:   'home.UserProfile',
            leaf:   true,
            iconCls: 'right-icon new-icon x-fa fa-desktop',
            routeId: 'home'
        },
        {
            text:   'Blog',
            view:   'blog.blog',
            iconCls: 'right-icon hot-icon x-fa fa-send ',
            leaf:   true,
            routeId: 'blog'

        }]
    },
    fields: [{
	    name: 'text'
	}]
});
