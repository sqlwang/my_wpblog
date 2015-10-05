Ext.define('AppsBoard.view.home.Description', {
    extend: 'Ext.panel.Panel',
    xtype: 'profiledescriptionpanel',

    height: 300,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    //cls:'shadow-panel',
    scrollable : true,
    items: [{
        xtype: 'container',
        html: '<h2 class="x-fa fa-user"> About Me</h2>'
    },{
        xtype: 'fieldset',
        title: '基本信息',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items:[ {
	        xtype: 'textfield',
	        name: 'displayfield1',
	        fieldLabel: '昵称',
	        editable : false,
	        value: 'sql wang/lion wang'
	    }, {
	        xtype: 'textfield',
	        name: 'displayfield1',
	        editable : false,
	        fieldLabel: 'QQ',
	        value: '176254843'
	    }]
	},{
        xtype: 'fieldset',
        title: '非一般信息',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items:[ {
	        xtype: 'textfield',
	        name: 'displayfield1',
	        fieldLabel: '邮箱',
	        editable : false,
	        value: 'sqlwang.com@163.com'
	    }, {
	        xtype: 'textfield',
	        name: 'displayfield1',
	        fieldLabel: '爱好',
	        editable : false,
	        value: '看书/电脑游戏/运动/美食'
	    }, {
	        xtype: 'textfield',
	        name: 'displayfield1',
	        editable : false,
	        fieldLabel: '座右铭',
	        value: '好好学习,天天向上'
	    }]
	},{
        xtype: 'fieldset',
        title: '工作技能',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items:[ {
	        xtype: 'skill-charts'
	    }]
	}]
});


Ext.define('AppsBoard.view.home.skillCharts', {
    extend: 'Ext.Panel',
    xtype: 'skill-charts',

    width: 650,
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 300,
        insetPadding: 10,
        flipXY: true,
        animation: {
            easing: 'easeOut',
            duration: 300
        },
        store: {
            type: 'economy-sectors'
        },
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'age',
            grid: true,
            maximum: 10,
            title: {
            	text: '年限',
           		fontSize: 18
            }
        }, {
            type: 'category',
            position: 'left',
            fields: 'skill',
            grid: true
        }],
        series: [{
            type: 'bar',
            xField: 'skill',
            yField: 'age'
        }]
    }]
});

