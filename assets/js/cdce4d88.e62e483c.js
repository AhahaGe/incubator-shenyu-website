"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2733],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"2.3.0",sidebar_position:2,keywords:["release-notes"],description:"release-notes"},u="2.3.0",s={unversionedId:"2.3.0-release",id:"2.3.0-release",isDocsHomePage:!1,title:"2.3.0",description:"release-notes",source:"@site/event/2.3.0-release.md",sourceDirName:".",slug:"/2.3.0-release",permalink:"/event/2.3.0-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/event/2.3.0-release.md",version:"current",lastUpdatedBy:"YuI",lastUpdatedAt:1631536092,formattedLastUpdatedAt:"9/13/2021",sidebarPosition:2,frontMatter:{title:"2.3.0",sidebar_position:2,keywords:["release-notes"],description:"release-notes"},sidebar:"community",previous:{title:"2.4.0",permalink:"/event/2.4.0-release"},next:{title:"2.2.0",permalink:"/event/2.2.0-release"}},p=[{value:"soul-admin",id:"soul-admin",children:[]},{value:"soul-bootstrap",id:"soul-bootstrap",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"230"},"2.3.0"),(0,o.kt)("h2",{id:"soul-admin"},"soul-admin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"open")," field to allow app path authentication or not in sign plugin."),(0,o.kt)("li",{parentName:"ul"},"Optimize divide plugin to use common plugin template in soul-dashboard."),(0,o.kt)("li",{parentName:"ul"},"Add default values and rule checks in plugin handler."),(0,o.kt)("li",{parentName:"ul"},"Add resource management to allow user to add plugin, adjust menu and button resource and so on in soul-dashboard and soul-admin."),(0,o.kt)("li",{parentName:"ul"},"Add menu and data permission in soul-admin."),(0,o.kt)("li",{parentName:"ul"},"Add H2 store for soul-admin.")),(0,o.kt)("h2",{id:"soul-bootstrap"},"soul-bootstrap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add tars plugin"),(0,o.kt)("li",{parentName:"ul"},"Add sentinel plugin"),(0,o.kt)("li",{parentName:"ul"},"Add sofa plugin"),(0,o.kt)("li",{parentName:"ul"},"Add Resilience4j plugin for soul-plugin."),(0,o.kt)("li",{parentName:"ul"},"Add Context path mapping plugin for soul-plugin."),(0,o.kt)("li",{parentName:"ul"},"Add Grpc plugin supports grpc protocol."),(0,o.kt)("li",{parentName:"ul"},"Support form submission for dubbo plugin."),(0,o.kt)("li",{parentName:"ul"},"feat(plugin handle):"),(0,o.kt)("li",{parentName:"ul"},"Add dist package module"),(0,o.kt)("li",{parentName:"ul"},"Add test cases for soul-admin"),(0,o.kt)("li",{parentName:"ul"},"Add register center for consul"),(0,o.kt)("li",{parentName:"ul"},"Add register center for etcd"),(0,o.kt)("li",{parentName:"ul"},"Add register center for nacos"),(0,o.kt)("li",{parentName:"ul"},"Add register center for zookeeper")))}c.isMDXComponent=!0}}]);