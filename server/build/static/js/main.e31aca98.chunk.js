(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),o=(a(71),a(72),a(12)),s=a(5),u=a(7),i=a(15),m=a.n(i),d=a(19),p=a(8),E=a(37),f=a.n(E),b=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(t).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){return function(a){console.log("text, type",e,t),a({type:"ADD_NOTIFIER",payload:{text:e,type:t}})}},g={searchPizza:function(e){return function(t){t({type:"SEARCH_PIZZA",payload:e})}}},O=Object(p.b)(null,g)((function(e){var t=e.searchPizza,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"search-block"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){o(e.currentTarget.value)},value:l}))),r.a.createElement("button",{className:"btn btn-primary"},"\u043f\u043e\u0438\u0441\u043a")))})),h=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement(O,null))},N=a(64),j=a(65),k=a(103),y=a(113),S=a(111),I=a(104),C=a(110),_=a(117),x=a(105),z=function(e,t){return N.a(t,e.pizzas)},P=function(e){return j.a((function(t){return z(e,t)}),e.homePage.ids).filter((function(t){return k.a(e.homePage.search,t.name)}))},T=function(e){return e.basket.map((function(t){var a=z(e,t);return{dollar:a.dollar,euro:a.euro,name:a.name}}))},D=function(e){return y.a(e.basket)},A=function(e){var t=S.a(e.basket);return C.a(j.a((function(t){return I.a("count",(a=t.id,e.basket.filter((function(e){return e===a})).length),t);var a})),j.a((function(t){return z(e,t)})))(t)},L=function(e){return{totalPriceInDollar:C.a(_.a,x.a("dollar"),j.a((function(t){return z(e,t)})))(e.basket),totalPriceInEuro:C.a(_.a,x.a("euro"),j.a((function(t){return z(e,t)})))(e.basket)}},B=a(112),F=(a(95),{fetchPizzas:function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_PIZZAS_START"}),e.prev=1,e.next=4,b("/api/pizza");case 4:a=e.sent,t({type:"FETCH_PIZZAS_SUCCESS",payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("err",e.t0),t({type:"FETCH_PIZZAS_FAILUER",payload:e.t0,error:!0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},addPizzaToBasket:function(e){return function(t){t({type:"ADD_PIZZA_TO_BASKET",payload:e})}}}),w=Object(p.b)((function(e){return{pizzas:P(e)}}),F)((function(e){var t=e.pizzas,a=e.fetchPizzas,c=e.addPizzaToBasket;Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"row"},t.map((function(e){return function(e){var t="".concat(B.a(40,e.description),"...");return r.a.createElement("div",{className:"col-sm-4",key:e.id},r.a.createElement("div",{className:"card card-pizza"},r.a.createElement("div",{className:"card-pizza-image"},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:"img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.name),r.a.createElement("p",{className:"card-text"},t),r.a.createElement("p",{className:"card-text"},"\u0446\u0435\u043d\u0430: $",e.dollar," / \u20ac",e.euro),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return c(e.id)}},"\u041a\u0423\u041f\u0418\u0422\u042c!"))))}(e)}))))))})),Z=a(46),R=a(114),U=a(6),H=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(s.a)(c,2),o=l[0],u=l[1],i=Object(n.useState)(""),p=Object(s.a)(i,2),E=p[0],b=p[1],v=Object(n.useState)({}),g=Object(s.a)(v,2),O=g[0],h=g[1],N=Object(n.useState)(""),j=Object(s.a)(N,2),k=j[0],y=j[1],S=Object(n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(null),h(t),r(!0),y(e)}),[]);Object(n.useEffect)((function(){var e;if(a){var t=Object(U.a)(Object(U.a)({},O),{headers:{authorization:null!==(e=localStorage.getItem("token"))&&void 0!==e?e:""}});(function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(k,t).then((function(e){r(!1),u(e.data)})).catch((function(e){if(e&&e.response){var t=e.response.data.message?e.response.data.message:e.response.data;b(t),r(!1)}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[a,k,O]);var I=Object(n.useCallback)((function(){return b("")}),[]);return{isLoading:a,response:o,error:E,doFetch:S,clearError:I}},M=(a(96),{removePizzaFromBasket:function(e){return function(t){t({type:"REMOVE_PIZZA_FROM_BASKET",payload:e})}},clearBasket:function(e){return function(e){e({type:"CLEAR_BASKET"})}},increaseTheGoodsCountById:function(e){return function(t){t({type:"INCREASE_THE_GOODS_COUNT_BY_ID",payload:e})}},addNotify:v,decreaseTheGoodsCountById:function(e){return function(t){t({type:"DECREASE_THE_GOODS_COUNT_BY_ID",payload:e})}}}),G=Object(p.b)((function(e){return{pizzasJson:T(e),pizzas:A(e),totalBusketPrice:L(e)}}),M)((function(e){var t=e.pizzas,a=e.totalBusketPrice,c=e.removePizzaFromBasket,l=e.pizzasJson,o=e.clearBasket,u=e.increaseTheGoodsCountById,i=e.addNotify,m=e.decreaseTheGoodsCountById,d=Object(n.useState)(""),p=Object(s.a)(d,2),E=p[0],f=p[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),g=v[0],O=v[1],h=H(),N=h.isLoading,j=h.response,k=h.doFetch,y=h.error;Object(n.useEffect)((function(){y&&i(y,"danger")}),[y]),Object(n.useEffect)((function(){!y&&j&&(f(""),O(""),o())}),[o,f,O,y,j]);var S=function(e){e.preventDefault(),console.log(e.currentTarget.value)};if(R.a(t))return r.a.createElement("div",{className:"basket-is-empty"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430");var I=a.totalPriceInDollar,C=a.totalPriceInEuro;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"basket-table"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"first-column-checkout"},r.a.createElement("img",{className:"img-thumbnail",src:e.image,alt:e.name})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("div",{className:"input-spinner"},r.a.createElement("button",{className:"btn btn-danger input-spinner-plus",onClick:function(t){return function(e,t){e.preventDefault(),m(t)}(t,e.id)}}," - "),r.a.createElement("input",{type:"number",className:"input-spinner-input",value:e.count,onChange:S}),r.a.createElement("button",{className:"btn btn-danger input-spinner-minus",onClick:function(t){return function(e,t){e.preventDefault(),u(t)}(t,e.id)}}," + "))),r.a.createElement("td",null,r.a.createElement("span",{onClick:function(){return c(e.id)},className:"delete-pizza"},"x")))})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:2,className:"first-column-checkout"},"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),r.a.createElement("td",{colSpan:2},"$4 / \u20ac3")))),r.a.createElement("div",{className:"text-right basket-total-price"},"\u041e\u0431\u0449\u0430\u044f \u0446\u0435\u043d\u0430 c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 - $",I+4," / \u20ac",C+4)),r.a.createElement("div",{className:"auth-block"},r.a.createElement("h1",{className:"text-center"},"\u0424\u043e\u0440\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:E,address:g,jsonData:Object(Z.a)(l),totalPriceDollar:I+4,totalPriceEuro:C+4};f(""),O(""),o(),i("\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442","success"),k("/api/order/makeOrder",{method:"post",data:t})}},r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"\u0418\u043c\u044f")),r.a.createElement("input",{placeholder:"\u0418\u043c\u044f",id:"name",type:"text",name:"name",required:!0,className:"form-control",onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"\u0410\u0434\u0440\u0435\u0441")),r.a.createElement("input",{placeholder:"\u0410\u0434\u0440\u0435\u0441",id:"adrress",type:"text",required:!0,name:"adrress",className:"form-control",onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{disabled:N,className:"btn btn-primary",type:"submit"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c")))))})),K=(a(97),function(){var e=H(),t=e.isLoading,a=e.response,c=e.doFetch;return Object(n.useEffect)((function(){c("/api/order/get-orders")}),[c]),t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"auth-block"},r.a.createElement("h1",{className:"text-center"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"\u0418\u043c\u044f"),r.a.createElement("th",{scope:"col"},"\u0410\u0434\u0440\u0435\u0441"),r.a.createElement("th",{scope:"col"},"P\u0430\u043a\u0430\u0437"),r.a.createElement("th",{scope:"col"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430"))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.address),r.a.createElement("td",{className:"table-total-sum-td"},e.jsonData.map((function(e){return r.a.createElement("div",{className:"table-total-sum"},r.a.createElement("p",null,"\u041f\u0438\u0446\u0446\u0430 - ",e.name),r.a.createElement("p",null,"\u0446\u0435\u043d\u043d\u0430 - $",e.dollar," / \u20ac",e.euro))}))),r.a.createElement("td",null,"$",e.totalPriceDollar," / \u20ac",e.totalPriceEuro))})))))}),$=Object(n.createContext)([{},function(){}]),J=function(e){var t=e.children,a=Object(n.useState)({isLoading:!1,isLoggedIn:null,currentUser:null}),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement($.Provider,{value:[l,o]},t)},V=(a(98),{addNotify:v}),Y=Object(p.b)(null,V)((function(e){var t=e.addNotify,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),p=d[0],E=d[1],f="/login"===Object(u.h)().pathname,b=f?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",v=f?"/registration":"/login",g=f?"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f?":"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",O=f?"/api/auth/login":"/api/auth/registration",h=H(),N=h.isLoading,j=h.response,k=h.doFetch,y=h.error,S=h.clearError,I=Object(n.useContext)($),C=Object(s.a)(I,2)[1],_=Object(u.g)();Object(n.useEffect)((function(){j&&(localStorage.setItem("token",j.user.token),C((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:j.user})})),t("Logged successfully","success"),_.push("/"))}),[j,C,_]),Object(n.useEffect)((function(){y&&(t(y,"danger"),S())}),[y]);return r.a.createElement("div",{className:"auth-block"},r.a.createElement("h1",{className:"text-center"},b),r.a.createElement("p",{className:"text-center is-login"},r.a.createElement(o.b,{to:v},g)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),k(O,{method:"post",data:{email:l,password:p}})}},r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Email")),r.a.createElement("input",{placeholder:"email",id:"email",type:"email",name:"email",className:"form-control",onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Password")),r.a.createElement("input",{placeholder:"\u0437assword",id:"password",type:"password",name:"password",className:"form-control",onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{disabled:N,className:"btn btn-primary",type:"submit"},b))))})),q=function(){var e=Object(n.useContext)($),t=Object(s.a)(e,1)[0];return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(w,null)),r.a.createElement(u.b,{path:"/basket"},r.a.createElement(G,null)),!t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{path:"/login"},r.a.createElement(Y,null)),r.a.createElement(u.b,{path:"/registration"},r.a.createElement(Y,null))),t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{path:"/history"},r.a.createElement(K,null))),r.a.createElement(u.a,{to:"/"}))},W=a(20),Q=a(62),X=a(63),ee=a(109),te=a(116),ae={},ne={ids:[],search:""},re=a(115),ce=a(108),le=a(106),oe=a(107),se=[],ue=[],ie=Object(W.combineReducers)({homePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PIZZAS_SUCCESS":var r=x.a("id");return te.a(e,{ids:r(n)});case"SEARCH_PIZZA":return te.a(e,{search:n});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_PIZZA_TO_BASKET":return re.a(n,e);case"REMOVE_PIZZA_FROM_BASKET":return ce.a([n],e);case"CLEAR_BASKET":return[];case"INCREASE_THE_GOODS_COUNT_BY_ID":return re.a(n,e);case"DECREASE_THE_GOODS_COUNT_BY_ID":var r=le.a(n,e),c=oe.a(r,1,e);return c;default:return e}},notifier:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_NOTIFIER":var r=Math.round(1e7*Math.random());return[].concat(Object(Z.a)(e),[{id:r,text:n.text,type:n.type}]);case"REMOVE_NOTIFIER":var c=e.filter((function(e){if(e.id!==n)return e}));return c||[];default:return e}},pizzas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PIZZAS_SUCCESS":var r=ee.a(N.a("id"),n);return te.a(e,r);default:return e}}}),me=Object(W.createStore)(ie,Object(Q.composeWithDevTools)(Object(W.applyMiddleware)(X.a))),de=Object(p.b)((function(e){return{totalBusketCount:D(e),totalBusketPrice:L(e)}}))((function(e){var t=e.totalBusketCount,a=e.totalBusketPrice,n=a.totalPriceInDollar,c=a.totalPriceInEuro;return r.a.createElement("div",{className:"basket-icon"},r.a.createElement("i",{className:"fa fa-shopping-basket","aria-hidden":"true"},r.a.createElement("span",null,t))," $",n," / \u20ac",c)})),pe=function(){var e=Object(n.useContext)($),t=Object(s.a)(e,2)[1],a=H(),r=a.response,c=a.error,l=a.doFetch,o=a.clearError,u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(!1),E=Object(s.a)(p,2),f=E[0],b=E[1],v=Object(n.useCallback)((function(){t({isLoading:!1,isLoggedIn:null,currentUser:null}),localStorage.removeItem("token")}),[t]);return Object(n.useEffect)((function(){if(!localStorage.getItem("token"))return t((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoading:!1,isLoggedIn:!1})})),void d(!0);l("/api/auth/check"),t((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoading:!0})}))}),[l,t]),Object(n.useEffect)((function(){c&&(t((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!1,isLoading:!1,currentUser:null})})),d(!0),localStorage.removeItem("token"),o())}),[c,o,t]),Object(n.useEffect)((function(){r&&(t((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:r.user})})),d(!0),b(!0))}),[r,t]),{ready:m,isAuth:f,logout:v}},Ee=(a(100),function(){var e=Object(u.g)(),t=pe().logout,a=Object(n.useContext)($),c=Object(s.a)(a,1)[0];return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(o.c,{to:"/",exact:!0,className:"navbar-brand  mr-auto"},"Pizzaaa"),!c.isLoading&&r.a.createElement("div",{className:"",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/",exact:!0,className:"nav-link"},"\u041c\u0435\u043d\u044e")),!c.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item nav-item-b"},r.a.createElement(o.c,{to:"/basket",exact:!0,className:"nav-link"},r.a.createElement(de,null))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/login",className:"nav-link"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/registration",exact:!0,className:"nav-link"},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),c.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item nav-item-b"},r.a.createElement(o.c,{to:"/basket",exact:!0,className:"nav-link"},r.a.createElement(de,null))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/history",exact:!0,className:"nav-link"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link nav-link-button",onClick:function(a){a.preventDefault(),t(),e.push("/")}},"\u0412\u044b\u0439\u0442\u0438"))))))}),fe=(a(101),{removeNotify:function(e){return function(t){t({type:"REMOVE_NOTIFIER",payload:e})}}}),be=Object(p.b)((function(e){return{notifier:e.notifier}}),fe)((function(e){var t=e.notifier,a=e.removeNotify;console.log(t);return t.length?r.a.createElement("div",{className:"alert-block"},t.map((function(e){var t="alert alert-".concat(e.type);return r.a.createElement("div",{className:t},e.text,r.a.createElement("span",{onClick:function(t){return function(e,t){e.preventDefault(),a(t)}(t,e.id)},className:"alert-block-close"},"x"))}))):r.a.createElement(r.a.Fragment,null)})),ve=function(e){var t=e.children;return pe().ready?r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement("div",{className:"container"},r.a.createElement(be,null),t)):r.a.createElement("div",{className:"spinner-block"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},ge=function(e){var t=e.children,a=Object(n.useContext)($),r=Object(s.a)(a,2)[1],c=H(),l=c.doFetch,o=c.response;return Object(n.useEffect)((function(){localStorage.getItem("token")?(l("/api/auth/check"),r((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoading:!0})}))):r((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!1})}))}),[l,r]),Object(n.useEffect)((function(){o&&(localStorage.setItem("token",o.user.token),r((function(e){return Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:o.user})})))}),[o,r]),t},Oe=function(){return r.a.createElement(ge,null,r.a.createElement(J,null,r.a.createElement(p.a,{store:me},r.a.createElement(o.a,null,r.a.createElement(ve,null,r.a.createElement(q,null))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root"))},66:function(e,t,a){e.exports=a(102)},71:function(e,t,a){},72:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.e31aca98.chunk.js.map