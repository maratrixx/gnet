(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{235:function(e,t,a){"use strict";a.r(t);a(268),a(269),a(26),a(20),a(19),a(79);var n=a(0),l=a.n(n),s=a(244),r=a(241),c=a(312),i=a(278),o=a.n(i),m=a(238),u=a.n(m),d=a(151),p=a.n(d),E=a(242),v=a(239);var g=function(e,t,a){var l=Object(n.useState)(void 0),s=l[0],r=l[1];Object(n.useEffect)((function(){var n=[],l=[];function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],s=l.getBoundingClientRect().top;s>=0&&s<=a&&(t=l),e+=1}return t}();if(c){var i=0,o=!1;for(l=document.getElementsByClassName(e);i<l.length&&!o;){var m=l[i],u=m.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));c.id===d&&(s&&s.classList.remove(t),m.classList.add(t),r(m),o=!0),i+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))};function f(e){var t=e.headings,a=e.isChild;if(g("contents__link","contents__link--active",100),!t.length)return null;var n=o.a.uniqBy(t,(function(e){return e.value}));return l.a.createElement("ul",{className:a?"":"contents"},n.map((function(e){var t=e.value.replace("<code><","<code>&lt;").replace("></code>","&gt;</code>");return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:t}}),l.a.createElement(f,{isChild:!0,headings:e.children}))})))}function h(e){var t=e.values,a=Object(v.a)().siteConfig,n=(void 0===a?{}:a).customFields.metadata.event_types,s=[];return n.forEach((function(e){t.includes(e)?s.push(l.a.createElement("span",{key:e,className:"text--primary"},o.a.capitalize(e))):s.push(l.a.createElement("del",{key:e,className:"text--warning"},o.a.capitalize(e))),s.push(l.a.createElement("span",{key:e+"-comma"},", "))})),s.pop(),s}function _(e){var t=e.operatingSystems,a=e.unsupportedOperatingSystems,n=[];return(t||[]).forEach((function(e){n.push(l.a.createElement("span",{key:e,className:"text--primary"},e)),n.push(l.a.createElement("span",{key:e+"-comma"},", "))})),(a||[]).forEach((function(e){n.push(l.a.createElement("del",{key:e,className:"text--warning"},e)),n.push(l.a.createElement("span",{key:e+"-comma"},", "))})),n.pop(),n}function y(e){var t=e.deliveryGuarantee,a=e.eventTypes,n=e.operatingSystems,s=e.status,c=e.unsupportedOperatingSystems;return s||t||n||c?l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Support"),"beta"==s&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#beta",className:"text--warning",title:"This component is in beta and is not recommended for production environments. Click to learn more."},l.a.createElement("i",{className:"feather icon-alert-triangle"})," Beta Status")),"prod-ready"==s&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#prod-ready",className:"text--primary",title:"This component has passed reliability standards that make it production ready. Click to learn more."},l.a.createElement("i",{className:"feather icon-award"})," Prod-Ready Status")),"best_effort"==t&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#best-effort",className:"text--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data. Click to learn more."},l.a.createElement("i",{className:"feather icon-shield-off"})," Best-Effort Delivery")),"at_least_once"==t&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#at-least-once",className:"text--primary",title:"This component offers an at-least-once delivery guarantee. Click to learn more."},l.a.createElement("i",{className:"feather icon-shield"})," At-Least-Once")),a&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/data-model/",title:"This component works on the these event types."},l.a.createElement("i",{className:"feather icon-database"})," ",l.a.createElement(h,{values:a}))),n&&c&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/setup/installation/operating-systems/",title:"This component works on the "+n.join(", ")+" operating systems."},l.a.createElement("i",{className:"feather icon-cpu"})," ",l.a.createElement(_,{operatingSystems:n,unsupportedOperatingSystems:c})))):null}t.default=function(e){var t=Object(v.a)().siteConfig,a=void 0===t?{}:t,n=a.title,i=a.url,o=e.content,m=o.metadata,d=m.description,g=m.editUrl,h=m.image,_=m.keywords,N=m.lastUpdatedAt,b=m.lastUpdatedBy,k=m.permalink,w=m.title,C=m.version,x=o.frontMatter,S=(x.component_title,x.delivery_guarantee),O=x.event_types,T=x.function_category,L=(x.hide_title,x.hide_table_of_contents,x.issues_url),B=x.operating_systems,j=x.posts_path,I=x.source_url,P=x.status,z=x.unsupported_operating_systems,A=i+Object(E.a)(h);return l.a.createElement("div",null,l.a.createElement(s.a,null,w&&l.a.createElement("title",null,w," | Docs | ",n),d&&l.a.createElement("meta",{name:"description",content:d}),d&&l.a.createElement("meta",{property:"og:description",content:d}),_&&_.length&&l.a.createElement("meta",{name:"keywords",content:_.join(",")}),h&&l.a.createElement("meta",{property:"og:image",content:A}),h&&l.a.createElement("meta",{property:"twitter:image",content:A}),h&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),k&&l.a.createElement("meta",{property:"og:url",content:i+k})),l.a.createElement("div",{className:p.a.container},l.a.createElement("div",{className:p.a.leftCol},l.a.createElement("div",{className:"docItemContainer_"},l.a.createElement("article",null,C&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",C),!m.hide_title&&l.a.createElement("header",null,l.a.createElement("div",{className:"badges"},T&&l.a.createElement(r.a,{to:"/components?functions[]="+T,className:"badge badge--primary"},T)),l.a.createElement("h1",{className:p.a.docTitle},m.title)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null)))),!m.hide_pagination&&(m.next||m.previous)&&l.a.createElement("div",{className:p.a.paginator},l.a.createElement(c.a,{next:m.next,previous:m.previous}))),o.rightToc&&l.a.createElement("div",{className:p.a.rightCol},l.a.createElement("div",{className:u()("table-of-contents",p.a.tableOfContents)},l.a.createElement(y,{deliveryGuarantee:S,eventTypes:O,operatingSystems:B,status:P,unsupportedOperatingSystems:z}),o.rightToc.length>0&&l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Contents"),l.a.createElement(f,{headings:o.rightToc})),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Resources"),l.a.createElement("ul",{className:"contents"},g&&l.a.createElement("li",null,l.a.createElement("a",{href:g,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-edit-1"})," Edit this page")),j&&l.a.createElement("li",null,l.a.createElement(r.a,{to:j,className:"contents__link"},l.a.createElement("i",{className:"feather icon-book-open"})," View Blog Posts")),L&&l.a.createElement("li",null,l.a.createElement("a",{href:L,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-message-circle"})," View Issues")),I&&l.a.createElement("li",null,l.a.createElement("a",{href:I,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-github"})," View Source")))),(N||b)&&l.a.createElement("div",{className:"section"},"Last updated"," ",N&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("strong",null,new Date(1e3*N).toLocaleDateString()),b&&" "),b&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,b)))))))}},268:function(e,t,a){"use strict";var n=a(12),l=a(82)(!0);n(n.P,"Array",{includes:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a(80)("includes")},269:function(e,t,a){"use strict";var n=a(12),l=a(294);n(n.P+n.F*a(295)("includes"),"String",{includes:function(e){return!!~l(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},312:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(241),r=a(238),c=a.n(r);a(142);t.a=function(e){var t=e.className,a=e.previous,n=e.next;return l.a.createElement("nav",{className:c()("pagination-nav",t)},a&&l.a.createElement("div",{className:"pagination-nav__item"},l.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",a.title))),n&&l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l.a.createElement(s.a,{className:"pagination-nav__link",to:n.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},n.title," \xbb"))))}}}]);