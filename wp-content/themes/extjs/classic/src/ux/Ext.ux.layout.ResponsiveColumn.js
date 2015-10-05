Ext.data.JsonP.Ext_ux_layout_ResponsiveColumn({
	"parentMixins" : ["Ext.mixin.Factoryable", "Ext.util.ElementContainer"],
	"uses" : [],
	"html" : "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='docClass'>Ext.layout.Layout</a><div class='subclass '><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='docClass'>Ext.layout.container.Container</a><div class='subclass '><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='docClass'>Ext.layout.container.Auto</a><div class='subclass '><strong>Ext.ux.layout.ResponsiveColumn</strong></div></div></div></div></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/Ext.mixin.Factoryable' rel='Ext.mixin.Factoryable' class='docClass'>Ext.mixin.Factoryable</a></div><div class='dependency'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='docClass'>Ext.util.ElementContainer</a></div><h4>Files</h4><div class='dependency'><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn' target='_blank'>ResponsiveColumn.js</a></div></pre><div class='doc-contents'><p>A simple grid-like layout for proportionally dividing container space and allocating it\nto each item. All items in this layout are given one or more percentage sizes and CSS\n<code>float:left</code> is used to provide the wrapping.</p>\n\n<p>To select which of the percentage sizes an item uses, this layout adds a viewport\n<a href=\"#!/api/Ext.ux.layout.ResponsiveColumn-cfg-states\" rel=\"Ext.ux.layout.ResponsiveColumn-cfg-states\" class=\"docClass\">size-dependent</a> class name to the container. The stylesheet must\nprovide the rules to select the desired size using the responsivecolumn-item\nmixin.</p>\n\n<p>For example, a panel in a responsive column layout might add the following styles:</p>\n\n<pre><code> .my-panel {\n     // consume 50% of the avalable space inside the container by default\n     @include responsivecolumn-item(50%);\n\n     .x-responsivecolumn-small &amp; {\n         // consume 100% of available space in \"small\" mode\n         // (viewport width &lt; 1000 by default)\n         @include responsivecolumn-item(100%);\n     }\n }\n</code></pre>\n\n<p>Alternatively, instead of targeting specific panels in CSS, you can create reusable\nclasses:</p>\n\n<pre><code> .big-50 {\n     // consume 50% of the avalable space inside the container by default\n     @include responsivecolumn-item(50%);\n }\n\n .x-responsivecolumn-small {\n     &gt; .small-100 {\n         @include responsivecolumn-item(100%);\n     }\n }\n</code></pre>\n\n<p>These can be added to components in the layout using the <code>responsiveCls</code> config:</p>\n\n<pre><code> items: [{\n     xtype: 'my-panel',\n\n     // Use 50% of space when viewport is \"big\" and 100% when viewport\n     // is \"small\":\n     responsiveCls: 'big-50 small-100'\n }]\n</code></pre>\n\n<p>The <code>responsiveCls</code> config is provided by this layout to avoid overwriting classes\nspecified using <code>cls</code> or other standard configs.</p>\n\n<p>Internally, this layout simply uses <code>float:left</code> and CSS <code>calc()</code> (except on IE8) to\n\"flex\" each item. The calculation is always based on a percentage with a spacing taken\ninto account to separate the items from each other.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-animatePolicy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-cfg-animatePolicy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-cfg-animatePolicy' class='name expandable'>animatePolicy</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>An object that contains as keys the names of the properties that can be animated\nby child items as a consequence of a...</div><div class='long'><p>An object that contains as keys the names of the properties that can be animated\nby child items as a consequence of a layout. This config is used internally by the\n<a href=\"#!/api/Ext.layout.container.Accordion\" rel=\"Ext.layout.container.Accordion\" class=\"docClass\">accordion</a> layout to cause the child panels\nto animate to their proper size and position after a collapse/expand event.</p>\n        <p>Available since: <b>4.1.0</b></p>\n</div></div></div><div id='cfg-childEls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-cfg-childEls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-cfg-childEls' class='name expandable'>childEls</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The canonical form of childEls is an object keyed by child's property name\nwith values that are objects with the foll...</div><div class='long'><p>The canonical form of <code>childEls</code> is an object keyed by child's property name\nwith values that are objects with the following properties.</p>\n\n<ul>\n<li><code>itemId</code> - The id to combine with the Component's id that is the id of the\nchild element.</li>\n<li><code>id</code> - The id of the child element.</li>\n<li><code>leaf</code> - Set to <code>true</code> to ignore content when scanning for childEls. This\nshould be set on things like the generated content for an <code><a href=\"#!/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a></code>.</li>\n<li><code>select</code>: A selector that will be passed to <a href=\"#!/api/Ext.dom.Element-method-select\" rel=\"Ext.dom.Element-method-select\" class=\"docClass\">Ext.dom.Element.select</a>.</li>\n<li><code>selectNode</code>: A selector that will be passed to <a href=\"#!/api/Ext.dom.Element-method-selectNode\" rel=\"Ext.dom.Element-method-selectNode\" class=\"docClass\">Ext.dom.Element.selectNode</a>.</li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code> childEls: {\n     button: true,\n     buttonText: 'text',\n     buttonImage: {\n         itemId: 'image'\n     }\n }\n</code></pre>\n\n<p>The above is translated into the following complete form:</p>\n\n<pre><code> childEls: {\n     button: {\n         name: 'button',\n         itemId: 'button'\n     },\n     buttonText: {\n         name: 'buttonText',\n         itemId: 'text'\n     },\n     buttonImage: {\n         name: 'buttonImage',\n         itemId: 'image'\n     }\n }\n</code></pre>\n\n<p>The above can be provided as an array like so:</p>\n\n<pre><code> childEls: [\n     'button',\n     { name: 'buttonText', itemId: 'text' },\n     { name: 'buttonImage', itemId: 'image' }\n }\n</code></pre>\n\n<p>For example, a Component which renders a title and body text:</p>\n\n<pre class='inline-example '><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>', {\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>(),\n    renderTpl: [\n        '&lt;h1 id=\"{id}-title\" data-ref=\"title\"&gt;{title}&lt;/h1&gt;',\n        '&lt;p&gt;{msg}&lt;/p&gt;',\n    ],\n    renderData: {\n        title: \"Error\",\n        msg: \"Something went wrong\"\n    },\n    childEls: [\"title\"],\n    listeners: {\n        afterrender: function(cmp){\n            // After rendering the component will have a title property\n            cmp.title.setStyle({color: \"red\"});\n        }\n    }\n});\n</code></pre>\n\n<p>When using <code>select</code>, the property will be an instance of <a href=\"#!/api/Ext.dom.CompositeElement\" rel=\"Ext.dom.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a>.\nIn all other cases, the property will be an <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a> or <code>null</code>\nif not found.</p>\n\n<p>Care should be taken when using <code>select</code> or <code>selectNode</code> to find child elements.\nThe following issues should be considered:</p>\n\n<ul>\n<li>Performance: using selectors can be 10x slower than id lookup.</li>\n<li>Over-selecting: selectors are applied after the DOM elements for all children\nhave been rendered, so selectors can match elements from child components\n(including nested versions of the same component) accidentally.</li>\n</ul>\n\n\n<p>This above issues are most important when using <code>select</code> since it returns multiple\nelements.</p>\n<p>Defaults to: <code>['outerCt', 'innerCt']</code></p><p>Overrides: <a href=\"#!/api/Ext.util.ElementContainer-cfg-childEls\" rel=\"Ext.util.ElementContainer-cfg-childEls\" class=\"docClass\">Ext.util.ElementContainer.childEls</a></p></div></div></div><div id='cfg-itemCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-cfg-itemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-cfg-itemCls' class='name expandable'>itemCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for\nadding customized styles to the container or any of its children using standard CSS\nrules. See <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-componentCls\" rel=\"Ext.Component-cfg-componentCls\" class=\"docClass\">componentCls</a> also.</p>\n</div></div></div><div id='cfg-reserveScrollbar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-cfg-reserveScrollbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-cfg-reserveScrollbar' class='name expandable'>reserveScrollbar</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to leave space for a vertical scrollbar (if the OS shows space-consuming scrollbars) regardless\nof whethe...</div><div class='long'><p>Set to <code>true</code> to leave space for a vertical scrollbar (if the OS shows space-consuming scrollbars) regardless\nof whether a scrollbar is needed.</p>\n\n<p>This is useful if content height changes during application usage, but you do not want the calculated width\nof child items to change when a scrollbar appears or disappears. The scrollbar will appear in the reserved space,\nand the calculated width of child Components will not change.</p>\n\n<pre class='inline-example '><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Employee', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: [\n       {name: 'rating', type: 'int'},\n       {name: 'salary', type: 'float'},\n       {name: 'name'}\n    ]\n});\n\nfunction createFakeData(count) {\n    var firstNames   = ['Screech', 'Kelly', 'Zach', 'Jessie', 'Lisa', 'A.C.', 'Richard'],\n        lastNames    = ['Powers', 'Kapowski', 'Morris', 'Spano', 'Turtle', 'Slater', 'Belding'],\n        ratings      = [1, 2, 3, 4, 5],\n        salaries     = [100, 400, 900, 1500, 1000000];\n\n    var data = [];\n    for (var i = 0; i &lt; (count || 25); i++) {\n        var ratingId    = Math.floor(Math.random() * ratings.length),\n            salaryId    = Math.floor(Math.random() * salaries.length),\n            firstNameId = Math.floor(Math.random() * firstNames.length),\n            lastNameId  = Math.floor(Math.random() * lastNames.length),\n\n            rating      = ratings[ratingId],\n            salary      = salaries[salaryId],\n            name        = <a href=\"#!/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a>(\"{0} {1}\", firstNames[firstNameId], lastNames[lastNameId]);\n\n        data.push({\n            rating: rating,\n            salary: salary,\n            name: name\n        });\n    }\n    store.loadData(data);\n}\n\n// create the Data Store\nvar store = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>', {\n    id: 'store',\n    model: 'Employee',\n    proxy: {\n        type: 'memory'\n    }\n});\ncreateFakeData(10);\n\nvar grid = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n    title: 'Grid loaded with varying number of records',\n    anchor: '100%',\n    store: store,\n    columns: [{\n        xtype: 'rownumberer',\n        width: 40,\n        sortable: false\n    },{\n        text: 'Name',\n        flex: 1,\n        sortable: true,\n        dataIndex: 'name'\n    },{\n        text: 'Rating',\n        width: 125,\n        sortable: true,\n        dataIndex: 'rating'\n    },{\n        text: 'Salary',\n        width: 125,\n        sortable: true,\n        dataIndex: 'salary',\n        align: 'right',\n        renderer: <a href=\"#!/api/Ext.util.Format-method-usMoney\" rel=\"Ext.util.Format-method-usMoney\" class=\"docClass\">Ext.util.Format.usMoney</a>\n    }]\n});\n\n<a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>', {\n    renderTo: document.body,\n    width: 800,\n    height: 600,\n    layout: {\n        type: 'anchor',\n        reserveScrollbar: true // There will be a gap even when there's no scrollbar\n    },\n    scrollable: true,\n    items: grid,\n    tbar: {\n        defaults: {\n            handler: function(b) {\n                createFakeData(b.count);\n            }\n        },\n        items: [{\n             text: '10 Items',\n             count: 10\n        },{\n             text: '100 Items',\n             count: 100\n        },{\n             text: '300 Items',\n             count: 300\n        },{\n             text: '1000 Items',\n             count: 1000\n        },{\n             text: '5000 Items',\n             count: 5000\n        }]\n    }\n});\n</code></pre>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-states' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.layout.ResponsiveColumn'>Ext.ux.layout.ResponsiveColumn</span><br/><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn-cfg-states' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.layout.ResponsiveColumn-cfg-states' class='name expandable'>states</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A set of layout state names corresponding to viewport size thresholds. ...</div><div class='long'><p>A set of layout state names corresponding to viewport size thresholds. One of the\nstates will be used to assign the responsive column CSS class to the container to\ntrigger appropriate item sizing.</p>\n\n<p>For example:</p>\n\n<pre><code> layout: {\n     type: 'responsivecolumn',\n     states: {\n         small: 800,\n         medium: 1200,\n         large: 0\n     }\n }\n</code></pre>\n\n<p>Given the above set of responsive states, one of the following CSS classes will be\nadded to the container:</p>\n\n<ul>\n<li><code>x-responsivecolumn-small</code> - If the viewport is &lt;= 800px</li>\n<li><code>x-responsivecolumn-medium</code> - If the viewport is > 800px and &lt;= 1200px</li>\n<li><code>x-responsivecolumn-large</code> - If the viewport is > 1200px</li>\n</ul>\n\n\n<p>For sake of efficiency these classes are based on the size of the browser viewport\n(the browser window) and not on the container size. As the size of the viewport\nchanges, this layout will maintain the appropriate CSS class on the container which\nwill then activate the appropriate CSS rules to size the child items.</p>\n<p>Defaults to: <code>{small: 1000, large: 0}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-S-className' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-S-className' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-S-className' class='name expandable'>$className</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Ext.Base'</code></p></div></div></div><div id='property-S-configPrefixed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-S-configPrefixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-S-configPrefixed' class='name expandable'>$configPrefixed</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The value true causes config values to be stored on instances using a\nproperty name prefixed with an underscore (\"_\")...</div><div class='long'><p>The value <code>true</code> causes <code>config</code> values to be stored on instances using a\nproperty name prefixed with an underscore (\"_\") character. A value of <code>false</code>\nstores <code>config</code> values as properties using their exact name (no prefix).</p>\n<p>Defaults to: <code>true</code></p>        <p>Available since: <b>5.0.0</b></p>\n<p>Overrides: <a href=\"#!/api/Ext.Component-property-S-configPrefixed\" rel=\"Ext.Component-property-S-configPrefixed\" class=\"docClass\">Ext.Component.$configPrefixed</a>, <a href=\"#!/api/Ext.plugin.Abstract-property-S-configPrefixed\" rel=\"Ext.plugin.Abstract-property-S-configPrefixed\" class=\"docClass\">Ext.plugin.Abstract.$configPrefixed</a>, <a href=\"#!/api/Ext.layout.Layout-property-S-configPrefixed\" rel=\"Ext.layout.Layout-property-S-configPrefixed\" class=\"docClass\">Ext.layout.Layout.$configPrefixed</a>, <a href=\"#!/api/Ext.data.AbstractStore-property-S-configPrefixed\" rel=\"Ext.data.AbstractStore-property-S-configPrefixed\" class=\"docClass\">Ext.data.AbstractStore.$configPrefixed</a>, <a href=\"#!/api/Ext.layout.container.boxOverflow.None-property-S-configPrefixed\" rel=\"Ext.layout.container.boxOverflow.None-property-S-configPrefixed\" class=\"docClass\">Ext.layout.container.boxOverflow.None.$configPrefixed</a></p></div></div></div><div id='property-S-configStrict' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-S-configStrict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-S-configStrict' class='name expandable'>$configStrict</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The value true instructs the initConfig method to only honor values for\nproperties declared in the config block of a ...</div><div class='long'><p>The value <code>true</code> instructs the <code>initConfig</code> method to only honor values for\nproperties declared in the <code>config</code> block of a class. When <code>false</code>, properties\nthat are not declared in a <code>config</code> block will be placed on the instance.</p>\n<p>Defaults to: <code>true</code></p>        <p>Available since: <b>5.0.0</b></p>\n<p>Overrides: <a href=\"#!/api/Ext.Component-property-S-configStrict\" rel=\"Ext.Component-property-S-configStrict\" class=\"docClass\">Ext.Component.$configStrict</a>, <a href=\"#!/api/Ext.plugin.Abstract-property-S-configStrict\" rel=\"Ext.plugin.Abstract-property-S-configStrict\" class=\"docClass\">Ext.plugin.Abstract.$configStrict</a>, <a href=\"#!/api/Ext.layout.Layout-property-S-configStrict\" rel=\"Ext.layout.Layout-property-S-configStrict\" class=\"docClass\">Ext.layout.Layout.$configStrict</a>, <a href=\"#!/api/Ext.data.AbstractStore-property-S-configStrict\" rel=\"Ext.data.AbstractStore-property-S-configStrict\" class=\"docClass\">Ext.data.AbstractStore.$configStrict</a>, <a href=\"#!/api/Ext.layout.container.boxOverflow.None-property-S-configStrict\" rel=\"Ext.layout.container.boxOverflow.None-property-S-configStrict\" class=\"docClass\">Ext.layout.container.boxOverflow.None.$configStrict</a></p></div></div></div><div id='property-_responsiveCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.layout.ResponsiveColumn'>Ext.ux.layout.ResponsiveColumn</span><br/><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn-property-_responsiveCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.layout.ResponsiveColumn-property-_responsiveCls' class='name expandable'>_responsiveCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'responsivecolumn'</code></p></div></div></div><div id='property-activeItemCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-activeItemCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-activeItemCount' class='name expandable'>activeItemCount</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>tracks the number of child items that do not use \"liquid\" CSS layout ...</div><div class='long'><p>tracks the number of child items that do not use \"liquid\" CSS layout</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-animatePolicy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-animatePolicy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-animatePolicy' class='name expandable'>animatePolicy</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>An object which contains boolean properties specifying which properties are to be\nanimated upon flush of child Compon...</div><div class='long'><p>An object which contains boolean properties specifying which properties are to be\nanimated upon flush of child Component ContextItems. For example, Accordion would\nhave:</p>\n\n<pre><code> {\n     y: true,\n     height: true\n }\n</code></pre>\n</div></div></div><div id='property-autoSizePolicy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-autoSizePolicy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-autoSizePolicy' class='name expandable'>autoSizePolicy</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{readsWidth: 1, readsHeight: 1, setsWidth: 0, setsHeight: 0}</code></p></div></div></div><div id='property-destroyed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-destroyed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-destroyed' class='name expandable'>destroyed</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This property is set to true after the destroy method is called. ...</div><div class='long'><p>This property is set to <code>true</code> after the <code>destroy</code> method is called.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-done' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-done' class='name expandable'>done</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Used only during a layout run, this value indicates that a\nlayout has finished its calculations. ...</div><div class='long'><p>Used only during a layout run, this value indicates that a\nlayout has finished its calculations. This flag is set to true prior to the call to\n<a href=\"#!/api/Ext.layout.Layout-method-calculate\" rel=\"Ext.layout.Layout-method-calculate\" class=\"docClass\">calculate</a> and should be set to false if this layout has more work to do.</p>\n</div></div></div><div id='property-factoryConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-factoryConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-factoryConfig' class='name expandable'>factoryConfig</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>If this property is specified by the target class of this mixin its properties are\nused to configure the created Ext....</div><div class='long'><p>If this property is specified by the target class of this mixin its properties are\nused to configure the created <code><a href=\"#!/api/Ext.Factory\" rel=\"Ext.Factory\" class=\"docClass\">Ext.Factory</a></code>.</p>\n<p>Defaults to: <code>{type: 'layout'}</code></p><p>Overrides: <a href=\"#!/api/Ext.mixin.Factoryable-property-factoryConfig\" rel=\"Ext.mixin.Factoryable-property-factoryConfig\" class=\"docClass\">Ext.mixin.Factoryable.factoryConfig</a></p></div></div></div><div id='property-initialized' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-initialized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-initialized' class='name expandable'>initialized</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-innerCtCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-innerCtCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-innerCtCls' class='name expandable'>innerCtCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'autocontainer-innerCt'</code></p></div></div></div><div id='property-isConfiguring' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-isConfiguring' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-isConfiguring' class='name expandable'>isConfiguring</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This property is set to true during the call to initConfig. ...</div><div class='long'><p>This property is set to <code>true</code> during the call to <code>initConfig</code>.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>5.0.0</b></p>\n</div></div></div><div id='property-isFirstInstance' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-isFirstInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-isFirstInstance' class='name expandable'>isFirstInstance</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This property is set to true if this instance is the first of its class. ...</div><div class='long'><p>This property is set to <code>true</code> if this instance is the first of its class.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>5.0.0</b></p>\n</div></div></div><div id='property-isInstance' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-isInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-isInstance' class='name expandable'>isInstance</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This value is true and is used to identify plain objects from instances of\na defined class. ...</div><div class='long'><p>This value is <code>true</code> and is used to identify plain objects from instances of\na defined class.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-isLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-isLayout' class='name expandable'>isLayout</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>true in this class to identify an object as an instantiated Layout, or subclass thereof. ...</div><div class='long'><p><code>true</code> in this class to identify an object as an instantiated Layout, or subclass thereof.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-lastOverflowAdjust' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-lastOverflowAdjust' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-lastOverflowAdjust' class='name expandable'>lastOverflowAdjust</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Begin with no previous adjustments ...</div><div class='long'><p>Begin with no previous adjustments</p>\n<p>Defaults to: <code>{width: 0, height: 0}</code></p></div></div></div><div id='property-manageOverflow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-manageOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-manageOverflow' class='name expandable'>manageOverflow</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>true to rerun the layout if scrollbars are needed. ...</div><div class='long'><p>true to rerun the layout if scrollbars are needed.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-managePadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-managePadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-managePadding' class='name expandable'>managePadding</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>indicates that this layout will correct cross browser padding differences when the\ncontainer has overflow. ...</div><div class='long'><p>indicates that this layout will correct cross browser padding differences when the\ncontainer has overflow.</p>\n\n<p>In some browsers the right and/or bottom padding of a container is lost when\nthe container has overflow.  If managePadding is true the layout will apply the\npadding to an inner wrapping element instead of the container element that has the\noverflow so that paddding will be included in the scrollable area.\nNote: padding will not be managed if it is configured on the container using\na style config or css class.  In order to be managed, padding must be added to the\ncontainer using the appropriate <a href=\"#!/api/Ext.Component-property-contentPaddingProperty\" rel=\"Ext.Component-property-contentPaddingProperty\" class=\"docClass\">contentPaddingProperty</a>.  For <a href=\"#!/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Panels</a> use\n<a href=\"#!/api/Ext.panel.Panel-cfg-bodyPadding\" rel=\"Ext.panel.Panel-cfg-bodyPadding\" class=\"docClass\">Ext.panel.Panel.bodyPadding</a>, and for\n<a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Containers</a>, use\n<a href=\"#!/api/Ext.Component-cfg-padding\" rel=\"Ext.Component-cfg-padding\" class=\"docClass\">padding</a></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-mixinId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-property-mixinId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-property-mixinId' class='name expandable'>mixinId</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'elementCt'</code></p><p>Overrides: <a href=\"#!/api/Ext.util.Animate-property-mixinId\" rel=\"Ext.util.Animate-property-mixinId\" class=\"docClass\">Ext.util.Animate.mixinId</a>, <a href=\"#!/api/Ext.mixin.Factoryable-property-mixinId\" rel=\"Ext.mixin.Factoryable-property-mixinId\" class=\"docClass\">Ext.mixin.Factoryable.mixinId</a></p></div></div></div><div id='property-needsItemSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-needsItemSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-needsItemSize' class='name expandable'>needsItemSize</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>auto layout does not care about the dimensions of individual child items since\nit does not size them, and it measures...</div><div class='long'><p>auto layout does not care about the dimensions of individual child items since\nit does not size them, and it measures them as a whole when in shrinkWrap mode.</p>\n<p>Defaults to: <code>false</code></p><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-property-needsItemSize\" rel=\"Ext.layout.Layout-property-needsItemSize\" class=\"docClass\">Ext.layout.Layout.needsItemSize</a></p></div></div></div><div id='property-outerCtCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-outerCtCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-outerCtCls' class='name expandable'>outerCtCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'autocontainer-outerCt'</code></p></div></div></div><div id='property-privates' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-property-privates' class='name expandable'>privates</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.mixin.Bindable-property-privates\" rel=\"Ext.mixin.Bindable-property-privates\" class=\"docClass\">Ext.mixin.Bindable.privates</a></p></div></div></div><div id='property-renderTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-renderTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-renderTpl' class='name expandable'>renderTpl</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Auto layout's renderTpl wraps the content in an outerCt which is used to accomplish\nthe following 3 goals:\n\n\nWhen the...</div><div class='long'><p>Auto layout's renderTpl wraps the content in an outerCt which is used to accomplish\nthe following 3 goals:</p>\n\n<ol>\n<li>When the container has a shrink wrapped width and/or height, the outerCt is used\nto measure the size of the content.</li>\n<li>When the container has overflow some browsers lose the container's right and/or\nbottom padding.  To fix this, the padding is rendered to the outerCt instead of\nthe container target element.  This ensures that the padding is included in the\ncontainer's scrollWidth/scrollHeight. In Old IE when a table is used, the padding\nis rendered to the innerCt td element.</li>\n<li>The outerCt contains the margins of its children, that is to say, it prevents\nthem from collapsing.</li>\n</ol>\n\n<p>Defaults to: <code>['&lt;div id=&quot;{ownerId}-outerCt&quot; data-ref=&quot;outerCt&quot; class=&quot;{outerCtCls}&quot; role=&quot;presentation&quot;&gt;', '&lt;div id=&quot;{ownerId}-innerCt&quot; data-ref=&quot;innerCt&quot; style=&quot;{%this.renderPadding(out, values)%}&quot; ', '&lt;tpl if=&quot;!$comp.html&quot;&gt;role=&quot;presentation&quot;&lt;/tpl&gt;', 'class=&quot;{innerCtCls}&quot;&gt;', '{%this.renderBody(out,values)%}', '&lt;/div&gt;', '&lt;/div&gt;']</code></p><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-property-renderTpl\" rel=\"Ext.layout.container.Container-property-renderTpl\" class=\"docClass\">Ext.layout.container.Container.renderTpl</a></p></div></div></div><div id='property-running' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-property-running' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-running' class='name expandable'>running</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); // dependent on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div><div id='property-setsItemSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-setsItemSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-setsItemSize' class='name expandable'>setsItemSize</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>true if this layout may set the size of its child items. ...</div><div class='long'><p><code>true</code> if this layout may set the size of its child items.  Layouts that do not\nset the size of their child items (autocontainer, form) can set this to false\nfor an additional performance optimization.  When <code>true</code> the layout system will\nnot create a context item for children that use liquid layout, because there is\nno need for a context item if item size is neither read nor set by the owning layout.</p>\n<p>Defaults to: <code>false</code></p><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-property-setsItemSize\" rel=\"Ext.layout.Layout-property-setsItemSize\" class=\"docClass\">Ext.layout.Layout.setsItemSize</a></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-property-type' class='name expandable'>type</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Defaults to: <code>'autocontainer'</code></p><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-property-type\" rel=\"Ext.layout.container.Container-property-type\" class=\"docClass\">Ext.layout.container.Container.type</a></p></div></div></div><div id='property-usesContainerHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-usesContainerHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-usesContainerHeight' class='name expandable'>usesContainerHeight</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-usesContainerWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-usesContainerWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-usesContainerWidth' class='name expandable'>usesContainerWidth</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-usesHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-usesHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-usesHeight' class='name expandable'>usesHeight</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-usesWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-property-usesWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-property-usesWidth' class='name expandable'>usesWidth</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-S-onExtended' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-property-S-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-property-S-onExtended' class='name expandable'>$onExtended</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.container.Container-method-constructor' class='name expandable'>Ext.ux.layout.ResponsiveColumn</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-constructor\" rel=\"Ext.layout.Layout-method-constructor\" class=\"docClass\">Ext.layout.Layout.constructor</a></p></div></div></div><div id='method-addChildEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-method-addChildEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-method-addChildEl' class='name expandable'>addChildEl</a>( <span class='pre'>childEl</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Add a childEl specific to this instance. ...</div><div class='long'><p>Add a childEl specific to this instance. This must be called before render.</p>\n        <p>Available since: <b>6.0.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childEl</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-addDeprecations' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-addDeprecations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addDeprecations' class='name expandable'>addDeprecations</a>( <span class='pre'>deprecations</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method applies a versioned, deprecation declaration to this class. ...</div><div class='long'><p>This method applies a versioned, deprecation declaration to this class. This\nis typically called by the <code>deprecated</code> config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deprecations</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-afterClassMixedIn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-method-afterClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-method-afterClassMixedIn' class='name expandable'>afterClassMixedIn</a>( <span class='pre'>targetClass</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after the mixin is applied. ...</div><div class='long'><p>Called after the mixin is applied. We need to see if <code>childEls</code> were used by\nthe <code>targetClass</code> and apply them to the config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetClass</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterCollapse' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-afterCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-afterCollapse' class='name expandable'>afterCollapse</a>( <span class='pre'>owner, animated</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called by an owning Panel after the Panel finishes its collapse process. ...</div><div class='long'><p>Called by an owning Panel after the Panel finishes its collapse process.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>animated</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-afterExpand' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-afterExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-afterExpand' class='name expandable'>afterExpand</a>( <span class='pre'>owner, animated</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called by an owning Panel after the Panel finishes its expand process. ...</div><div class='long'><p>Called by an owning Panel after the Panel finishes its expand process.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>animated</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>item</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Removes layout's itemCls and owning Container's itemCls. ...</div><div class='long'><p>Removes layout's itemCls and owning Container's itemCls.\nClears the managed dimensions flags</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-attachChildEls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-method-attachChildEls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-method-attachChildEls' class='name expandable'>attachChildEls</a>( <span class='pre'>el, owner</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets references to elements inside the component. ...</div><div class='long'><p>Sets references to elements inside the component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>owner</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-beforeLayoutCycle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-beforeLayoutCycle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-beforeLayoutCycle' class='name expandable'>beforeLayoutCycle</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-beginCollapse' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-beginCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-beginCollapse' class='name expandable'>beginCollapse</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called by an owning Panel before the Panel begins its collapse process. ...</div><div class='long'><p>Called by an owning Panel before the Panel begins its collapse process.\nMost layouts will not need to override the default <a href=\"#!/api/Ext-property-emptyFn\" rel=\"Ext-property-emptyFn\" class=\"docClass\">Ext.emptyFn</a> implementation.</p>\n</div></div></div><div id='method-beginExpand' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-beginExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-beginExpand' class='name expandable'>beginExpand</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called by an owning Panel before the Panel begins its expand process. ...</div><div class='long'><p>Called by an owning Panel before the Panel begins its expand process.\nMost layouts will not need to override the default <a href=\"#!/api/Ext-property-emptyFn\" rel=\"Ext-property-emptyFn\" class=\"docClass\">Ext.emptyFn</a> implementation.</p>\n</div></div></div><div id='method-beginLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.layout.ResponsiveColumn'>Ext.ux.layout.ResponsiveColumn</span><br/><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn-method-beginLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.layout.ResponsiveColumn-method-beginLayout' class='name expandable'>beginLayout</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>In addition to work done by our base classes, containers benefit from some extra\ncached data. ...</div><div class='long'><p>In addition to work done by our base classes, containers benefit from some extra\ncached data. The following properties are added to the ownerContext:</p>\n\n<ul>\n<li>visibleItems: the result of <a href=\"#!/api/Ext.ux.layout.ResponsiveColumn-method-getVisibleItems\" rel=\"Ext.ux.layout.ResponsiveColumn-method-getVisibleItems\" class=\"docClass\">getVisibleItems</a></li>\n<li>childItems: the ContextItem[] for each visible item</li>\n<li>targetContext: the ContextItem for the <a href=\"#!/api/Ext.ux.layout.ResponsiveColumn-method-getTarget\" rel=\"Ext.ux.layout.ResponsiveColumn-method-getTarget\" class=\"docClass\">getTarget</a> element</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-beginLayout\" rel=\"Ext.layout.container.Container-method-beginLayout\" class=\"docClass\">Ext.layout.container.Container.beginLayout</a>, <a href=\"#!/api/Ext.layout.container.Auto-method-beginLayout\" rel=\"Ext.layout.container.Auto-method-beginLayout\" class=\"docClass\">Ext.layout.container.Auto.beginLayout</a></p></div></div></div><div id='method-beginLayoutCycle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-beginLayoutCycle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-beginLayoutCycle' class='name expandable'>beginLayoutCycle</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called before any calculation cycles to reset DOM values and prepare for calculation. ...</div><div class='long'><p>Called before any calculation cycles to reset DOM values and prepare for calculation.</p>\n\n<p>This is a write phase and DOM reads should be strictly avoided when overridding\nthis method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-beginLayoutCycle\" rel=\"Ext.layout.container.Container-method-beginLayoutCycle\" class=\"docClass\">Ext.layout.container.Container.beginLayoutCycle</a></p></div></div></div><div id='method-cacheChildItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-cacheChildItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-cacheChildItems' class='name expandable'>cacheChildItems</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-cacheElements' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-cacheElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-cacheElements' class='name expandable'>cacheElements</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-calculate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-calculate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-calculate' class='name expandable'>calculate</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Called to perform the calculations for this layout. ...</div><div class='long'><p>Called to perform the calculations for this layout. This method will be called at\nleast once and may be called repeatedly if the <a href=\"#!/api/Ext.layout.container.Auto-property-done\" rel=\"Ext.layout.container.Auto-property-done\" class=\"docClass\">done</a> property is cleared\nbefore return to indicate that this layout is not yet done. The <a href=\"#!/api/Ext.layout.container.Auto-property-done\" rel=\"Ext.layout.container.Auto-property-done\" class=\"docClass\">done</a> property\nis always set to <code>true</code> before entering this method.</p>\n\n<p>This is a read phase and DOM writes should be strictly avoided in derived classes.\nInstead, DOM writes need to be written to <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a> objects to\n be flushed at the next opportunity.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-calculate\" rel=\"Ext.layout.container.Container-method-calculate\" class=\"docClass\">Ext.layout.container.Container.calculate</a></p></div></div></div><div id='method-calculateContentSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-calculateContentSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-calculateContentSize' class='name expandable'>calculateContentSize</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-calculateOverflow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-calculateOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-calculateOverflow' class='name expandable'>calculateOverflow</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Handles overflow processing for a container. ...</div><div class='long'><p>Handles overflow processing for a container.  In addition to the ownerContext\npassed to the <a href=\"#!/api/Ext.layout.container.Auto-method-calculate\" rel=\"Ext.layout.container.Auto-method-calculate\" class=\"docClass\">calculate</a> method, this method also needs the containerSize\n(the object returned by <a href=\"#!/api/Ext.layout.container.Auto-method-getContainerSize\" rel=\"Ext.layout.container.Auto-method-getContainerSize\" class=\"docClass\">getContainerSize</a>).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'>args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='deprecated' >deprecated</span><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Use <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10));     // alerts 10\n alert(My.Derived2.method(10)); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n\n<p>To override a method and replace it and also call the superclass method, use\n<a href=\"#!/api/Ext.Base-method-callSuper\" rel=\"Ext.Base-method-callSuper\" class=\"docClass\">callSuper</a>. This is often done to patch a method to fix a bug.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-callSuper' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-callSuper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callSuper' class='name expandable'>callSuper</a>( <span class='pre'>args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This method is used by an override to call the superclass method but bypass any\noverridden method. ...</div><div class='long'><p>This method is used by an override to call the superclass method but bypass any\noverridden method. This is often done to \"patch\" a method that contains a bug\nbut for whatever reason cannot be fixed directly.</p>\n\n<p>Consider:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Ext.some.Class', {\n     method: function () {\n         console.log('Good');\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Ext.some.DerivedClass', {\n     extend: 'Ext.some.Class',\n\n     method: function () {\n         console.log('Bad');\n\n         // ... logic but with a bug ...\n\n         this.callParent();\n     }\n });\n</code></pre>\n\n<p>To patch the bug in <code>Ext.some.DerivedClass.method</code>, the typical solution is to create an\noverride:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('App.patches.DerivedClass', {\n     override: 'Ext.some.DerivedClass',\n\n     method: function () {\n         console.log('Fixed');\n\n         // ... logic but with bug fixed ...\n\n         this.callSuper();\n     }\n });\n</code></pre>\n\n<p>The patch method cannot use <code>callParent</code> to call the superclass <code>method</code> since\nthat would call the overridden method containing the bug. In other words, the\nabove patch would only produce \"Fixed\" then \"Good\" in the console log, whereas,\nusing <code>callParent</code> would produce \"Fixed\" then \"Bad\" then \"Good\".</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callSuper(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the superclass method</p>\n</div></li></ul></div></div></div><div id='method-completeLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-completeLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-completeLayout' class='name expandable'>completeLayout</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method (if implemented) is called at the end of the cycle in which this layout\ncompletes (by not setting done to...</div><div class='long'><p>This method (if implemented) is called at the end of the cycle in which this layout\ncompletes (by not setting <a href=\"#!/api/Ext.layout.container.Auto-property-done\" rel=\"Ext.layout.container.Auto-property-done\" class=\"docClass\">done</a> to <code>false</code> in <a href=\"#!/api/Ext.layout.container.Auto-method-calculate\" rel=\"Ext.layout.container.Auto-method-calculate\" class=\"docClass\">calculate</a>). It is\npossible for the layout to complete and yet become invalid before the end of the cycle,\nin which case, this method will not be called. It is also possible for this method to\nbe called and then later the layout becomes invalidated. This will result in\n<a href=\"#!/api/Ext.layout.container.Auto-method-calculate\" rel=\"Ext.layout.container.Auto-method-calculate\" class=\"docClass\">calculate</a> being called again, followed by another call to this method.</p>\n\n<p>This is a read phase and DOM writes should be strictly avoided in derived classes.\nInstead, DOM writes need to be written to <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a> objects to\nbe flushed at the next opportunity.</p>\n\n<p>This method need not be implemented by derived classes and, in fact, should only be\nimplemented when needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-completeLayout\" rel=\"Ext.layout.Layout-method-completeLayout\" class=\"docClass\">Ext.layout.Layout.completeLayout</a></p></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>item</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Adds layout's itemCls and owning Container's itemCls ...</div><div class='long'><p>Adds layout's itemCls and owning Container's itemCls</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-configureItem\" rel=\"Ext.layout.Layout-method-configureItem\" class=\"docClass\">Ext.layout.Layout.configureItem</a>, <a href=\"#!/api/Ext.layout.container.Container-method-configureItem\" rel=\"Ext.layout.container.Container-method-configureItem\" class=\"docClass\">Ext.layout.container.Container.configureItem</a></p></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This method is called to cleanup an object and its resources. ...</div><div class='long'><p>This method is called to cleanup an object and its resources. After calling\nthis method, the object should not be used any further.</p>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.util.ElementContainer-method-destroy\" rel=\"Ext.util.ElementContainer-method-destroy\" class=\"docClass\">Ext.util.ElementContainer.destroy</a></p></div></div></div><div id='method-doRenderBody' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-doRenderBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-doRenderBody' class='name expandable'>doRenderBody</a>( <span class='pre'>out, renderData</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>renderData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-doRenderBody\" rel=\"Ext.layout.container.Container-method-doRenderBody\" class=\"docClass\">Ext.layout.container.Container.doRenderBody</a></p></div></div></div><div id='method-doRenderContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-doRenderContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-doRenderContainer' class='name expandable'>doRenderContainer</a>( <span class='pre'>out, renderData</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>renderData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-doRenderItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-doRenderItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-doRenderItems' class='name expandable'>doRenderItems</a>( <span class='pre'>out, renderData</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>renderData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-doRenderPadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-doRenderPadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-doRenderPadding' class='name expandable'>doRenderPadding</a>( <span class='pre'>out, renderData</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>renderData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-finalizeLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-finalizeLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-finalizeLayout' class='name expandable'>finalizeLayout</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method (if implemented) is called after all layouts have completed. ...</div><div class='long'><p>This method (if implemented) is called after all layouts have completed. In most\nways this is similar to <a href=\"#!/api/Ext.layout.Layout-method-completeLayout\" rel=\"Ext.layout.Layout-method-completeLayout\" class=\"docClass\">completeLayout</a>. This call can cause this (or any\nlayout) to be become invalid (see <a href=\"#!/api/Ext.layout.Context-method-invalidate\" rel=\"Ext.layout.Context-method-invalidate\" class=\"docClass\">Ext.layout.Context.invalidate</a>), but this\nis best avoided. This method is intended to be where final reads are made and so it\nis best to avoid invalidating layouts at this point whenever possible. Even so, this\nmethod can be used to perform final checks that may require all other layouts to be\ncomplete and then invalidate some results.</p>\n\n<p>This is a read phase and DOM writes should be strictly avoided in derived classes.\nInstead, DOM writes need to be written to <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a> objects to\nbe flushed at the next opportunity.</p>\n\n<p>This method need not be implemented by derived classes and, in fact, should only be\nimplemented when needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'><p>The context item for the layout's owner\ncomponent.</p>\n</div></li></ul></div></div></div><div id='method-finishRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-finishRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-finishRender' class='name expandable'>finishRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-finishRender\" rel=\"Ext.layout.Layout-method-finishRender\" class=\"docClass\">Ext.layout.Layout.finishRender</a></p></div></div></div><div id='method-finishRenderItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-finishRenderItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-finishRenderItems' class='name expandable'>finishRenderItems</a>( <span class='pre'>target, items</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>items</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-finishedLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-finishedLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-finishedLayout' class='name expandable'>finishedLayout</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called after all layouts are complete and their calculations flushed\nto the DOM. ...</div><div class='long'><p>This method is called after all layouts are complete and their calculations flushed\nto the DOM. No further layouts will be run and this method is only called once per\nlayout run. The base component layout caches <code>lastComponentSize</code>.</p>\n\n<p>This is a write phase and DOM reads should be avoided if possible when overridding\nthis method.</p>\n\n<p>This method need not be implemented by derived classes and, in fact, should only be\nimplemented when needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-finishedLayout\" rel=\"Ext.layout.Layout-method-finishedLayout\" class=\"docClass\">Ext.layout.Layout.finishedLayout</a>, <a href=\"#!/api/Ext.layout.container.Auto-method-finishedLayout\" rel=\"Ext.layout.container.Auto-method-finishedLayout\" class=\"docClass\">Ext.layout.container.Auto.finishedLayout</a></p></div></div></div><div id='method-getChildEls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-cfg-childEls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-method-getChildEls' class='name expandable'>getChildEls</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of childEls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.ElementContainer-cfg-childEls\" rel=\"Ext.util.ElementContainer-cfg-childEls\" class=\"docClass\">childEls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>[name], [peek]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a specified config property value. ...</div><div class='long'><p>Returns a specified config property value. If the name parameter is not passed,\nall current configuration options will be returned as key value pairs.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The name of the config property to get.</p>\n</div></li><li><span class='pre'>peek</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p><code>true</code> to peek at the raw value without calling the getter.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The config property value.</p>\n</div></li></ul></div></div></div><div id='method-getContainerSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getContainerSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getContainerSize' class='name expandable'>getContainerSize</a>( <span class='pre'>ownerContext, [inDom]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns the container size (that of the target). ...</div><div class='long'><p>Returns the container size (that of the target). Only the fixed-sized dimensions can\nbe returned because the shrinkWrap dimensions are based on the contentWidth/Height\nas determined by the container layout.</p>\n\n<p>If the <a href=\"#!/api/Ext.layout.container.Auto-method-calculateOverflow\" rel=\"Ext.layout.container.Auto-method-calculateOverflow\" class=\"docClass\">calculateOverflow</a> method is used and if <a href=\"#!/api/Ext.layout.container.Auto-property-manageOverflow\" rel=\"Ext.layout.container.Auto-property-manageOverflow\" class=\"docClass\">manageOverflow</a> is\ntrue, this will adjust the width/height by the size of scrollbars.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'><p>The owner's context item.</p>\n</div></li><li><span class='pre'>inDom</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>True if the container size must be in the DOM.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The size</p>\n<ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The width</p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The height</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-getContainerSize\" rel=\"Ext.layout.container.Container-method-getContainerSize\" class=\"docClass\">Ext.layout.container.Container.getContainerSize</a></p></div></div></div><div id='method-getContentTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getContentTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getContentTarget' class='name expandable'>getContentTarget</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-getContentTarget\" rel=\"Ext.layout.container.Container-method-getContentTarget\" class=\"docClass\">Ext.layout.container.Container.getContentTarget</a></p></div></div></div><div id='method-getCurrentConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-getCurrentConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getCurrentConfig' class='name expandable'>getCurrentConfig</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getElementTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getElementTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getElementTarget' class='name expandable'>getElementTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Overridden method from Ext.layout.container.Container. ...</div><div class='long'><p>Overridden method from <a href=\"#!/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a>.\nUsed by Container classes to insert special DOM elements which must exist in addition to the child components</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-getElementTarget\" rel=\"Ext.layout.container.Container-method-getElementTarget\" class=\"docClass\">Ext.layout.container.Container.getElementTarget</a></p></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[name]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the initial configuration passed to constructor when instantiating\nthis class. ...</div><div class='long'><p>Returns the initial configuration passed to constructor when instantiating\nthis class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Name of the config option to return.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed</span><div class='sub-desc'><p>The full config object or a single config value\nwhen <code>name</code> parameter specified.</p>\n</div></li></ul></div></div></div><div id='method-getItemLayoutEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-getItemLayoutEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-getItemLayoutEl' class='name expandable'>getItemLayoutEl</a>( <span class='pre'>item</span> ) : HTMLElement<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>For a given item, returns the element that participates in the childNodes array\nof the layout's target element. ...</div><div class='long'><p>For a given item, returns the element that participates in the childNodes array\nof the layout's target element.  This is usually the component's \"el\", but can\nalso be a wrapper</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemSizePolicy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-getItemSizePolicy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-getItemSizePolicy' class='name expandable'>getItemSizePolicy</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/Ext.layout.SizePolicy\" rel=\"Ext.layout.SizePolicy\" class=\"docClass\">Ext.layout.SizePolicy</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns an object describing how this layout manages the size of the given component. ...</div><div class='long'><p>Returns an object describing how this layout manages the size of the given component.\nThis method must be implemented by any layout that manages components.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.SizePolicy\" rel=\"Ext.layout.SizePolicy\" class=\"docClass\">Ext.layout.SizePolicy</a></span><div class='sub-desc'><p>An object describing the sizing done by the layout\nfor this item.</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-getItemsRenderTree' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-getItemsRenderTree' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-getItemsRenderTree' class='name expandable'>getItemsRenderTree</a>( <span class='pre'>items, renderCfgs</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'><hr />\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>renderCfgs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getLayoutItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getLayoutItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getLayoutItems' class='name expandable'>getLayoutItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of child components either for a render phase (Performed in the beforeLayout\nmethod of the layout's ...</div><div class='long'><p>Returns an array of child components either for a render phase (Performed in the beforeLayout\nmethod of the layout's base class), or the layout phase (onLayout).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>[]</span><div class='sub-desc'><p>of child components</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-getLayoutItems\" rel=\"Ext.layout.Layout-method-getLayoutItems\" class=\"docClass\">Ext.layout.Layout.getLayoutItems</a>, <a href=\"#!/api/Ext.layout.container.Container-method-getLayoutItems\" rel=\"Ext.layout.container.Container-method-getLayoutItems\" class=\"docClass\">Ext.layout.container.Container.getLayoutItems</a></p></div></div></div><div id='method-getMoveAfterIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getMoveAfterIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getMoveAfterIndex' class='name expandable'>getMoveAfterIndex</a>( <span class='pre'>after</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>after</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getOverflowXStyle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getOverflowXStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getOverflowXStyle' class='name expandable'>getOverflowXStyle</a>( <span class='pre'>ownerContext</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns the overflow-x style of the render target. ...</div><div class='long'><p>Returns the overflow-x style of the render target.\nNote: If overflow is configured on a container using style or css class this method\nwill read the dom the first time it is called. It is therefore preferable for\nperformance reasons to use the {@link <a href=\"#!/api/Ext.Component-cfg-scrollable\" rel=\"Ext.Component-cfg-scrollable\" class=\"docClass\">Ext.Component.scrollable</a> scrollable config when\nhorizontal overflow is desired.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOverflowYStyle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getOverflowYStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getOverflowYStyle' class='name expandable'>getOverflowYStyle</a>( <span class='pre'>ownerContext</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns the overflow-y style of the render target. ...</div><div class='long'><p>Returns the overflow-y style of the render target.\nNote: If overflow is configured on a container using style or css class this method\nwill read the dom the first time it is called. It is therefore preferable for\nperformance reasons to use the {@link <a href=\"#!/api/Ext.Component-cfg-scrollable\" rel=\"Ext.Component-cfg-scrollable\" class=\"docClass\">Ext.Component.scrollable</a> scrollable config when\nvertical overflow is desired.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPositionOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getPositionOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getPositionOffset' class='name expandable'>getPositionOffset</a>( <span class='pre'>position</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method is used to offset the DOM position when checking\nwhether the element is a certain child of the target. ...</div><div class='long'><p>This method is used to offset the DOM position when checking\nwhether the element is a certain child of the target. This is\nrequired in cases where the extra elements prepended to the target\nbefore any of the items. An example of this is when using labelAlign: 'top'\non a field. The label appears first in the DOM before any child items are\ncreated, so when we check the position we need to add an extra offset.\nContainers that create an innerCt are exempt because this new element\npreserves the order</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-getPositionOffset\" rel=\"Ext.layout.Layout-method-getPositionOffset\" class=\"docClass\">Ext.layout.Layout.getPositionOffset</a></p></div></div></div><div id='method-getRenderData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getRenderData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getRenderData' class='name expandable'>getRenderData</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-getRenderData\" rel=\"Ext.layout.container.Container-method-getRenderData\" class=\"docClass\">Ext.layout.container.Container.getRenderData</a></p></div></div></div><div id='method-getRenderTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getRenderTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getRenderTarget' class='name expandable'>getRenderTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Overridden method from Ext.layout.container.Container. ...</div><div class='long'><p>Overridden method from <a href=\"#!/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a>.\nUsed in the beforeLayout method to render all items into.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-getRenderTarget\" rel=\"Ext.layout.container.Container-method-getRenderTarget\" class=\"docClass\">Ext.layout.container.Container.getRenderTarget</a>, <a href=\"#!/api/Ext.layout.container.Auto-method-getRenderTarget\" rel=\"Ext.layout.container.Auto-method-getRenderTarget\" class=\"docClass\">Ext.layout.container.Auto.getRenderTarget</a></p></div></div></div><div id='method-getRenderTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getRenderTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getRenderTpl' class='name expandable'>getRenderTpl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRenderTree' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getRenderTree' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getRenderTree' class='name expandable'>getRenderTree</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns all items that are rendered ...</div><div class='long'><p>Returns all items that are rendered</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>All matching items</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getScrollbarsNeeded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getScrollbarsNeeded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getScrollbarsNeeded' class='name expandable'>getScrollbarsNeeded</a>( <span class='pre'>width, height, contentWidth, contentHeight</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>contentWidth</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>contentHeight</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getScrollerEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-getScrollerEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-getScrollerEl' class='name expandable'>getScrollerEl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the element that wraps the contents for the purposes of touch scrolling. ...</div><div class='long'><p>Returns the element that wraps the contents for the purposes of touch scrolling.\nOnly applicable when the layout adds the scroller element as part of its renderTpl\n(e.g. autocontainer and box)</p>\n<p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-getScrollerEl\" rel=\"Ext.layout.Layout-method-getScrollerEl\" class=\"docClass\">Ext.layout.Layout.getScrollerEl</a></p></div></div></div><div id='method-getTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the owner component's resize element. ...</div><div class='long'><p>Returns the owner component's resize element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVisibleItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-getVisibleItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-getVisibleItems' class='name expandable'>getVisibleItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns all items that are both rendered and visible ...</div><div class='long'><p>Returns all items that are both rendered and visible</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>All matching items</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-hasConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-hasConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-hasConfig' class='name expandable'>hasConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-initContextItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-initContextItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-initContextItems' class='name expandable'>initContextItems</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-initLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.layout.ResponsiveColumn'>Ext.ux.layout.ResponsiveColumn</span><br/><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn-method-initLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.layout.ResponsiveColumn-method-initLayout' class='name expandable'>initLayout</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>A one-time initialization method called just before rendering. ...</div><div class='long'><p>A one-time initialization method called just before rendering.</p>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-initLayout\" rel=\"Ext.layout.Layout-method-initLayout\" class=\"docClass\">Ext.layout.Layout.initLayout</a>, <a href=\"#!/api/Ext.layout.container.Auto-method-initLayout\" rel=\"Ext.layout.container.Auto-method-initLayout\" class=\"docClass\">Ext.layout.container.Auto.initLayout</a></p></div></div></div><div id='method-isItemBoxParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-isItemBoxParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isItemBoxParent' class='name expandable'>isItemBoxParent</a>( <span class='pre'>itemContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>itemContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-isItemLayoutRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-isItemLayoutRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isItemLayoutRoot' class='name expandable'>isItemLayoutRoot</a>( <span class='pre'>item</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-isItemShrinkWrap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-isItemShrinkWrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isItemShrinkWrap' class='name expandable'>isItemShrinkWrap</a>( <span class='pre'>item</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-isRunning' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-isRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isRunning' class='name expandable'>isRunning</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isValidParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>item, target, position</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Validates item is in the proper place in the dom. ...</div><div class='long'><p>Validates item is in the proper place in the dom.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-link' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-link' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-link' class='name expandable'>link</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds a \"destroyable\" object to an internal list of objects that will be destroyed\nwhen this instance is destroyed (vi...</div><div class='long'><p>Adds a \"destroyable\" object to an internal list of objects that will be destroyed\nwhen this instance is destroyed (via <code><a href=\"#!/api/Ext.Base-method-destroy\" rel=\"Ext.Base-method-destroy\" class=\"docClass\">destroy</a></code>).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The <code>value</code> passed.</p>\n</div></li></ul></div></div></div><div id='method-measureContentHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-measureContentHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-measureContentHeight' class='name expandable'>measureContentHeight</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-measureContentWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-measureContentWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-measureContentWidth' class='name expandable'>measureContentWidth</a>( <span class='pre'>ownerContext</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-moveItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-moveItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-moveItem' class='name expandable'>moveItem</a>( <span class='pre'>item, target, position</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Moves Component to the provided target instead. ...</div><div class='long'><p>Moves Component to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-moveItemBefore' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-moveItemBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-moveItemBefore' class='name expandable'>moveItemBefore</a>( <span class='pre'>item, before</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>before</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-notifyOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-notifyOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-notifyOwner' class='name expandable'>notifyOwner</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called for every layout in the layout context after all the layouts have been finally flushed ...</div><div class='long'><p>Called for every layout in the layout context after all the layouts have been finally flushed</p>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-notifyOwner\" rel=\"Ext.layout.Layout-method-notifyOwner\" class=\"docClass\">Ext.layout.Layout.notifyOwner</a></p></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.layout.ResponsiveColumn'>Ext.ux.layout.ResponsiveColumn</span><br/><a href='source/ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.layout.ResponsiveColumn-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>item</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-onAdd\" rel=\"Ext.layout.container.Container-method-onAdd\" class=\"docClass\">Ext.layout.container.Container.onAdd</a></p></div></div></div><div id='method-onClassMixedIn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Factoryable' rel='Ext.mixin.Factoryable' class='defined-in docClass'>Ext.mixin.Factoryable</a><br/><a href='source/Factoryable.html#Ext-mixin-Factoryable-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Factoryable-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>targetClass</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetClass</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onContentChange' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-onContentChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-onContentChange' class='name expandable'>onContentChange</a>( <span class='pre'>child</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called when a child item changes in some way. ...</div><div class='long'><p>This method is called when a child item changes in some way. By default this calls\n<a href=\"#!/api/Ext.Component-method-updateLayout\" rel=\"Ext.Component-method-updateLayout\" class=\"docClass\">Ext.Component.updateLayout</a> on this layout's owner.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The child item that has changed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if this layout has handled the content change.</p>\n\n</div></li></ul></div></div></div><div id='method-onDestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>item, isDestroying</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>isDestroying</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-onRemove\" rel=\"Ext.layout.Layout-method-onRemove\" class=\"docClass\">Ext.layout.Layout.onRemove</a></p></div></div></div><div id='method-renderChildren' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Container' rel='Ext.layout.container.Container' class='defined-in docClass'>Ext.layout.container.Container</a><br/><a href='source/Container3.html#Ext-layout-container-Container-method-renderChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Container-method-renderChildren' class='name expandable'>renderChildren</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.Layout-method-renderChildren\" rel=\"Ext.layout.Layout-method-renderChildren\" class=\"docClass\">Ext.layout.Layout.renderChildren</a></p></div></div></div><div id='method-renderItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>item, target, position</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-renderItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-renderItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-renderItems' class='name expandable'>renderItems</a>( <span class='pre'>items, target</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Iterates over all passed items, ensuring they are rendered. ...</div><div class='long'><p>Iterates over all passed items, ensuring they are rendered.  If the items are already rendered,\nalso determines if the items are in the proper place in the dom.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-setChildEls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.ElementContainer' rel='Ext.util.ElementContainer' class='defined-in docClass'>Ext.util.ElementContainer</a><br/><a href='source/ElementContainer.html#Ext-util-ElementContainer-cfg-childEls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.ElementContainer-method-setChildEls' class='name expandable'>setChildEls</a>( <span class='pre'>childEls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of childEls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.ElementContainer-cfg-childEls\" rel=\"Ext.util.ElementContainer-cfg-childEls\" class=\"docClass\">childEls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childEls</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'>name, [value]</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets a single/multiple configuration options. ...</div><div class='long'><p>Sets a single/multiple configuration options.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The name of the property to set, or a set of key value pairs to set.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value to set for the name parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-setCtSizeIfNeeded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-setCtSizeIfNeeded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-setCtSizeIfNeeded' class='name expandable'>setCtSizeIfNeeded</a>( <span class='pre'>ownerContext, containerSize</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This method sets the height and/or width of the outerCt/innerCt to adjust for the\nfollowing browser-specific issues:\n...</div><div class='long'><p>This method sets the height and/or width of the outerCt/innerCt to adjust for the\nfollowing browser-specific issues:</p>\n\n<ol>\n<li><p>In some browsers a percentage-height element ignores the horizontal scrollbar\nof its parent (see <a href=\"#!/api/Ext.supports-property-PercentageHeightOverflowBug\" rel=\"Ext.supports-property-PercentageHeightOverflowBug\" class=\"docClass\">Ext.supports.PercentageHeightOverflowBug</a>).  If the browser is\naffected by this bug the outerCt needs a pixel height in order to support\npercentage-height children when not shrink-wrapping height. If the browser is not\naffected by this bug, a height of 100% is assigned to the outerCt (see\nbeginLayoutCycle).</p></li>\n<li><p>IE8 mode has a bug with percentage height children.  if the innerCt has\na height of 100%, has padding, and has a child item with a percentage height, that\nchild item will be sized as a percentage of the parent's height plus padding height.\nIn other words, a child with height:50% would have its height caclulated thusly:\n(parentHeight + parentPaddingHeight) * 0.5\nTo fix this, we have to give the innerCt a pixel height.</p></li>\n</ol>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerContext</span> : <a href=\"#!/api/Ext.layout.ContextItem\" rel=\"Ext.layout.ContextItem\" class=\"docClass\">Ext.layout.ContextItem</a><div class='sub-desc'>\n</div></li><li><span class='pre'>containerSize</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-setOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-setOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-setOwner' class='name expandable'>setOwner</a>( <span class='pre'>owner</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets the layout owner ...</div><div class='long'><p>Sets the layout owner</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-setupRenderTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.container.Auto' rel='Ext.layout.container.Auto' class='defined-in docClass'>Ext.layout.container.Auto</a><br/><a href='source/Auto.html#Ext-layout-container-Auto-method-setupRenderTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.container.Auto-method-setupRenderTpl' class='name expandable'>setupRenderTpl</a>( <span class='pre'>renderTpl</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>renderTpl</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul><p>Overrides: <a href=\"#!/api/Ext.layout.container.Container-method-setupRenderTpl\" rel=\"Ext.layout.container.Container-method-setupRenderTpl\" class=\"docClass\">Ext.layout.container.Container.setupRenderTpl</a></p></div></div></div><div id='method-sortWeightedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-sortWeightedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-sortWeightedItems' class='name expandable'>sortWeightedItems</a>( <span class='pre'>items, reverseProp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>reverseProp</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self();   // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-undoLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/Layout.html#Ext-layout-Layout-method-undoLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-undoLayout' class='name expandable'>undoLayout</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unlink' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-method-unlink' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-unlink' class='name expandable'>unlink</a>( <span class='pre'>names</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span></span></div><div class='description'><div class='short'>Destroys a given set of linked objects. ...</div><div class='long'><p>Destroys a given set of <code><a href=\"#!/api/Ext.Base-method-link\" rel=\"Ext.Base-method-link\" class=\"docClass\">linked</a></code> objects. This is only needed if\nthe linked object is being destroyed before this instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>The names of the linked objects to destroy.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-addConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-addConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addConfig' class='name expandable'>addConfig</a>( <span class='pre'>config, [mixinClass]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Adds new config properties to this class. ...</div><div class='long'><p>Adds new config properties to this class. This is called for classes when they\nare declared, then for any mixins that class may define and finally for any\noverrides defined that target the class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>mixinClass</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> (optional)<div class='sub-desc'><p>The mixin class if the configs are from a mixin.</p>\n</div></li></ul></div></div></div><div id='static-method-addInheritableStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-addInheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addInheritableStatics' class='name expandable'>addInheritableStatics</a>( <span class='pre'>members</span> )<span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addMember' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-addMember' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMember' class='name expandable'>addMember</a>( <span class='pre'>name, member</span> )<span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>member</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addMembers' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-addMembers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'>members, [isStatic], [privacy]</span> )<span class=\"signature\"><span class='chainable' >chainable</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.addMembers({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat();\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The members to add to this class.</p>\n</div></li><li><span class='pre'>isStatic</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Pass <code>true</code> if the members are static.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>privacy</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Pass <code>true</code> if the members are private. This\nonly has meaning in debug mode and only for methods.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-borrow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-borrow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-borrow' class='name expandable'>borrow</a>( <span class='pre'>fromClass, members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Borrow another class' members to the prototype of this class. ...</div><div class='long'><p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fromClass</span> : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><div class='sub-desc'><p>The class to borrow members from</p>\n</div></li><li><span class='pre'>members</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The names of the members to borrow</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>args</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-callSuper' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-callSuper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-callSuper' class='name expandable'>callSuper</a>( <span class='pre'>args</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-createAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'>alias, origin</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-getConfigurator' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-getConfigurator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getConfigurator' class='name expandable'>getConfigurator</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Configurator\" rel=\"Ext.Configurator\" class=\"docClass\">Ext.Configurator</a><span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns the Ext.Configurator for this class. ...</div><div class='long'><p>Returns the <code><a href=\"#!/api/Ext.Configurator\" rel=\"Ext.Configurator\" class=\"docClass\">Ext.Configurator</a></code> for this class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Configurator\" rel=\"Ext.Configurator\" class=\"docClass\">Ext.Configurator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-mixin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-mixin' class='name expandable'>mixin</a>( <span class='pre'>name, mixinClass</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Used internally by the mixins pre-processor ...</div><div class='long'><p>Used internally by the mixins pre-processor</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>mixinClass</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-onExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-onExtended' class='name expandable'>onExtended</a>( <span class='pre'>fn, scope</span> )<span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'>members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>Direct use of this method should be rare. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div><div id='static-method-triggerExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base5.html#Ext-Base-static-method-triggerExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-triggerExtended' class='name expandable'>triggerExtended</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>",
	"alternateClassNames" : [],
	"autodetected" : {
		"uses" : true,
		"alternateClassNames" : true,
		"aliases" : true,
		"members" : true,
		"mixins" : true,
		"extends" : true,
		"code_type" : true,
		"requires" : true
	},
	"aliases" : {
		"layout" : ["responsivecolumn"]
	},
	"members" : [{
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "animatePolicy",
				"id" : "cfg-animatePolicy",
				"tagname" : "cfg"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "childEls",
				"id" : "cfg-childEls",
				"tagname" : "cfg"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Container",
				"name" : "itemCls",
				"id" : "cfg-itemCls",
				"tagname" : "cfg"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "reserveScrollbar",
				"id" : "cfg-reserveScrollbar",
				"tagname" : "cfg"
			}, {
				"meta" : {},
				"owner" : "Ext.ux.layout.ResponsiveColumn",
				"name" : "states",
				"id" : "cfg-states",
				"tagname" : "cfg"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "$className",
				"id" : "property-S-className",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "$configPrefixed",
				"id" : "property-S-configPrefixed",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "$configStrict",
				"id" : "property-S-configStrict",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.ux.layout.ResponsiveColumn",
				"name" : "_responsiveCls",
				"id" : "property-_responsiveCls",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "activeItemCount",
				"id" : "property-activeItemCount",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "animatePolicy",
				"id" : "property-animatePolicy",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "autoSizePolicy",
				"id" : "property-autoSizePolicy",
				"tagname" : "property"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "destroyed",
				"id" : "property-destroyed",
				"tagname" : "property"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.Layout",
				"name" : "done",
				"id" : "property-done",
				"tagname" : "property"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.Layout",
				"name" : "factoryConfig",
				"id" : "property-factoryConfig",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "initialized",
				"id" : "property-initialized",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "innerCtCls",
				"id" : "property-innerCtCls",
				"tagname" : "property"
			}, {
				"meta" : {
					"readonly" : true,
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "isConfiguring",
				"id" : "property-isConfiguring",
				"tagname" : "property"
			}, {
				"meta" : {
					"readonly" : true,
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "isFirstInstance",
				"id" : "property-isFirstInstance",
				"tagname" : "property"
			}, {
				"meta" : {
					"readonly" : true,
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "isInstance",
				"id" : "property-isInstance",
				"tagname" : "property"
			}, {
				"meta" : {
					"readonly" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isLayout",
				"id" : "property-isLayout",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "lastOverflowAdjust",
				"id" : "property-lastOverflowAdjust",
				"tagname" : "property"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "manageOverflow",
				"id" : "property-manageOverflow",
				"tagname" : "property"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "managePadding",
				"id" : "property-managePadding",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.util.ElementContainer",
				"name" : "mixinId",
				"id" : "property-mixinId",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "needsItemSize",
				"id" : "property-needsItemSize",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "outerCtCls",
				"id" : "property-outerCtCls",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.util.ElementContainer",
				"name" : "privates",
				"id" : "property-privates",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "renderTpl",
				"id" : "property-renderTpl",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "running",
				"id" : "property-running",
				"tagname" : "property"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "self",
				"id" : "property-self",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "setsItemSize",
				"id" : "property-setsItemSize",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "type",
				"id" : "property-type",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "usesContainerHeight",
				"id" : "property-usesContainerHeight",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "usesContainerWidth",
				"id" : "property-usesContainerWidth",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "usesHeight",
				"id" : "property-usesHeight",
				"tagname" : "property"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "usesWidth",
				"id" : "property-usesWidth",
				"tagname" : "property"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "$onExtended",
				"id" : "static-property-S-onExtended",
				"tagname" : "property"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Container",
				"name" : "constructor",
				"id" : "method-constructor",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.util.ElementContainer",
				"name" : "addChildEl",
				"id" : "method-addChildEl",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "addDeprecations",
				"id" : "method-addDeprecations",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.util.ElementContainer",
				"name" : "afterClassMixedIn",
				"id" : "method-afterClassMixedIn",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "afterCollapse",
				"id" : "method-afterCollapse",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "afterExpand",
				"id" : "method-afterExpand",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "afterRemove",
				"id" : "method-afterRemove",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.util.ElementContainer",
				"name" : "attachChildEls",
				"id" : "method-attachChildEls",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "beforeLayoutCycle",
				"id" : "method-beforeLayoutCycle",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "beginCollapse",
				"id" : "method-beginCollapse",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "beginExpand",
				"id" : "method-beginExpand",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.ux.layout.ResponsiveColumn",
				"name" : "beginLayout",
				"id" : "method-beginLayout",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "beginLayoutCycle",
				"id" : "method-beginLayoutCycle",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "cacheChildItems",
				"id" : "method-cacheChildItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "cacheElements",
				"id" : "method-cacheElements",
				"tagname" : "method"
			}, {
				"meta" : {
					"abstract" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "calculate",
				"id" : "method-calculate",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "calculateContentSize",
				"id" : "method-calculateContentSize",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "calculateOverflow",
				"id" : "method-calculateOverflow",
				"tagname" : "method"
			}, {
				"meta" : {
					"deprecated" : {
						"text" : "<p>Use <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n"
					},
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "callOverridden",
				"id" : "method-callOverridden",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "callParent",
				"id" : "method-callParent",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "callSuper",
				"id" : "method-callSuper",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "completeLayout",
				"id" : "method-completeLayout",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "configureItem",
				"id" : "method-configureItem",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "destroy",
				"id" : "method-destroy",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "doRenderBody",
				"id" : "method-doRenderBody",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "doRenderContainer",
				"id" : "method-doRenderContainer",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "doRenderItems",
				"id" : "method-doRenderItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "doRenderPadding",
				"id" : "method-doRenderPadding",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.Layout",
				"name" : "finalizeLayout",
				"id" : "method-finalizeLayout",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "finishRender",
				"id" : "method-finishRender",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "finishRenderItems",
				"id" : "method-finishRenderItems",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "finishedLayout",
				"id" : "method-finishedLayout",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.util.ElementContainer",
				"name" : "getChildEls",
				"id" : "method-getChildEls",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.Base",
				"name" : "getConfig",
				"id" : "method-getConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getContainerSize",
				"id" : "method-getContainerSize",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getContentTarget",
				"id" : "method-getContentTarget",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "getCurrentConfig",
				"id" : "method-getCurrentConfig",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getElementTarget",
				"id" : "method-getElementTarget",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.Base",
				"name" : "getInitialConfig",
				"id" : "method-getInitialConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "getItemLayoutEl",
				"id" : "method-getItemLayoutEl",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "getItemSizePolicy",
				"id" : "method-getItemSizePolicy",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "getItemsRenderTree",
				"id" : "method-getItemsRenderTree",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Container",
				"name" : "getLayoutItems",
				"id" : "method-getLayoutItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getMoveAfterIndex",
				"id" : "method-getMoveAfterIndex",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getOverflowXStyle",
				"id" : "method-getOverflowXStyle",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getOverflowYStyle",
				"id" : "method-getOverflowYStyle",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getPositionOffset",
				"id" : "method-getPositionOffset",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getRenderData",
				"id" : "method-getRenderData",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getRenderTarget",
				"id" : "method-getRenderTarget",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getRenderTpl",
				"id" : "method-getRenderTpl",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getRenderTree",
				"id" : "method-getRenderTree",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getRenderedItems",
				"id" : "method-getRenderedItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getScrollbarsNeeded",
				"id" : "method-getScrollbarsNeeded",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "getScrollerEl",
				"id" : "method-getScrollerEl",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.container.Container",
				"name" : "getTarget",
				"id" : "method-getTarget",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "getVisibleItems",
				"id" : "method-getVisibleItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "hasConfig",
				"id" : "method-hasConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "initConfig",
				"id" : "method-initConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "initContextItems",
				"id" : "method-initContextItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.ux.layout.ResponsiveColumn",
				"name" : "initLayout",
				"id" : "method-initLayout",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isItemBoxParent",
				"id" : "method-isItemBoxParent",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isItemLayoutRoot",
				"id" : "method-isItemLayoutRoot",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isItemShrinkWrap",
				"id" : "method-isItemShrinkWrap",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isRunning",
				"id" : "method-isRunning",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "isValidParent",
				"id" : "method-isValidParent",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "link",
				"id" : "method-link",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "measureContentHeight",
				"id" : "method-measureContentHeight",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "measureContentWidth",
				"id" : "method-measureContentWidth",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "moveItem",
				"id" : "method-moveItem",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "moveItemBefore",
				"id" : "method-moveItemBefore",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "notifyOwner",
				"id" : "method-notifyOwner",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.ux.layout.ResponsiveColumn",
				"name" : "onAdd",
				"id" : "method-onAdd",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.mixin.Factoryable",
				"name" : "onClassMixedIn",
				"id" : "method-onClassMixedIn",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.layout.Layout",
				"name" : "onContentChange",
				"id" : "method-onContentChange",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "onDestroy",
				"id" : "method-onDestroy",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "onRemove",
				"id" : "method-onRemove",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Container",
				"name" : "renderChildren",
				"id" : "method-renderChildren",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "renderItem",
				"id" : "method-renderItem",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "renderItems",
				"id" : "method-renderItems",
				"tagname" : "method"
			}, {
				"meta" : {},
				"owner" : "Ext.util.ElementContainer",
				"name" : "setChildEls",
				"id" : "method-setChildEls",
				"tagname" : "method"
			}, {
				"meta" : {
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "setConfig",
				"id" : "method-setConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "setCtSizeIfNeeded",
				"id" : "method-setCtSizeIfNeeded",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "setOwner",
				"id" : "method-setOwner",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.container.Auto",
				"name" : "setupRenderTpl",
				"id" : "method-setupRenderTpl",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "sortWeightedItems",
				"id" : "method-sortWeightedItems",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true
				},
				"owner" : "Ext.Base",
				"name" : "statics",
				"id" : "method-statics",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true
				},
				"owner" : "Ext.layout.Layout",
				"name" : "undoLayout",
				"id" : "method-undoLayout",
				"tagname" : "method"
			}, {
				"meta" : {
					"private" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "unlink",
				"id" : "method-unlink",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "addConfig",
				"id" : "static-method-addConfig",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "addInheritableStatics",
				"id" : "static-method-addInheritableStatics",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "addMember",
				"id" : "static-method-addMember",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "addMembers",
				"id" : "static-method-addMembers",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "addStatics",
				"id" : "static-method-addStatics",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "borrow",
				"id" : "static-method-borrow",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true,
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "callParent",
				"id" : "static-method-callParent",
				"tagname" : "method"
			}, {
				"meta" : {
					"protected" : true,
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "callSuper",
				"id" : "static-method-callSuper",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "create",
				"id" : "static-method-create",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "createAlias",
				"id" : "static-method-createAlias",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "extend",
				"id" : "static-method-extend",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "getConfigurator",
				"id" : "static-method-getConfigurator",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "getName",
				"id" : "static-method-getName",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "mixin",
				"id" : "static-method-mixin",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true,
					"chainable" : true
				},
				"owner" : "Ext.Base",
				"name" : "onExtended",
				"id" : "static-method-onExtended",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true
				},
				"owner" : "Ext.Base",
				"name" : "override",
				"id" : "static-method-override",
				"tagname" : "method"
			}, {
				"meta" : {
					"static" : true,
					"private" : true
				},
				"owner" : "Ext.Base",
				"name" : "triggerExtended",
				"id" : "static-method-triggerExtended",
				"tagname" : "method"
			}],
	"short_doc" : "A simple grid-like layout for proportionally dividing container space and allocating it\nto each item. ...",
	"meta" : {},
	"superclasses" : ["Ext.Base", "Ext.layout.Layout",
			"Ext.layout.container.Container", "Ext.layout.container.Auto"],
	"component" : false,
	"mixins" : [],
	"extends" : "Ext.layout.container.Auto",
	"name" : "Ext.ux.layout.ResponsiveColumn",
	"mixedInto" : [],
	"subclasses" : [],
	"id" : "class-Ext.ux.layout.ResponsiveColumn",
	"code_type" : "ext_define",
	"requires" : [],
	"files" : [{
				"filename" : "ResponsiveColumn.js",
				"href" : "ResponsiveColumn.html#Ext-ux-layout-ResponsiveColumn"
			}],
	"tagname" : "class"
});