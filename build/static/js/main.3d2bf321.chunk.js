(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),s=c(8),r=c.n(s),o=(c(14),c.p,c(15),c(7)),j=c(3),d=c(2),l=(c(16),c(17),function(e){var t=e.id,c=e.brandName,a=e.productName,s=e.quantity,r=e.mrp,o=e.price,j=e.imageUrl,l=e.offerText,u=e.onAddCart,b=e.checkedOut;Object(i.useEffect)((function(){b&&p(0)}),[b]);var O=Object(i.useState)(0),h=Object(d.a)(O,2),f=h[0],p=h[1];return Object(n.jsxs)("div",{className:"product-container",children:[Object(n.jsxs)("div",{className:"left-container",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{className:"product-image",src:j,alt:c})}),Object(n.jsx)("div",{className:"offer-text",children:l})]}),Object(n.jsxs)("div",{className:"right-container",children:[Object(n.jsx)("div",{className:"brand-name",children:c}),Object(n.jsx)("div",{children:a}),Object(n.jsx)("div",{children:s}),Object(n.jsxs)("div",{children:["MRP ",r]}),Object(n.jsxs)("div",{className:"price",children:["\u20b9 ",o]}),Object(n.jsxs)("div",{className:"bottom-container",children:[Object(n.jsx)("button",{onClick:function(){0===f?(u(t,f+1,o),p(f+1)):(u(t,0,o),p(0))},children:0!==f?"Remove":"Add Cart"}),Object(n.jsxs)("div",{className:"add-qty-container",children:[Object(n.jsx)("button",{onClick:function(){0!==f&&(u(t,f-1,o),p(f-1))},children:"-"}),Object(n.jsx)("div",{className:"qty",children:f}),Object(n.jsx)("button",{onClick:function(){f!==s&&(u(t,f+1,o),p(f+1))},children:"+"})]})]})]})]})}),u=(c(18),c(19),function(e){var t=e.showModal,c=e.price,i=e.setShowModal,a=e.setCheckedOut;return Object(n.jsx)("div",{className:"modal ".concat(!t&&"hide"),children:Object(n.jsxs)("div",{className:"modal-container",children:[Object(n.jsxs)("div",{className:"price",children:["Total price: \u20b9",parseFloat(c).toFixed(2)]}),Object(n.jsx)("div",{className:"success",children:"Transaction Successful.. :)"}),Object(n.jsx)("button",{onClick:function(){i(!1),a(!0)},children:"Done"})]})})}),b=function(e){var t=e.show,c=e.quantity,a=e.price,s=e.setCheckedOut,r=Object(i.useState)(!1),o=Object(d.a)(r,2),j=o[0],l=o[1];return Object(n.jsxs)("div",{className:"snackbar ".concat(!t&&"show"),children:[Object(n.jsxs)("div",{className:"snackbar-container",children:[Object(n.jsxs)("div",{className:"price-qty",children:[Object(n.jsxs)("div",{children:["Quantity : ",c]}),Object(n.jsxs)("div",{children:["Total Price: \u20b9 ",parseFloat(a).toFixed(2)]})]}),Object(n.jsx)("button",{onClick:function(){return l(!0)},children:"Checkout"})]}),Object(n.jsx)(u,{showModal:j,price:a,setShowModal:l,setCheckedOut:s})]})},O={price:0,quantity:0,cart:[]},h=function(e){var t=Object(i.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(O),u=Object(d.a)(r,2),h=u[0],f=u[1],p=Object(i.useState)(!1),m=Object(d.a)(p,2),x=m[0],v=m[1],g=Object(i.useState)(!1),N=Object(d.a)(g,2),y=N[0],C=N[1];Object(i.useEffect)((function(){try{fetch("items.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e.items),console.log("Printing json Data: ",e)}),(function(e){console.log(e)}))}catch(e){console.log(e)}}),[]),Object(i.useEffect)((function(){console.log("CheckedOut: ",y),y&&(f(O),C(!1))}),[y]),Object(i.useEffect)((function(){0!==h.cart.length?(v(!0),k()):v(!1)}),[h.cart,h.cart.length]);var k=function(){var e=0,t=0;h.cart.map((function(c){e+=c.quantity*c.price,t+=c.quantity})),f(Object(j.a)(Object(j.a)({},h),{},{price:e,quantity:t}))},q=function(e,t,c){if(h.cart&&h.cart.find((function(t){return t.item_id===e})))if(0===t)!function(e){for(var t=Object(o.a)(h.cart),c=0;c<t.length;c++)t[c].item_id==e&&t.splice(c,1);f(Object(j.a)(Object(j.a)({},h),{},{cart:t}))}(e);else{var n=h.cart.map((function(c){return c.item_id===e&&(c.quantity=t),c}));f(Object(j.a)(Object(j.a)({},h),{},{cart:n}))}else{var i={item_id:e,quantity:t,price:c};f(Object(j.a)(Object(j.a)({},h),{},{cart:[].concat(Object(o.a)(h.cart),[i])}))}};return Object(n.jsxs)("div",{className:"shopping-page",children:[Object(n.jsx)("div",{className:"shopping-container",children:0!==a.length&&a.map((function(e){return Object(n.jsx)(l,{id:e.id,brandName:e.brand_name,productName:e.product_name,quantity:e.quantity,mrp:e.mrp,price:e.price,imageUrl:e.image_url,offerText:e.offer_text,onAddCart:q,checkedOut:y},e.id)}))}),Object(n.jsx)(b,{show:x,quantity:h.quantity,price:h.price,setCheckedOut:C})]})};var f=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.3d2bf321.chunk.js.map