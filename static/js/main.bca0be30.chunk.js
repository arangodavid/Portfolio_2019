(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/programmer.8c181c2b.jpg"},11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),l=(a(17),a(1)),i=a(2),o=a(4),m=a(3),h=a(6),u=a(5),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"scroll",value:function(e){e.scrollIntoView({behavior:"smooth"})}},{key:"handleClick",value:function(e){var t;switch(e.target.innerHTML.toLowerCase()){case"home":t=document.querySelector(".header_cont"),this.scroll(t);break;case"about":t=document.querySelector(".about_cont"),this.scroll(t);break;case"technology":t=document.querySelector(".technology_blocks"),this.scroll(t)}}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"nav_cont"},c.a.createElement("section",{className:"nav_mobile_toggle"},c.a.createElement("section",{onClick:this.props.handleClickMob,className:"hamburger_cont"},c.a.createElement("section",{className:"hamburger_dash dash_one"}),c.a.createElement("section",{className:"hamburger_dash dash_two"}),c.a.createElement("section",{className:"hamburger_dash dash_three"}))),c.a.createElement("ul",{onClick:this.props.handleClickDesk,className:"nav_cont__inner"},this.props.categories.map(function(t,a){return c.a.createElement("li",{key:"".concat(t," + _").concat(a),onClick:e.handleClick,className:"nav_item ".concat(t.toLowerCase())},t)})))}}]),t}(c.a.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).categories=["Home","About","Technology"],a.handleClickMob=a.handleClickMob.bind(Object(h.a)(a)),a.handleClickDesk=a.handleClickDesk.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClickMob",value:function(){var e=document.querySelector(".hamburger_cont"),t=document.querySelectorAll(".nav_item");"hamburger_cont"===e.className?e.className+=" isActive":e.className="hamburger_cont";var a=!0,n=!1,c=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var l=r.value;l.className==="nav_item ".concat(l.innerHTML.toLowerCase())?l.className+=" isVisibleMob":l.className="nav_item ".concat(l.innerHTML.toLowerCase())}}catch(i){n=!0,c=i}finally{try{a||null==s.return||s.return()}finally{if(n)throw c}}}},{key:"checkClick",value:function(e){var t=document.querySelector(".nav_cont__inner");"ul"===e.tagName.toLowerCase()&&("nav_cont__inner"===t.className?t.className+=" isVisibleDesk":t.className="nav_cont__inner")}},{key:"handleClickDesk",value:function(e){window.matchMedia("(min-width: 800px)").matches&&this.checkClick(e.target)}},{key:"render",value:function(){return c.a.createElement(d,{categories:this.categories,handleClickDesk:this.handleClickDesk,handleClickMob:this.handleClickMob})}}]),t}(c.a.Component),f=function(e){return c.a.createElement("section",{className:"active_text"},c.a.createElement("section",{className:"active_text__welcome"},e.welcomeText),c.a.createElement("section",{className:"active_text__name"},e.nameText),c.a.createElement("section",{className:"active_text__phrases__cont"},c.a.createElement("span",{className:"active_text__pre_phrases"},"I am a "),c.a.createElement("span",{className:"active_text__phrases"},e.currentPhrase,c.a.createElement("span",{className:"active_text__indicator"},"|"))))},v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).phrases=a.props.phrases,a.state={phrase:"",phraseCount:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"nextPhrase",value:function(){this.state.phraseCount>=this.phrases.length-1?(this.setState({phraseCount:0}),this.start(this.phrases[this.state.phraseCount])):(this.setState({phraseCount:this.state.phraseCount+1}),this.start(this.phrases[this.state.phraseCount]))}},{key:"removePhrase",value:function(e,t){var a=this;setTimeout(function(){var t=e.substring(0,a.state.phrase.length-1);a.setState({phrase:t}),0===a.state.phrase.length&&setTimeout(function(){a.nextPhrase()},2e3)},150*t)}},{key:"checkPhrase",value:function(e){var t=this;e.length===this.state.phrase.length&&setTimeout(function(){for(var a=0;a<e.length;a++)t.removePhrase(e,a)},1500)}},{key:"setPhrase",value:function(e,t){var a=this;setTimeout(function(){var n=e.charAt(t);a.setState({phrase:a.state.phrase+n}),a.checkPhrase(e)},150*t)}},{key:"start",value:function(e){for(var t=0;t<e.length;t++)this.setPhrase(e,t)}},{key:"componentDidMount",value:function(){this.start(this.phrases[this.state.phraseCount])}},{key:"render",value:function(){return c.a.createElement(f,{welcomeText:this.props.children[0],nameText:this.props.children[1],currentPhrase:this.state.phrase})}}]),t}(c.a.Component),_=function(){return c.a.createElement("header",{className:"header_cont"},c.a.createElement(p,null),c.a.createElement(v,{phrases:["Programmer","Thinker","Problem Solver"]},c.a.createElement("p",null,"Welcome, my name is"),c.a.createElement("h1",null,"David Arango")))},b=a(7),g=function(e){return c.a.createElement("section",{className:"about_card"},c.a.createElement("section",{className:"about_card__cont_img"},c.a.createElement("img",{className:"about_card__img",src:e.src,alt:e.desc})),c.a.createElement("section",{className:"about_card_envelope"},c.a.createElement("h2",{className:"about_card__tittle"},e.title),c.a.createElement("p",{className:"about_card__desc"},e.children)))},w=function(e){return c.a.createElement("section",{className:"about_cont"},c.a.createElement(g,{title:e.attributes.titles.titleOne,src:e.attributes.srcs.srcOne.src,desc:e.attributes.srcs.srcOne.desc},"A Software Engineer specializing in all things JavaScript, its Libraries, and Frameworks to create a faster, more dynamic and interactive user experience. Fascinated by the power of creativity, I strive to create elegant and clean user interfaces. I am always learning, and looking for ways to improve."),c.a.createElement(g,{title:e.attributes.titles.titleTwo,src:e.attributes.srcs.srcOne.src,desc:e.attributes.srcs.srcOne.desc},"My main accomplishment was learning how to code. As a self taught programmer, there is no one behind you making sure that you're doing what you need to do to be successful. This has taught me perseverance, patience, and a strong work ethic."),c.a.createElement(g,{title:e.attributes.titles.titleThree,src:e.attributes.srcs.srcOne.src,desc:e.attributes.srcs.srcOne.desc},"I am attracted to CSS animations and creating a visually rich UX/UI. Most recently the 3D world has grabbed a hold of me, and I am in awe of Three.js/WebGl and its capabilities. I aim to interweave this new Library with my work to add life into my projects."))},E=a(10),k={srcs:{srcOne:{src:a.n(E).a,desc:"Software Engineer writing on a whiteboard"}},titles:{titleOne:"Who Am I",titleTwo:"My Accomplishments",titleThree:"My Interests"}},y=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"animate",value:function(){var e=document.querySelectorAll(".about_card__img"),t=!0,a=!1,n=void 0;try{for(var c,r=e.entries()[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){var s=c.value,l=Object(b.a)(s,2),i=l[0],o=l[1];o.className+=" envelope-isActive",o.style.animationDelay=3*i+"s"}}catch(m){a=!0,n=m}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}},{key:"checkViewport",value:function(){window.matchMedia("(max-width: 800px)").matches&&this.animate()}},{key:"componentDidMount",value:function(){this.checkViewport()}},{key:"render",value:function(){return c.a.createElement(w,{attributes:k})}}]),t}(c.a.Component),N=function(e){return c.a.createElement("section",{className:"rectangle_cont"},c.a.createElement("section",{className:"rectangle"},c.a.createElement("section",{className:"face front"},c.a.createElement("section",{className:"rectangle_logo"},e.title),c.a.createElement("section",{className:"rectangle_footer"},c.a.createElement("figure",{className:"rectangle_footer__img"}))),c.a.createElement("section",{className:"face left"}),c.a.createElement("section",{className:"face right"},c.a.createElement("p",{className:"rectangle_desc"},e.children),c.a.createElement("section",{className:"rectangle_footer"},c.a.createElement("figure",{className:"rectangle_footer__img"}))),c.a.createElement("section",{className:"face back"}),c.a.createElement("section",{className:"face bottom reactangle_inactive"})))},C=function(e){return c.a.createElement("section",{className:"technology_blocks"},c.a.createElement(N,{title:e.titles.titleOne},"The first language that I learned, the one that started it all..."),c.a.createElement(N,{title:e.titles.titleTwo},"I enjoy writing this language with its preprocessor SCSS to add flare, modularity and complexity to the cascading style sheet"),c.a.createElement(N,{title:e.titles.titleThree},"The language that solves it all, without JavaScript the web would have no ligaments, and an inability to move."))},O={titleOne:"HTML",titleTwo:"CSS",titleThree:"JS"},j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"animate",value:function(){var e=document.querySelectorAll(".rectangle"),t=!0,a=!1,n=void 0;try{for(var c,r=e.entries()[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){var s=c.value,l=Object(b.a)(s,2),i=l[0],o=l[1];o.className+=" rectangle-isActive",o.style.animationDelay=3*i+"s"}}catch(m){a=!0,n=m}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}},{key:"checkViewport",value:function(){window.matchMedia("(max-width: 800px)").matches&&this.animate()}},{key:"componentDidMount",value:function(){this.checkViewport()}},{key:"render",value:function(){return c.a.createElement(C,{titles:O})}}]),t}(c.a.Component),x=function(){return c.a.createElement("ul",{className:"social_icon_cont"},c.a.createElement("li",{className:"social_icon"},c.a.createElement("a",{className:"social_icon_link",href:"https://github.com/arangodavid",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin",className:"social_icon_img",role:"img",viewBox:"0 0 448 512"},c.a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-0.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})))),c.a.createElement("li",{className:"social_icon"},c.a.createElement("a",{className:"social_icon_link",href:"https://www.linkedin.com/in/david-arango-435037134/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github-square",className:"social_icon_img",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"})))),c.a.createElement("li",{className:"social_icon"},c.a.createElement("a",{className:"social_icon_link",href:"https://codepen.io/ComputingDoneRight/pens/popular/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"codepen",className:"social_icon_img",role:"img",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"})))))},S=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement(x,null),c.a.createElement("section",{className:"footer_notes"},c.a.createElement("p",{className:"footer_notes_p"},"Made from scratch with React.js"),c.a.createElement("p",{className:"footer_notes_p"},"\xa9 2019 David Arango Portfolio. All rights reserved.")))},M=function(){return c.a.createElement("section",{className:"parallax"})},T=function(){return c.a.createElement("section",{className:"root"},c.a.createElement(_,null),c.a.createElement(M,null),c.a.createElement(y,null),c.a.createElement(M,null),c.a.createElement(j,null),c.a.createElement(M,null),c.a.createElement(S,null))},z=function(){return c.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.bca0be30.chunk.js.map