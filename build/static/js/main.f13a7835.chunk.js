(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(56);a(287);r.b.global.elements.line.borderWidth=1,r.b.global.elements.line.fill=!1,r.b.scale.gridLines.drawTicks=!1,r.b.scale.ticks.padding=15;e.default=function(t){var e=t.data;return o.a.createElement("div",{className:"timeline-chart"},o.a.createElement(r.a,{data:e,height:350,options:{legend:{display:!1,position:"left",labels:{boxWidth:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},maintainAspectRatio:!1,scales:{yAxes:[{barPercentage:.2,maintainAspectRatio:!1,scaleLabel:{display:!0,labelString:"Votes"}}],xAxes:[{gridLines:{display:!1},scaleLabel:{display:!0,labelString:"ID"}}]}}}))}},136:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(113),c=a.n(r);e.default=function(t){var e=t.data,a=(e=void 0===e?{}:e).objectID,n=e.url,r=void 0===n?null:n,i=e.title,s=void 0===i?"No title":i,l=e.created_at,u=e.author,p=e.points,d=t.hideNews;return o.a.createElement("div",{className:"news-title-block"},r&&o.a.createElement("a",{rel:"noopener",href:r,target:"_blank"},s)||o.a.createElement("span",null,s),l&&o.a.createElement("span",{className:"createdOn"},"| posted on: (",c()(l).format("MMMM Do YYYY, h:mm:ss a"),")"),o.a.createElement("div",{className:"more-info-n-action"},u&&o.a.createElement("span",{className:"author"},"by ",u," |"),p&&o.a.createElement("span",{className:"points"},p," points | "),o.a.createElement("span",{onClick:function(){return d(a)},className:"hide-action"},"[ hide ]")))}},151:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},185:function(t,e,a){t.exports=a(366)},287:function(t,e,a){},365:function(t,e,a){},366:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=a(65),s=a.n(i),l=a(89),u=a(374),p=a(47),d=a(48),m=a(51),f=a(50),h=a(21),g=a(376),v=a(372),b=a(67),y=a(38),w=a(153),E=a(373),j=a(40),D=a(375),O=a(371),N=a(182),k=a(150),S=a.n(k),R=a(151),x=a.n(R);function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(f.a)(this,a)}}var C="http://localhost:3000",I="".concat(C).concat(x.a),P=function(t){Object(m.a)(a,t);var e=_(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"getMetaTags",value:function(t,e){var a=t.title,n=t.description,o=t.image,r=t.contentType,c=t.twitter,i=t.noCrawl,s=t.published,l=t.updated,u=t.category,p=t.tags,d=a?(a+" | Hacker News").substring(0,60):"Hacker News",m=n?n.substring(0,155):"This is a good palce to find your queries.",f=o?"".concat(C).concat(o):I,h=[{itemprop:"name",content:d},{itemprop:"description",content:m},{itemprop:"image",content:f},{name:"description",content:m},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"vaibhakatariya@gmail.com"},{name:"twitter:title",content:d},{name:"twitter:description",content:m},{name:"twitter:creator",content:c||"vaibhakatariya@gmail.com"},{name:"twitter:image:src",content:f},{property:"og:title",content:d},{property:"og:type",content:r||"website"},{property:"og:url",content:C+e},{property:"og:image",content:f},{property:"og:description",content:m},{property:"og:site_name",content:"Hacker News"},{property:"fb:app_id",content:"XXXXXXXXX"}];return i&&h.push({name:"robots",content:"noindex, nofollow"}),s&&h.push({name:"article:published_time",content:s}),l&&h.push({name:"article:modified_time",content:l}),u&&h.push({name:"article:section",content:u}),p&&h.push({name:"article:tag",content:p}),h}},{key:"render",value:function(){var t=this.props,e=t.children,a=t.className,n=t.location,r=void 0===n?{}:n,c=Object(N.a)(t,["children","className","location"]);return o.a.createElement("div",{className:a},o.a.createElement(S.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(c.schema||"WebPage")},title:c.title?c.title+" | Hacker News":"Hacker News",link:[{rel:"canonical",href:C+(r.pathname||"")}],meta:this.getMetaTags(c,r.pathname||"")}),e)}}]),a}(n.Component),X=(a(119),a(136),{message:null}),T=function(t){return{type:"SET_NEWS",data:t}};function A(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(f.a)(this,a)}}var V=s()({loader:function(){return Promise.resolve().then(a.bind(null,119))},loading:function(){return o.a.createElement(w.a,{tip:"Loading..."})},modules:["graph"]}),H=s()({loader:function(){return Promise.resolve().then(a.bind(null,136))},loading:function(){return o.a.createElement(w.a,{tip:"Loading..."})},modules:["newsitem"]}),M={labels:[],datasets:[{key:"Votes",label:"Votes",data:[],borderColor:"#6495ED",backgroundColor:"#6495ED",pointHoverBackgroundColor:"#6495ED"}]},J=function(t){Object(m.a)(a,t);var e=A(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={},t.upVote=function(e){if(e){var a=t.state.votesData,n=void 0===a?{}:a,o=1;n[e]&&(o=parseInt(n[e])+1),t.setState(Object(y.a)({},t.state,{votesData:Object(y.a)({},n,Object(b.a)({},e,o))}),function(){window&&window.localStorage&&localStorage.setItem("votesData",JSON.stringify(t.state.votesData))})}},t.hideNews=function(e){if(e){var a=t.state.hideData,n=void 0===a?{}:a;t.setState(Object(y.a)({},t.state,{hideData:Object(y.a)({},n,Object(b.a)({},e,!0))}),function(){window&&window.localStorage&&localStorage.setItem("hideData",JSON.stringify(t.state.hideData))})}},t.getData=function(e){var a=t.props,n=a.history,o=a.updateNews;n.push("/".concat(e||"")),fetch("https://hn.algolia.com/api/v1/search".concat(e?"?page="+e:"/")).then(function(t){return t.json()}).then(function(t){o(t),n.push("/".concat(e||""))}).catch(function(t){return console.log(t)})},t.prevPage=function(){var e=t.props.data,a=(e=void 0===e?{}:e).page,n=(void 0===a?0:a)-1;t.getData(n)},t.nextPage=function(){var e=t.props.data,a=(e=void 0===e?{}:e).page,n=(void 0===a?0:a)+1;t.getData(n)},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){if(window&&window.localStorage){var t=localStorage.getItem("hideData"),e=localStorage.getItem("votesData");this.setState({hideData:t&&JSON.parse(t)||{},votesData:e&&JSON.parse(e)||{}})}}},{key:"render",value:function(){var t=this,e=this.state,a=e.hideData,n=e.votesData,r=this.props.data,c=(r=void 0===r?{}:r).page,i=void 0===c?0:c,s=r.nbPages,l=void 0===s?0:s,u=r.hits,p=[{title:"comments",width:"30px",key:"comments",className:"comments",render:function(t){return t.num_comments||0}},{title:"Vote Count",key:"voteCount",dataIndex:"votes",width:"30px",className:"voteCount"},{title:"UpVote",key:"votes",width:"20px",className:"upVote",render:function(e){return o.a.createElement(D.a,{className:"upvoteAction",onClick:function(){return t.upVote(e.objectID)}})}},{title:"New Details",key:"news_details",render:function(e){return o.a.createElement(H,{data:e,hideNews:t.hideNews})}}],d=void 0===u?[]:u;a&&Object.keys(a).length&&(d=d.filter(function(t){if(t&&!a[t.objectID])return t})),d&&d.length&&(d=d.map(function(t){return t&&n&&n[t.objectID]?Object.assign(t,{votes:n[t.objectID]}):Object.assign(t,{votes:0})}));var m=function(t,e){return t&&e&&t.length&&(M.labels=[],M.datasets[0].data=[],t.forEach(function(t){M.labels.push(t.objectID),M.datasets[0].data.push(e[t.objectID]||0)})),M}(d,n);return o.a.createElement(P,this.props,o.a.createElement("center",null,o.a.createElement("header",null,o.a.createElement("h1",{onClick:function(){return t.getData(null)}},"Hacker News")),o.a.createElement("main",{className:"app"},o.a.createElement(E.a,{columns:p,dataSource:d,pagination:!1}),o.a.createElement("div",{className:"custom-pagination"},o.a.createElement(j.a,{type:"primary",onClick:this.prevPage,disabled:!i},"Previous"),"|",o.a.createElement(j.a,{type:"primary",onClick:this.nextPage,disabled:!l},"Next")),o.a.createElement(V,{data:m}))))}}]),a}(n.Component),L=Object(O.a)(Object(l.b)(function(t){return{data:t.app.newsData}},function(t){return{updateNews:function(e){return t(T(e))}}})(J));function W(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(f.a)(this,a)}}var Y=function(t){Object(m.a)(a,t);var e=W(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(v.a,{path:"/",exact:!0,component:L}),o.a.createElement(v.a,{path:"/:id",component:L}))}}]),a}(n.Component),B=a(37),U=a(179),q=Object(B.d)(Object(B.a)(U.a))(B.e),z=Object(B.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_NEWS":return Object(y.a)({},t,{newsData:e.data});default:return t}}});a(365);var F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return q(z,t)}(window.__REDUX_STATE__||{}),G=o.a.createElement(l.a,{store:F},o.a.createElement(u.a,null,o.a.createElement(Y,null)));window.onload=function(){s.a.preloadReady().then(function(){c.a.hydrate(G,document.getElementById("root"))})}}},[[185,1,2]]]);
//# sourceMappingURL=main.f13a7835.chunk.js.map