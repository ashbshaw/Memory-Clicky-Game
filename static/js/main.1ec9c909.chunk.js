(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/siamese-dream.6108a2b8.jpg"},function(e,t,a){e.exports=a.p+"static/media/moon.5cbf74ca.jpg"},function(e,t,a){e.exports=a.p+"static/media/eyelid.925fb5e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/computer.0748d091.jpg"},function(e,t,a){e.exports=a.p+"static/media/summer.f23add7f.jpg"},function(e,t,a){e.exports=a.p+"static/media/pikul.5fd6a9b3.jpg"},function(e,t,a){e.exports=a.p+"static/media/animals.58c506d0.jpg"},function(e,t,a){e.exports=a.p+"static/media/fantastic.06b0e395.jpg"},function(e,t,a){e.exports=a.p+"static/media/pinkerton.593b6b14.jpg"},function(e,t,a){e.exports=a.p+"static/media/sunny.e8d172f3.jpg"},function(e,t,a){e.exports=a.p+"static/media/toadies.cbbc536e.jpg"},function(e,t,a){e.exports=a.p+"static/media/nada.646159ee.jpg"},,function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=(a(27),a(20)),s=a(1),m=a(2),l=a(4),u=a(3),d=a(5);a(28);var p=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,e.name),i.a.createElement("li",null,e.artist))))};a(29);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(30);var h=function(e){return i.a.createElement("p",{className:"instruct"},e.children)},f=a(8),b=a.n(f),k=a(9),v=a.n(k),E=a(10),j=a.n(E),y=a(11),w=a.n(y),S=a(12),x=a.n(S),O=a(13),N=a.n(O),C=a(14),M=a.n(C),W=a(15),P=a.n(W),A=a(16),F=a.n(A),H=a(17),z=a.n(H),B=a(18),R=a.n(B),T=a(19),D=a.n(T),I=[{id:1,name:"Siamese Dream",image:b.a,artist:"Smashing Pumpkins"},{id:2,name:"The Moon and Antarctica",image:v.a,artist:"Modest Mouse"},{id:3,name:"Eyelid Movies",image:j.a,artist:"Phantogram"},{id:4,name:"OK Computer",image:w.a,artist:"Radiohead"},{id:5,name:"Summer in Abaddon",image:x.a,artist:"Pinback"},{id:6,name:"Pikul",image:N.a,artist:"Silversun Pickups"},{id:7,name:"Animals",image:M.a,artist:"Pink Floyd"},{id:8,name:"Fantastic Planet",image:P.a,artist:"Failure"},{id:9,name:"Pinkerton",image:F.a,artist:"Weezer"},{id:10,name:"How It Feels to Be Something On",image:z.a,artist:"Sunny Day Real Estate"},{id:11,name:"Rubberneck",image:R.a,artist:"Toadies"},{id:12,name:"High/Low",image:D.a,artist:"Nada Surf"}],J=(a(31),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderMessage",value:function(e,t){var a,n;return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?n="":void 0===e?(a="Click an image to begin",n="click"):(a=t?"You won!":e?"Correct!":"Oops! Try Again.",n=e?"correct":"incorrect"),i.a.createElement("li",{key:Math.random(),className:n},a)}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",null,i.a.createElement("ul",{className:"center navList"},i.a.createElement("li",{className:"logo"},"Music Clicky Game"),this.renderMessage(this.props.correct,this.props.gameWon),i.a.createElement("li",{className:"score"},"Score: ",this.props.score," | High Score: ",this.props.highScore))))}}]),t}(n.Component)),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={albums:I,clicked:[],score:0,highScore:0,correct:void 0,gameWon:!1},a.randomize=function(){return Math.random()>.5?-1:1},a.clickHandler=function(e){if(-1===a.state.clicked.indexOf(e)){var t=a.state.clicked.length+1,n=t===a.state.albums.length?[]:[].concat(Object(o.a)(a.state.clicked),[e]);a.setState({albums:a.state.albums.sort(a.randomize),clicked:n,score:t,highScore:Math.max(a.state.highScore,t),correct:!0,gameWon:t===a.state.albums.length})}else a.setState({albums:a.state.albums.sort(a.randomize),clicked:[],score:0,correct:!1,gameWon:!1})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{correct:this.state.correct,gameWon:this.state.gameWon,score:this.state.score,highScore:this.state.highScore}),i.a.createElement(g,null,i.a.createElement(h,null,"Choose one of Ashley's favorite albums, but don't pick the same one twice!"),this.state.albums.map(function(t){return i.a.createElement(p,{id:t.id,key:t.id,name:t.name,image:t.image,artist:t.artist,handleClick:e.clickHandler})}),";"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.1ec9c909.chunk.js.map