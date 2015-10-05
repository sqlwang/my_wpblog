Ext.define('AppsBoard.view.home.UserProfileModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userprofile',

    stores: {
        userNotificationStore: {
            autoLoad: true,
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'name'
                },
                {
                    name: 'content'
                },
                {
                    name: 'date'
                },
                {
                    name: 'time'
                }
            ],
            proxy: {
                type: 'ajax',
                url: '~api/usernotifications',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});
