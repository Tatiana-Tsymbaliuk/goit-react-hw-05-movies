"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[67],{713:function(e,n,t){t.d(n,{FV:function(){return i},Mv:function(){return s},Vb:function(){return f},bv:function(){return o},xj:function(){return a}});var r=t(861),c=t(757),u=t.n(c),a=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c34b122fbb2a64c51e2c0723d2e06d38");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=c34b122fbb2a64c51e2c0723d2e06d38"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US&query=".concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},67:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),c=t(439),u=t(757),a=t.n(u),i=t(689),o=t(791),s=t(713),f=t(184),p=function(e){var n=e.reviews;return console.log(n),(0,f.jsx)(f.Fragment,{children:0===n.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,f.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",t]}),(0,f.jsx)("div",{children:r})]},n)}))})})},v=function(){var e=(0,i.UO)().moviesId,n=(0,o.useState)([]),t=(0,c.Z)(n,2),u=t[0],v=t[1],h=(0,o.useState)(null),d=(0,c.Z)(h,2),l=(d[0],d[1]);return(0,o.useEffect)((function(){var n=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Mv)(n);case 3:t=e.sent,v(t.results),console.log(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Something went wrong with fetching films:",e.t0),l(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();n(e)}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsx)(p,{reviews:u})})})}},861:function(e,n,t){function r(e,n,t,r,c,u,a){try{var i=e[u](a),o=i.value}catch(s){return void t(s)}i.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,u){var a=e.apply(n,t);function i(e){r(a,c,u,i,o,"next",e)}function o(e){r(a,c,u,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=67.15f6c98c.chunk.js.map