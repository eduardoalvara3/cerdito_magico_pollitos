(function(){"use strict";var t={7676:function(t,i,e){var n=e(9242),o=e(3396);function s(t,i,e,n,s,r){const a=(0,o.up)("Scene");return(0,o.wg)(),(0,o.j4)(a,{msg:"Got real, real quick"})}var r=e(7139);const a=t=>((0,o.dD)("data-v-4e85f791"),t=t(),(0,o.Cn)(),t),c={id:"canvas",ref:"canvas",class:"has-bg"},d={ref:"video",width:"400"},l=["src"],h={class:"song-name",ref:"songName"},u={class:"songs show",ref:"songs"},p=["onClick"],g={class:"song_title"},w={class:"song_artist"},m=a((()=>(0,o._)("div",{id:"palm1"},null,-1))),f=a((()=>(0,o._)("div",{id:"palm2"},null,-1)));function b(t,i,e,n,s,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,null,512),(0,o._)("video",d,[0===t.currentSong||t.currentSong>0?((0,o.wg)(),(0,o.iD)("source",{key:0,source:"",src:t.songs[t.currentSong]?.src,type:"video/mp4"},null,8,l)):(0,o.kq)("",!0),(0,o.Uk)(" Your browser does not support HTML video. ")],512),(0,o._)("div",h,[(0,o._)("h1",null,(0,r.zw)(t.songs[t.currentSong]?.title),1),(0,o._)("h2",null,(0,r.zw)(t.songs[t.currentSong]?.artist),1)],512),(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.songs,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"song",key:t.id,onClick:i=>a.setSong(t.id)},[(0,o._)("div",g,(0,r.zw)(t.title),1),(0,o._)("div",w,(0,r.zw)(t.artist),1)],8,p)))),128))],512),m,f],64)}var v=e(1114),S=e(4198),y=e(6460),C=e(2990),M=e(2034),O={name:"HelloWorld",props:{msg:String},data:function(){return{controlsSpeedMultiplier:1,bounceSpeedMultiplier:.9,bounceCerditoDelay:0,currentSong:void 0,cerditoAlreadyBouncing:!1,songs:[{id:0,title:"Felicidad",artist:"Gondwana",src:e(3859),speedMultiplier:.84,delay:14e3,lightColor:2716844,ambientColor:4210752},{id:1,title:"Mi Amor",artist:"Dread Mar I",src:e(8701),speedMultiplier:.72,delay:56e3,lightColor:1786331,ambientColor:3818829},{id:2,title:"Mi Princesa",artist:"Gondwana",src:e(2640),speedMultiplier:.69,delay:36e3,lightColor:2716844,ambientColor:4210752},{id:3,title:"Tus Ojos",artist:"Los Cafres",src:e(833),speedMultiplier:.68,delay:0,lightColor:14666343,ambientColor:7367512},{id:4,title:"Me Quedo Contigo (Si Me Das a Elegir) ",artist:"Manu Chao & Radio Bemba",src:e(409),speedMultiplier:.7,delay:7600,lightColor:14032896,ambientColor:8546403}]}},created:function(){this.init()},mounted:function(){this.$refs.canvas.appendChild(this.renderer.domElement),this.lateInit(),this.animate()},watch:{currentSong:function(t,i){console.log("song changed",t,i),this.$refs.video.classList.add("show"),this.$refs.video.load(),this.$refs.video.play(),this.$refs.songName.classList.add("show"),setTimeout((()=>{this.$refs.songName.classList.remove("show")}),1e4),this.$refs.songs.classList.remove("show"),this.$refs.canvas.classList.remove("has-bg"),(0===t||t>0)&&(this.bounceSpeedMultiplier=this.songs[t].speedMultiplier,this.bounceCerditoDelay=this.songs[t].delay,this.lightBg.color.setHex(this.songs[t].lightColor),this.lightAmbient.color.setHex(this.songs[t].ambientColor),this.cerditoAlreadyBouncing||(this.cerditoAlreadyBouncing=!0,this.bounceCerdito()))}},methods:{init(){this.scene=new v.xsS,this.camera=new v.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new v.CP7({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!1}),this.renderer.setClearColor(0,0),this.postprocessingInit(),this.light=new v.Ox3("hsl(0, 100%, 100%)",.75),this.lightBg=new v.Ox3("#AAAA00",1),this.light3=new v.Ox3("#FFFFFF",.5),this.lightAmbient=new v.Mig(4210752),this.geometry=new v.DvJ(1,1,1),this.material=new v.Wid({side:v.Wl3,color:"hsl(0, 100%, 50%)",wireframe:!1}),this.loadObject(),this.controls=[]},postprocessingInit:function(){this.composer=new y.xC(this.renderer),this.composer.addPass(new y.CD(this.scene,this.camera)),this.composer.addPass(new y.H5(this.camera,new y.rk({luminanceThreshold:.01,radius:10,intensity:.1})));const t=new y.fY;t.preset=y.F9.ULTRA,t.edgeDetectionMode=y.HN.COLOR,this.composer.addPass(new y.H5(this.camera,t))},lateInit:function(){this.scene.add(this.camera),this.scene.add(this.light),this.scene.add(this.lightBg),this.scene.add(this.light3),this.scene.add(this.lightAmbient),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.light.position.set(0,0,10),this.lightBg.position.set(3,1,-5),this.light3.position.set(-1,-10,-1),this.camera.position.z=2,this.controls=new C.Z(this.camera,this.renderer.domElement),this.controls.rotateSpeed=4,this.controls.zoomSpeed=5,this.controls.panSpeed=.8,this.controls.noZoom=!1,this.controls.noPan=!1,this.controls.staticMoving=!0,this.controls.dynamicDampingFactor=.3;const t=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",t,!1)},loadObject:async function(){const t=new S.E;this.cerdito=new v.Tme,await t.loadAsync(e(969),(function(){})).then((t=>{this.cerdito=t.scene,this.cerdito.scale.set(.4,.4,.4),this.cerdito.position.x=.5,this.cerdito.rotation.y=-.15,this.scene.add(this.cerdito)}))},bounceCerdito:async function(){const t=8e3*this.bounceSpeedMultiplier,i={x:"-0.1"},e={x:"+0.1"},n=new M.kX(this.cerdito.position).to(i,1e3*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut),o=new M.kX(this.cerdito.position).to(e,1e3*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut);n.chain(o),o.chain(n),n.start(),this.bounceCerditoDelay>0&&(this.cerdito.position.y=0,this.cerdito.rotation.y=-.15,this.cerdito.rotation.z=0);let s=0,r=!1;while(!r)s>=this.bounceCerditoDelay?r=!0:(await new Promise((t=>setTimeout(t,1e3))),s+=1e3);this.bounceCerditoDelay=0;const a={x:"-1"},c={x:"+1"},d=new M.kX(this.cerdito.position).to(c,4e3*this.bounceSpeedMultiplier).easing(M.oY.Quadratic.InOut),l=new M.kX(this.cerdito.position).to(a,4e3*this.bounceSpeedMultiplier).easing(M.oY.Quadratic.InOut);l.chain(d),d.chain(l),l.start();const h={y:"+0.7"},u={y:"-0.7"},p=new M.kX(this.cerdito.rotation).to(h,1e3*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut),g=new M.kX(this.cerdito.rotation).to(u,1e3*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut);p.chain(g),g.chain(p),p.start();const w={y:"+0.07"},m={y:"-0.07"},f=new M.kX(this.cerdito.position).to(w,500*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut),b=new M.kX(this.cerdito.position).to(m,500*this.bounceSpeedMultiplier).easing(M.oY.Sinusoidal.InOut);f.chain(b),b.chain(f),f.start();const v={z:"+1"},S={z:"-1"},y=new M.kX(this.cerdito.rotation).to(v,1e3*this.bounceSpeedMultiplier).easing(M.oY.Quadratic.InOut),C=new M.kX(this.cerdito.rotation).to(S,1e3*this.bounceSpeedMultiplier).easing(M.oY.Quadratic.InOut);this.cerdito.rotation.z=-.5,y.chain(C),C.chain(y),y.start();const O={x:"+0.04",y:"-0.05"},x={x:"-0.04",y:"+0.05"},k=new M.kX(this.cerdito.scale).to(O,500*this.bounceSpeedMultiplier).easing(M.oY.Linear.None),_=new M.kX(this.cerdito.scale).to(x,500*this.bounceSpeedMultiplier).easing(M.oY.Linear.None);this.cerdito.scale.x=.4,this.cerdito.scale.y=.4,_.chain(k),k.chain(_),_.start(),setTimeout((()=>{n.stop(),o.stop(),l.stop(),d.stop(),p.stop(),g.stop(),f.stop(),b.stop(),y.stop(),C.stop(),_.stop(),k.stop(),this.bounceCerdito()}),t)},setSong:function(t){this.currentSong=t},animate:function(t){requestAnimationFrame(this.animate),this.composer.render(this.scene,this.camera),this.cerdito&&M.Vx(t),this.controls.update()}}},x=e(89);const k=(0,x.Z)(O,[["render",b],["__scopeId","data-v-4e85f791"]]);var _=k,D={name:"App",components:{Scene:_}};const I=(0,x.Z)(D,[["render",s]]);var Y=I;(0,n.ri)(Y).mount("#app")},969:function(t,i,e){t.exports=e.p+"3b996eb398f8afc4.glb"},3859:function(t,i,e){t.exports=e.p+"media/song1.25d1aa8b.mp4"},8701:function(t,i,e){t.exports=e.p+"media/song2.526a7892.mp4"},2640:function(t,i,e){t.exports=e.p+"media/song3.db13c2f2.mp4"},833:function(t,i,e){t.exports=e.p+"media/song4.d1c85100.mp4"},409:function(t,i,e){t.exports=e.p+"media/song5.9ad7450b.mp4"}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var s=i[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(i,n,o,s){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],s=t[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<r&&(r=s));if(a){t.splice(l--,1);var d=o();void 0!==d&&(i=d)}}return i}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,o,s]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.p="/cerdito_magico_pollitos/dist_rasta/"}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var o,s,r=n[0],a=n[1],c=n[2],d=0;if(r.some((function(i){return 0!==t[i]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var l=c(e)}for(i&&i(n);d<r.length;d++)s=r[d],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},n=self["webpackChunkcerdito_magico_rasta"]=self["webpackChunkcerdito_magico_rasta"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(7676)}));n=e.O(n)})();
//# sourceMappingURL=app.91601883.js.map