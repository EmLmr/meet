(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(8),i=n.n(c),r=(n(13),n(2)),o=n(3),l=n(5),u=n(4),h=(n(14),n(6)),j=n(0),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={showDetails:!1},s.toggleDetails=s.toggleDetails.bind(Object(h.a)(s)),s}return Object(o.a)(n,[{key:"toggleDetails",value:function(){this.setState({showDetails:!this.state.showDetails})}},{key:"render",value:function(){var e=this.props.event;return Object(j.jsxs)("div",{className:"event-container",children:[Object(j.jsx)("h2",{className:"event-title",children:e.summary}),Object(j.jsx)("p",{children:e.status}),Object(j.jsxs)("div",{className:"basic-info",children:[Object(j.jsx)("h3",{className:"event-location",children:e.location}),Object(j.jsxs)("h3",{className:"event-scheduled-start",children:["From: ",e.start.dateTime," (",e.start.timeZone,")"]}),!0===this.state.showDetails&&Object(j.jsxs)("h3",{className:"event-scheduled-end",children:["From: ",e.end.dateTime," (",e.end.timeZone,")"]})&&Object(j.jsx)("p",{className:"event-details",children:e.description})]}),Object(j.jsx)("button",{className:"details-btn",onClick:this.toggleDetails,children:this.state.showDetails?"Close":"Show details"})]})}}]),n}(s.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{event:e})},e.id)}))})}}]),n}(s.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,s=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:s})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(j.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32},e.updateEventCount=function(t){var n=t.target.value;e.props.updateEventCount(null,n),n<1||n>32?e.setState({numberOfEvents:""}):e.setState({numberOfEvents:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(j.jsxs)("div",{className:"numberOfEvents",children:[Object(j.jsx)("p",{children:"Number of results:"}),Object(j.jsx)("input",{className:"event-count-input",type:"number",placeholder:"0",value:e,onChange:this.updateEventCount})]})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{}),Object(j.jsx)(O,{}),Object(j.jsx)(b,{})]})}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.78aa1158.chunk.js.map