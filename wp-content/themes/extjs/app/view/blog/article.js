Ext.define('Blog', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'title', type:'string' },
        { name:'content', type:'string' }
    ]
});

Ext.create('Ext.data.Store', {
    id:'BlogsStore',
    model: 'Blog',
    data: [
        { title:'http://www.sencha.com/img/20110215-feat-drawing.png', content:'Performance Tuned' }
    ]
});

var blogTpl = new Ext.XTemplate(
	'<tpl for=".">',
        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
          '<img src="{title}" />',
          '<br/><span>{content}</span>',
        '</div>',
    '</tpl>'
);

Ext.define('AppsBoard.view.blog.article', {
    extend: 'Ext.view.View',
    xtype: 'article',
	//cls: 'kpi-tiles kpi-meta',
	itemSelector: 'article.panel',
	id:'bolg-article',
	store: Ext.data.StoreManager.lookup('BlogsStore'),
    tpl: blogTpl
});
