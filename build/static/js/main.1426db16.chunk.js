(this["webpackJsonp@joshuasoave/fortune-teller"]=this["webpackJsonp@joshuasoave/fortune-teller"]||[]).push([[0],{48:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=a(12),i=a(13),u=a(16),s=a(14),m=a(36),d=a.n(m),h=(a(70),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"TarotTime"))}}]),a}(r.a.Component)),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/joshuasoave"},"My Github")))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/1633/8969/products/300-063_RadiantRiderWaite_5.jpg?v=1500496205",alt:"back of a tarot card",className:"card-back-img",onClick:this.props.onDeal}))}}]),a}(r.a.Component),E=a(87),b=a(91),j=a(88),v=a(92),O=a(89),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.goBack=function(){e.setState({dealtCards:!1})},e.handleDealtCards=function(){d.a.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3").then((function(t){console.log(t.data.cards),e.setState({dealtCards:t.data.cards})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"card-area"},this.state.dealtCards?r.a.createElement(j.a,{container:!0,direction:"row",alignContent:"right"},r.a.createElement(j.a,{item:!0,direction:"column"},r.a.createElement(v.a,{onClick:this.goBack},"Back")),this.state.dealtCards.map((function(e){return r.a.createElement(j.a,{container:!0,item:!0,direction:"column",alignItems:"left"},r.a.createElement(j.a,{item:!0,alignItems:"left"},r.a.createElement(O.a,{component:"h3"},e.name)),r.a.createElement("br",null),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,null,e.meaning_up)))}))):r.a.createElement(f,{onDeal:this.handleDealtCards})))),r.a.createElement(p,null))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1426db16.chunk.js.map