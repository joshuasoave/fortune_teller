(this["webpackJsonp@joshuasoave/fortune-teller"]=this["webpackJsonp@joshuasoave/fortune-teller"]||[]).push([[0],{48:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(38),i=a(32),m=a.n(i),u=(a(70),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Fortune Teller"))}),s=function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/joshuasoave"},"My Github")))},E=function(e){var t=e.onDeal;return r.a.createElement("div",{onClick:t},r.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/1633/8969/products/300-063_RadiantRiderWaite_5.jpg?v=1500496205",alt:"back of a tarot card",className:"card-back-img",onClick:t}))},d=a(37),f=a(87),h=a(94),p=a(88),g=a(89),v=a(90),b=a(96),k=a(91),j=a(92),w=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=(Object(d.a)(),["Past","Present","Future"]);return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(f.a,null,r.a.createElement(h.a,{className:"card-area"},a.length>0?r.a.createElement(p.a,{container:!0,direction:"row",alignContent:"flex-start"},r.a.createElement(p.a,{item:!0,direction:"column"},r.a.createElement(g.a,{onClick:function(){l([])}},"Back")),a.map((function(e,t){var a=function(){var e=Math.floor(2*Math.random());if(console.log(e),e)return!0}();return r.a.createElement(p.a,{container:!0,item:!0,direction:"column",spacing:2,alignItems:"stretch"},r.a.createElement(p.a,{item:!0,alignItems:"left",xs:12,className:"card-grid-item"},r.a.createElement(v.a,{align:"left",component:"h3"},c[t]),r.a.createElement(b.a,{sx:{minWidth:275}},r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(v.a,{align:"left",component:"h3"},e.name),a?r.a.createElement(v.a,{component:"h3",align:"left"},"Inverted"):"",r.a.createElement(v.a,null,a?e.meaning_rev:e.meaning_up))))))}))):r.a.createElement(E,{onDeal:function(){m.a.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3").then((function(e){l(e.data.cards)}))}})))),r.a.createElement(s,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1a87cda1.chunk.js.map