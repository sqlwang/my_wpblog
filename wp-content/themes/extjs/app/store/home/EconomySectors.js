
Ext.define('AppsBoard.store.home.EconomySectors', {
    extend: 'Ext.data.Store',
    alias: 'store.economy-sectors',

    fields: ['skill', 'age'],
    data: [
        { skill: '前端开发',     age: 6},
        { skill: '后台开发',   age: 8},
        { skill: '项目管理',   age: 6},
        { skill: '产品管理',      age: 5}
    ]

});
