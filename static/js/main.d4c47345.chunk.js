(this["webpackJsonp@joshuasoave/fortune-teller"]=this["webpackJsonp@joshuasoave/fortune-teller"]||[]).push([[0],{48:function(e,a,t){e.exports=t(75)},70:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=t(38),i=t(32),m=t.n(i),u=(t(70),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Fortune Teller"))}),s=function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/joshuasoave"},"My Github")))},E=function(e){var a=e.onDeal;return r.a.createElement("div",{onClick:a},r.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/1633/8969/products/300-063_RadiantRiderWaite_5.jpg?v=1500496205",alt:"back of a tarot card",className:"card-back-img",onClick:a}))},d=t(37),f=t(87),h=t(94),p=t(88),g=t(89),v=t(96),b=t(90),k=t(91),j=t(92),w=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];Object(d.a)();return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(f.a,null,r.a.createElement(h.a,{className:"card-area"},t.length>0?r.a.createElement(p.a,{container:!0,direction:"row",alignContent:"flex-start"},r.a.createElement(p.a,{item:!0,direction:"column"},r.a.createElement(g.a,{onClick:function(){l([])}},"Back")),t.map((function(e){var a=function(){var e=Math.floor(2*Math.random());if(console.log(e),e)return!0}();return r.a.createElement(p.a,{container:!0,item:!0,direction:"column",spacing:2,alignItems:"stretch"},r.a.createElement(p.a,{item:!0,alignItems:"left",xs:12,className:"card-grid-item"},r.a.createElement(v.a,{sx:{minWidth:275}},r.a.createElement(b.a,null,r.a.createElement(k.a,null,r.a.createElement(j.a,{align:"left",component:"h3"},e.name),a?r.a.createElement(j.a,{component:"h3",align:"left"},"Inverted"):"",r.a.createElement(j.a,null,a?e.meaning_rev:e.meaning_up))))))}))):r.a.createElement(E,{onDeal:function(){m.a.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3").then((function(e){l(e.data.cards)}))}})))),r.a.createElement(s,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d4c47345.chunk.js.map