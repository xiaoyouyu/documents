(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{280:function(t,e,n){},315:function(t,e){t.exports=secretKeyConf={appId:"s66rnnGxseSiRy74nH6zckU6-gzGzoHsz",appKey:"DqBkfix1mnxRNAxCDgQgnxbu",ga:"UA-134613928-1",googleSearchConsole:"Ld_AEWr30siza2LmmZ12csitRGsSj9gqqEAch0UXkTc"}},317:function(t,e,n){"use strict";var i=n(280);n.n(i).a},324:function(t,e,n){"use strict";n.r(e);n(106),n(147),n(148),n(149);var i={computed:{comment:function(){var t=this.$frontmatter.comment;return void 0===t||t},page:function(){var t=this.$page,e=t.path,n=void 0===e?"/":e,i=t.title;return{path:n,title:void 0===i?"首页":i}}},mounted:function(){this.renderValine()},watch:{$route:{handler:function(t,e){var n=this;t.path!==e.path&&this.$nextTick(function(){n.renderValine()})}}},methods:{renderValine:function(){"undefined"!=typeof window&&(this.window=window,window.AV=n(314));var t=n(315);new(n(316))({el:"#vcomments",appId:t.appId,appKey:t.appKey,notify:!1,verify:!1,avatar:"retro",path:window.location.pathname,meta:["nick","mail","link"],pageSize:10,visitor:!0,placeholder:"欢迎留言..."})}}},a=(n(317),n(25)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comment?n("div",{staticClass:"ValineComment"},[n("hr"),t._v(" "),n("span",{staticClass:"leancloud-visitors",attrs:{id:t.page.path,"data-flag-title":t.page.title}},[n("em",{staticClass:"post-meta-item-text"},[t._v("文章阅读量 ")]),t._v(" "),n("i",{staticClass:"leancloud-visitors-count"},[t._v("1000000+")])]),t._v(" "),n("div",{attrs:{id:"vcomments"}})]):t._e()},[],!1,null,"9d9d0884",null);e.default=o.exports}}]);