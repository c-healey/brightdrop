(this["webpackJsonpbrightdrop-challenge"]=this["webpackJsonpbrightdrop-challenge"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),l=n(11),o=n(5),s=n(9),g="SIGN_IN",h="SIGN_OUT",d={isSignedIn:null,userId:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{isSignedIn:!0,userId:t.payload});case h:return Object(s.a)(Object(s.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},b=Object(o.b)({auth:u}),j=n(1),p=function(e){return Object(j.jsx)(l.a,{store:Object(o.c)(b,{}),children:e.children})},O=(n(31),n(6)),v=n(7),f=n(13),m=n(12),y=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",(function(t){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"1036837016251-dvqb16dmo47obs19s1cpoo2kai7qg04t.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(j.jsxs)("button",{className:"ui red google button",onClick:this.onSignOutClick,children:[Object(j.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(j.jsxs)("button",{className:"ui red google button",onClick:this.onSignInClick,children:[Object(j.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.renderAuthButton()})}}]),n}(c.a.Component),k=Object(l.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:g,payload:e}},signOut:function(){return{type:h}}})(y),w=(n(32),function(){return Object(j.jsxs)("div",{className:"ui huge menu top  fixed inverted stackable bd_nav",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("img",{src:"/brightdrop/logo.svg",alt:"BrightDrop"})}),Object(j.jsx)("div",{className:"right menu",children:Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(k,{})})})]})}),I=n(19),L=n(3),x=n(2),C=n(4),_=n(8),S=n.n(_),N={NorthEast:{latlng:[42.32504712815144,-83.04840087890626],fleet:[{name:"Major Tom",id:1,tripLog:[{latlng:[42.32504712815144,-83.04840087890626],charge:100},{latlng:[42.36108082586396,-83.0229949951172],charge:95},{latlng:[42.40013627993724,-82.99827575683595],charge:90},{latlng:[42.430552260619564,-82.97836303710939],charge:85},{latlng:[42.445754718858524,-82.96737670898439],charge:80},{latlng:[42.44474133638783,-83.023681640625],charge:75},{latlng:[42.44372793752476,-83.10401916503908],charge:70},{latlng:[42.44524802967223,-83.15895080566408],charge:65},{latlng:[42.44220780849451,-83.21319580078126],charge:60},{latlng:[42.44271452226932,-83.2592010498047],charge:55},{latlng:[42.44068764258161,-83.28872680664064],charge:50},{latlng:[42.43866069732511,-83.32168579101562],charge:45},{latlng:[42.42447024463857,-83.27980041503906],charge:40},{latlng:[42.40824865050679,-83.2427215576172],charge:35},{latlng:[42.397093870535514,-83.2159423828125],charge:30},{latlng:[42.386951440524854,-83.19053649902345],charge:25},{latlng:[42.376300125104024,-83.16375732421876],charge:20},{latlng:[42.36209556053167,-83.13011169433594],charge:15},{latlng:[42.3529623585569,-83.1053924560547],charge:10},{latlng:[42.33875251709215,-83.06900024414064],charge:5}]},{name:"Ground Control",id:1,tripLog:[{charge:100,latlng:[42.16340342422403,-83.25439453125001]},{charge:95,latlng:[41.78769700539063,-83.32031250000001]},{charge:90,latlng:[41.393294288784894,-83.58398437500001]},{charge:85,latlng:[40.91351257612758,-83.64990234375001]},{charge:80,latlng:[40.68063802521456,-83.21044921875001]},{charge:75,latlng:[40.36328834091583,-83.03466796875001]},{charge:70,latlng:[40.01078714046552,-83.07861328125001]},{charge:65,latlng:[39.87601941962116,-83.03466796875001]},{charge:60,latlng:[39.85915479295669,-83.34228515625]},{charge:55,latlng:[39.825413103424786,-84.08935546875001]},{charge:50,latlng:[39.791654835253425,-84.79248046875001]},{charge:45,latlng:[39.791654835253425,-85.49560546875001]},{charge:40,latlng:[39.791654835253425,-86.15478515625001]}]},{name:"Planet Earth",id:4,tripLog:[{charge:100,latlng:[41.81840820614331,-83.43017578125001]},{charge:95,latlng:[42.26917949243506,-83.13354492187501]},{charge:90,latlng:[42.21224516288584,-83.49609375000001]},{charge:85,latlng:[42.25291778330197,-84.03442382812501]},{charge:80,latlng:[42.261049162113856,-84.67163085937501]},{charge:75,latlng:[42.26917949243506,-85.2099609375]},{charge:70,latlng:[42.19596877629178,-85.78125]},{charge:65,latlng:[42.13896840458089,-86.33056640625]},{charge:60,latlng:[41.83682786072714,-86.59423828125001]},{charge:55,latlng:[41.64828831259535,-86.79199218750001]},{charge:50,latlng:[41.5579215778042,-87.09960937500001]},{charge:45,latlng:[41.566141964768384,-87.40722656250001]},{charge:40,latlng:[41.73033005046653,-87.65991210937501]},{charge:25,latlng:[41.792816561051815,-87.63107299804689]},{charge:20,latlng:[41.86649282301996,-87.64892578125]},{charge:15,latlng:[41.87569639323103,-87.62008666992189]}]}]},NorthWest:{latlng:[.68932225997044,-111.33544921875001],fleet:[]},SouthEast:{latlng:[797408767572485,-90.41748046875001],fleet:[]},SouthWest:{latlng:[77771580360469,-110.830078125],fleet:[]}},P=function(){function e(t){Object(O.a)(this,e),this.tripLog=t.tripLog,this.name=t.name,this.id=t.id,this.class="".concat(this.name,"-").concat(this.id).replace(/\s/g,"-"),this._marker={},this.timer=null,this._setCurrentTripDetail(0)}return Object(v.a)(e,[{key:"_setCurrentTripDetail",value:function(e){console.log("set trip detail",e,this.charge,this.tripLog),this.routeIndex=e,this.charge=this.tripLog[e].charge,this.latlng=this.tripLog[e].latlng,this.chargeLevelClass=this._getChargeLevelClass(),this.gradient="linear-gradient(to right,\n        #05c3dd ".concat(Math.floor(this.charge),"%, #000000 10%, red ").concat(Math.floor(100-this.charge),"% )"),this.description=this.getDescription()}},{key:"getDescription",value:function(){return'<div class="popup-veh-content '.concat(this._getChargeLevelClass(),'" >').concat(this.name," <br/> Charge Level ").concat(this.charge," %</div>")}},{key:"_getChargeLevelClass",value:function(){var e=this.charge;return"".concat(e>75?"charged":e>25?"charge-warning":"charge-alert")}}]),e}(),M=(n(33),Object(C.a)("map")),T=Object(C.a)("mapEvent"),A=Object(C.a)("mapZoomLevel"),E=Object(C.a)("marker"),U=Object(C.a)("coords"),D=Object(C.a)("interval"),q=Object(C.a)("region"),W=Object(C.a)("fleet"),F=Object(C.a)("fleetVehicles"),G=Object(C.a)("fleetListEl"),V=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),Object.defineProperty(Object(L.a)(e),M,{writable:!0,value:void 0}),Object.defineProperty(Object(L.a)(e),T,{writable:!0,value:void 0}),Object.defineProperty(Object(L.a)(e),A,{writable:!0,value:6}),Object.defineProperty(Object(L.a)(e),E,{writable:!0,value:void 0}),Object.defineProperty(Object(L.a)(e),U,{writable:!0,value:void 0}),Object.defineProperty(Object(L.a)(e),D,{writable:!0,value:3e3}),Object.defineProperty(Object(L.a)(e),q,{writable:!0,value:N.NorthEast}),Object.defineProperty(Object(L.a)(e),W,{writable:!0,value:Object(x.a)(Object(L.a)(e),q)[q].fleet}),Object.defineProperty(Object(L.a)(e),F,{writable:!0,value:[]}),Object.defineProperty(Object(L.a)(e),G,{writable:!0,value:void 0}),e._loadMap=function(){Object(x.a)(Object(L.a)(e),U)[U]=Object(x.a)(Object(L.a)(e),q)[q].latlng,Object(x.a)(Object(L.a)(e),M)[M]=S.a.map("map").setView(Object(x.a)(Object(L.a)(e),U)[U],Object(x.a)(Object(L.a)(e),A)[A]),S.a.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(Object(x.a)(Object(L.a)(e),M)[M]),Object(x.a)(Object(L.a)(e),M)[M].on("click",(function(t){var n=t.latlng,a=n.lat,c=n.lng;e.renderMarker([a,c])})),e._renderFleet(Object(x.a)(Object(L.a)(e),q)[q])},e.LeafIcon=S.a.Icon.extend({options:{shadowUrl:"/brightdrop/logo-pin-shadow.png",iconSize:[38,38],shadowSize:[38,38],iconAnchor:[0,38],shadowAnchor:[-4,34],popupAnchor:[19,-38]}}),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(x.a)(this,G)[G]=document.querySelector(".fleet-list-container"),window.addEventListener("load",(function(t){e._getPosition()}))}},{key:"_getPosition",value:function(){Object(x.a)(this,M)[M]&&Object(x.a)(this,M)[M].remove(),this._loadMap()}},{key:"_renderFleet",value:function(){var e=this;Object(x.a)(this,W)[W].forEach((function(t){var n=new P(t);Object(x.a)(e,F)[F]=[].concat(Object(I.a)(Object(x.a)(e,F)[F]),[n]),e._renderFleetUpdates(n)}))}},{key:"renderMarker",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(x.a)(this,U)[U]=e,console.log("renderMarker");var a=new this.LeafIcon({iconUrl:"/brightdrop/logo-pin-blue.png"});return Object(x.a)(this,E)[E]=S.a.marker(Object(x.a)(this,U)[U],{icon:a}).addTo(Object(x.a)(this,M)[M]).bindPopup(S.a.popup({maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:"".concat(n)})).setPopupContent(t.length?t:"POP UP".concat(Object(x.a)(this,U)[U])).openPopup(),Object(x.a)(this,E)[E]}},{key:"_renderListItem",value:function(e){return'\n        <div class="item sidebar-list-item " style=\'background: '.concat(e.gradient,'\'>\n        <div class="content sidebar-list-content">\n          ').concat(e.name," \n          <span class='").concat(e.class,"'>Charge = ").concat(e.charge," %</span>\n        </div>\n      </div>\n      ")}},{key:"renderVehicleToList",value:function(e){var t="\n    <div class='".concat(e.class,"'>\n    ").concat(this._renderListItem(e),"\n      </div>\n    </div>\n    ");Object(x.a)(this,G)[G].insertAdjacentHTML("beforeend",t)}},{key:"_renderUpdateToList",value:function(e){document.querySelector(".".concat(e.class)).innerHTML=this._renderListItem(e)}},{key:"render",value:function(){return Object(j.jsx)("div",{})}},{key:"_renderFleetUpdates",value:function(e){var t=this,n=setInterval((function(){var a=e.routeIndex,c=e.tripLog,r=e.latlng;0===a?(e._marker=t.renderMarker(r,e.description),t.renderVehicleToList(e)):(e._marker.setLatLng(r),e._marker.setPopupContent(e.description),t._renderUpdateToList(e)),a>=c.length-1?clearInterval(n):(a+=1,e._setCurrentTripDetail(a))}),Object(x.a)(this,D)[D])}}]),n}(c.a.Component),z=function(){return Object(j.jsxs)("div",{className:"ui ",children:[Object(j.jsx)(w,{}),Object(j.jsxs)("div",{className:"ui mobile reversed stackable grid bd_content",children:[Object(j.jsx)("div",{className:"ui four wide column black inverted",children:Object(j.jsxs)("div",{className:"ui segment padded black inverted",children:[Object(j.jsx)("h2",{children:"Mid West Region"}),Object(j.jsx)("div",{className:"ui inverted relaxed divided list fleet-list-container"})]})}),Object(j.jsx)("div",{className:"ui twelve wide column blue inverted",id:"map",children:Object(j.jsx)(V,{})})]})]})};i.a.render(Object(j.jsx)(p,{children:Object(j.jsx)(z,{})}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.088cf2a6.chunk.js.map