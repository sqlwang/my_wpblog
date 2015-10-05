 ImageModel = Ext.define('ImageModel', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'name'},
       {name: 'src'},
       {name: 'alt'}
    ]
});

var store = Ext.create('Ext.data.Store', {
    model: 'ImageModel',
    proxy: {
        type: 'ajax',
        url: '/wordpress/index.php?action=lol_hero_list',
        reader: {
            type: 'json',
            rootProperty: 'images'
        }
    }     
}); 

store.load();

Ext.define('AppsBoard.view.home.Lol', {
    extend: 'Ext.form.Panel',
    xtype: 'form-lol',

    defaultType: 'textfield',
    
    fieldDefaults: {
        labelWidth: 80,
        anchor: '100%'
    },
    listeners:{
    	afterrender : function(form){
    		form.getForm().load({
			    url: "/wordpress/index.php?action=lol_info"
			});
    	}
    },
    items: [{
    	xtype: 'fieldset',
        title: '基本信息',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items:[{
	        fieldLabel: '昵称',
	        editable : false,
	        name: 'name'
	    }, {
	        fieldLabel: '战斗力',
	        editable : false,
	        name: 'fighting'
	    }, {
	        fieldLabel: '被赞数',
	        editable : false,
	        name: 'good'
	    }, {
	        fieldLabel: '被拉黑',
	        editable : false,
	        name: 'bad'
	    }]
    },{
    	xtype: 'fieldset',
        title: '常用英雄',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: Ext.create('Ext.view.View', {
            store: store,
            tpl: [
                '<tpl for=".">',
                    '<div class="" style="border-bottom:1px solid gray;padding-top:5px;"  id="{name:stripTags}">',
                        '<div class="" >' ,
                        	'<img src="{src}" alt="{alt}" title="{name:htmlEncode}" >' ,
                        	'<p class="" style="float:right;"; >{name:htmlEncode}</p>',
                        '</div>',
                    '</div>',
                '</tpl>'
            ],
            layout:'hbox',
            multiSelect: true,
            trackOver: true,
            overItemCls: 'x-item-over',
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No images to display'
        })
    }]
});