/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppsBoard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    init: function(view){
    	//获取菜单栏
		//动态获取导航栏
    	var tabpanel = view.down('tabpanel');
    	tabpanel.setActiveItem('card-home');
    },
    routes: {
        '!:id': {
            action: 'onNavigate',
            before: 'beforeNavigate'
        },

        '!:id/:state': {
            action: 'onNavigateDeep',
            before: 'beforeNavigateDeep'
        }
    },

    listen: {
        controller: {
            '*': {
                // We delegate all changes of router history to this controller by firing
                // the "changeroute" event from other controllers.
                changeroute: 'changeRoute',
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    destroy: function () {
        Ext.destroyMembers(this, 'menu');
        this.callParent();
    },

    beforeNavigate: function (id, action) {
        var view = this.getView();
        var tab = view.getComponent(id);

        if (tab) {
            action.resume();
        } else {
            this.onBadRoute();
        }
    },

    beforeNavigateDeep: function (id, state, action) {
        var view = this.getView();
        var tab = view.getComponent(id);
        var valid;

//        if (tab.isValidState) {
//            valid = tab.isValidState(state);
//        }

        if (valid) {
            action.resume();
        } else {
            this.onBadRoute();
        }
    },

    changeRoute: function (controller, route) {
        // Since we parse
        if (route.substring(0, 1) !== '!') {
            route = '!' + route;
        }

        this.redirectTo(route);
    },

    getTabRoute: function (tab) {
        var route = tab.xtype;

        if (tab.getActiveState) {
            route += '/' + (tab.getActiveState() || tab.getDefaultActiveState());
        }

        return route;
    },

    onBadRoute: function () {
//        var app = ExecDashboard.app.getApplication();
//        this.changeRoute(this, app.getDefaultToken());
    },

    onNavigate: function (id) {
        //Ext.log('navigate: ' + id);
        var tabs = this.getView();

        var tab = tabs.setActiveTab(id);
        if (tab) {
            // if we changed active tabs...
            var route = this.getTabRoute(tab);
            if (route && route !== id) {
                this.changeRoute(this, route);
            }
        }
    },

    onNavigateDeep: function (id, state) {
        //Ext.log('navigate: ' + id + ' / ' + state);
        var tabs = this.getView();
        var tab = tabs.setActiveTab(id) || tabs.getActiveTab();

        tab.setActiveState(state);
    },

    onTabChange: function (mainView, newTab) {
        var route = this.getTabRoute(newTab);
        this.changeRoute(this, route);
    },

    onMenuClick: function (menu, item) {
        this.getView().setActiveTab(menu.items.indexOf(item) + 1); // +1 for invisible first tab
    },

    onSwitchTool: function (e) {
        var menu = this.menu;

        if (!menu) {
            menu = this.getView().assistiveMenu;
            this.menu = menu = new Ext.menu.Menu(menu);
        }

        menu.showAt(e.getXY());
    },

    onUnmatchedRoute: function(token) {
        if (token) {
            this.onBadRoute();
        }
    }
});
