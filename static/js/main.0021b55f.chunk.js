(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a(9),o=a(13),u=a(6),l=a(8),p=a(7),s={pictures:[],pictureSRC:{},textInput:"shibuya",pageIndex:1,placeholderText:"shibuya"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE_PICTURE":return Object(p.a)({},e,{pictures:t.payload.pictureTag});case"ADD_PICTURE":return Object(p.a)({},e,{pictures:e.pictures.concat([t.payload.pictureTag])});case"INITIALIZE_PICTURESRC":return Object(p.a)({},e,{pictureSRC:t.payload.pictureSRC});case"ADD_PICTURESRC":var a=Object.assign(e.pictureSRC,t.payload.pictureSRC);return Object(p.a)({},e,{pictureSRC:a});case"INPUT_TEXT":return Object(p.a)({},e,{textInput:t.payload.text});case"CHANGE_INDEX":return Object(p.a)({},e,{pageIndex:t.payload.indexNum});case"CHANGE_PLACEHOLDER":return Object(p.a)({},e,{placeholderText:t.payload.phText});default:return e}},m=a(11),f=a.n(m),h=a(16),E=function(e){var t=e.pictures,a=e.textInput,n=e.pageIndex,c=e.placeholderText,i=e.initializePicture,o=e.addPicture,l=e.initializePictureSRC,p=e.addPictureSRC,s=e.inputText,d=e.changeIndex,m=e.changePlaceholder,E=function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(1);case 2:fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=80fc790f054fc08c6370aba43284e925&tags="+a+"&per_page=10&page=1&format=json&nojsoncallback=1").then(function(e){return e.json()}).then(function(e){var t=e.photos.photo.map(function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+"_n.jpg",a=e.id,n="/picture/"+e.id,c="id-"+e.id;return r.a.createElement("div",{id:c,key:a},r.a.createElement(u.Link,{to:n},r.a.createElement("img",{alt:"",src:t})))}),n={},c={};e.photos.photo.forEach(function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg",a=e.id,r={src:t,title:e.title};c[a]=r,Object.assign(n,c)}),i(t),l(n),m("\u73fe\u5728\u306e\u691c\u7d22\u30ef\u30fc\u30c9\uff1a"+a)});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n++,fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=80fc790f054fc08c6370aba43284e925&tags="+a+"&per_page=10&page="+n+"&format=json&nojsoncallback=1").then(function(e){return e.json()}).then(function(e){var t=e.photos.photo.map(function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+"_n.jpg",a=e.id,n="/picture/"+e.id,c="id-"+e.id;return r.a.createElement("div",{id:c,key:a},r.a.createElement(u.Link,{to:n},r.a.createElement("img",{alt:"",src:t})))}),a={},n={};e.photos.photo.forEach(function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg",r=e.id,c={src:t,title:e.title};n[r]=c,Object.assign(a,n)}),o(t),p(a)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(e){e||(e=n,e++),d(e)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"App-title"},"Flickr Gallery")),r.a.createElement("p",{className:"searchBox"},r.a.createElement("input",{className:"textInput",placeholder:c,onChange:function(e){""===e.target.value||s(e.target.value)}}),r.a.createElement("button",{onClick:E},"\u691c\u7d22")),r.a.createElement("section",{className:"picArea"},t),t.length>0?r.a.createElement("p",{className:"moreButton"},r.a.createElement("button",{onClick:I},"\u753b\u50cf\u3092\u3055\u3089\u306b\u8aad\u307f\u8fbc\u3080")):r.a.createElement("p",null,"\u691c\u7d22\u3057\u305f\u3044\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u3001\uff3b\u691c\u7d22\uff3d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))},I=Object(i.b)(function(e){return{pictures:e.pictures,textInput:e.textInput,pageIndex:e.pageIndex,placeholderText:e.placeholderText}},function(e){return{initializePicture:function(t){e(function(e){return{type:"INITIALIZE_PICTURE",payload:{pictureTag:e}}}(t))},addPicture:function(t){e(function(e){return{type:"ADD_PICTURE",payload:{pictureTag:e}}}(t))},initializePictureSRC:function(t){e(function(e){return{type:"INITIALIZE_PICTURESRC",payload:{pictureSRC:e}}}(t))},addPictureSRC:function(t){e(function(e){return{type:"ADD_PICTURESRC",payload:{pictureSRC:e}}}(t))},inputText:function(t){e(function(e){return{type:"INPUT_TEXT",payload:{text:e}}}(t))},changeIndex:function(t){e(function(e){return{type:"CHANGE_INDEX",payload:{indexNum:e}}}(t))},changePlaceholder:function(t){e(function(e){return{type:"CHANGE_PLACEHOLDER",payload:{phText:e}}}(t))}}})(E),g=a(27),v=function(e){var t,a,n,c=e.match.params.id,i=e.pictureSRC[c];return i&&(t=i.src,a=i.title,n="/#id-"+c),r.a.createElement("div",{className:"App PictureDetail"},r.a.createElement("header",null,r.a.createElement("h1",{className:"App-title"},"Flickr Gallery")),r.a.createElement("div",null,i?r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",null,a)):r.a.createElement("p",null,"\u753b\u50cf\u304c\u53d6\u5f97\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002")),r.a.createElement("p",{className:"moreButton"},i?r.a.createElement(g.HashLink,{smooth:!0,to:n},r.a.createElement("button",null,"\u623b\u308b")):r.a.createElement(u.Link,{to:"/"},r.a.createElement("button",null,"\u623b\u308b"))))},C=Object(i.b)(function(e){return{pictureSRC:e.pictureSRC}})(v);a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(o.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(r.a.createElement(i.a,{store:_},r.a.createElement(u.BrowserRouter,null,r.a.createElement(l.d,{exact:!0,path:"/",component:I}),r.a.createElement(l.d,{path:"/picture/:id",component:C}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.0021b55f.chunk.js.map