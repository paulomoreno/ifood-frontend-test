(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(376)},187:function(e,t,a){},315:function(e,t,a){},335:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(16),c=a.n(o),i=a(71),s=a.n(i),u=a(29),m=a.n(u),p=a(39),f=a.n(p),d=a(18),E=a.n(d),y=a(14),v=a(8),h=a(154),g=a.n(h),b=a(96),O=a.n(b),_={endpoint:"https://accounts.spotify.com/authorize",clientId:"525daf8037874b95b21b21fda6399d0e",redirectUri:"https://paulomoreno.github.io/ifood-frontend-test/",scopes:[]},T=function(){return"".concat(_.endpoint,"?client_id=").concat(_.clientId,"&redirect_uri=").concat(_.redirectUri,"&scope=").concat(_.scopes.join("%20"),"&response_type=token&show_dialog=true")},S=function(){window.location.assign(T())},I=function(){return l.a.createElement("div",{className:"contentLogin h-100 align-items-center justify-content-center text-white"},l.a.createElement(g.a,{variant:"dark",className:"loginWrapper",role:"main","aria-labelledby":"loginJTTitle"},l.a.createElement("h1",{id:"loginJTTitle"},"Bem Vindo ao Spotifood"),l.a.createElement("p",null,"Entre usando sua conta do Spotify e aproveite uma nova maneira de visualizar suas playlists!"),l.a.createElement("p",null,l.a.createElement(O.a,{size:"lg",variant:"success",href:T()},"Entre com Spotify"))))},N=a(54),L=a.n(N),k=a(167),j=a.n(k),w=a(103),D=a.n(w),F=a(70),A=a.n(F),x=a(13),C=a(20),P=a.n(C),R=a(68),U=a.n(R),G=a(168),Y=a(382),q=a(381),B=a(156),W=a.n(B),z=(a(187),function(e){return l.a.createElement("div",{className:"loaderWrapper"},l.a.createElement(W.a,Object.assign({animation:"border",role:"status"},e),l.a.createElement("span",{className:"sr-only"},"Carregando...")))}),V=a(67),J=a.n(V),K=a(157),M=a.n(K),Q={number:function(e){return e&&Number.isNaN(Number(e))?"Deve ser um n\xfamero":void 0},minValue:function(e){return function(t){return t&&t<e?"Deve ser pelo menos ".concat(e):void 0}},maxValue:function(e){return function(t){return t&&t>e?"N\xe3o pode ser maior que ".concat(e):void 0}}},H=a(99),X=a.n(H),Z=a(158),$=a(159),ee=a.n($),te=a(160),ae=a.n(te),ne=a(161),re=a(383),le={access_token:null},oe={loading:!1,user:{}},ce={loading:!1,defs:[],filters_query:{},local_filters_query:{}},ie={loading:!1,response:{}},se=Object(v.c)({toastr:d.reducer,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_TOKEN":return Object(x.a)({},e,{access_token:null});case"GET_TOKEN":return Object(x.a)({},e,{access_token:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(x.a)({},e,{user:t.payload});case"LOADING_USER":return Object(x.a)({},e,{loading:!e.loading});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_FILTERS_DEFS":return Object(x.a)({},e,{defs:t.payload});case"LOADING_FILTERS":return Object(x.a)({},e,{loading:!e.loading});case"UPDATE_FILTERS_QUERY":return Object(x.a)({},e,{filters_query:t.payload});case"UPDATE_LOCAL_FILTERS_QUERY":return Object(x.a)({},e,{local_filters_query:t.payload});default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYLISTS":return Object(x.a)({},e,{response:t.payload});case"LOADING_PLAYLISTS":return Object(x.a)({},e,{loading:!e.loading});default:return e}},form:re.a}),ue=function(){return function(e){localStorage.removeItem("access_token"),e({type:"CLEAR_TOKEN"})}},me=function(){return function(e){var t=window.location.hash.substring(1).split("&").reduce(function(e,t){var a=e;if(t){var n=t.split("=");a[n[0]]=decodeURIComponent(n[1])}return a},{});window.location.hash="",t.access_token&&localStorage.setItem("access_token",t.access_token),e({type:"GET_TOKEN",payload:localStorage.getItem("access_token")})}},pe="https://api.spotify.com/v1",fe=function(){n.dispatch(ue())},de=function(){var e=Object(Z.a)(X.a.mark(function e(){var t,a,r,l,o=arguments;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},a=t.method?t.method:"get",r=t.url?t.url:pe,e.prev=3,e.next=6,J()({method:a,url:r,headers:Object(x.a)({Authorization:"Bearer ".concat(n.getState().auth.access_token)},t.headers),data:t.data,params:t.params});case 6:l=e.sent,e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(3),e.t0.response&&401===e.t0.response.status&&d.toastr.confirm("Sess\xe3o expirada. Deseja entrar novamente?",{onOk:S,onCancel:fe}),e.t0;case 13:return e.abrupt("return",l);case 14:case"end":return e.stop()}},e,null,[[3,9]])}));return function(){return e.apply(this,arguments)}}(),Ee=function(e,t){try{return e.response.data.error.message}catch(a){return t}},ye=function(){return function(e,t){e({type:"LOADING_PLAYLISTS"}),de({method:"get",url:"".concat(pe,"/browse/featured-playlists"),params:t().filters.filters_query}).then(function(t){e([{type:"PLAYLISTS",payload:t.data.playlists},{type:"LOADING_PLAYLISTS"}])}).catch(function(t){var a=Ee(t,"Erro ao carregar lista de playlists");console.error(a,t),d.toastr.error("Error",a),e([{type:"PLAYLISTS",payload:{}},{type:"LOADING_PLAYLISTS"}])})}},ve=function(){return function(e){e({type:"LOADING_FILTERS"}),J()("https://www.mocky.io/v2/5a25fade2e0000213aa90776").then(function(t){var a,n=t.data.filters;e([{type:"LOAD_FILTERS_DEFS",payload:(a=n,a.map(function(e){var t=Object(x.a)({},e,{type:"input",validate:[]});if(t.values&&(t.type="select-multi",t.values.unshift({key:"",value:""})),t.validation){var a=t.validation;"INTEGER"===a.primitiveType&&(t.validate.push(Q.number),t.inputType="number"),a.min&&t.validate.push(Q.minValue(a.min)),a.max&&t.validate.push(Q.maxValue(a.max)),a.entityType&&(t.entityType=a.entityType),a.pattern&&(t.pattern=a.pattern)}return t}))},{type:"LOADING_FILTERS"}])}).catch(function(){d.toastr.error("Error","Erro ao carregar filtros"),e([{type:"LOAD_FILTERS_DEFS",payload:{}},{type:"LOADING_FILTERS"}])})}},he=function(e,t){return e.filter(function(e){return e.id===t})},ge=(a(270),function(e){var t=e.input;return l.a.createElement("div",null,l.a.createElement(G.a,{id:t.id,onChange:t.onChange,showTimeSelect:!0,timeIntervals:1,className:"form-control",dateFormat:"dd/MM/yyyy h:mm aa",selected:t.value?new Date(t.value):null}))}),be=function(e){var t=e.input,a=e.label,n=e.meta,r=e.type,o=e.min,c=e.max,i=e.values,s=e.inputType,u=e.entityType,m=e.idPrefix,p=r;"select-multi"===r&&(p="select"),"DATE_TIME"===u&&(p=ge);var f=Object(x.a)({},t,{id:"".concat(m,"-").concat(t.name)});return l.a.createElement(P.a.Group,{controlId:f.id,className:"w-100"},l.a.createElement(P.a.Label,null,a),l.a.createElement(P.a.Control,{as:p,name:f.name,type:s,min:o,max:c,value:f.value,onChange:f.onChange,isInvalid:n.error,meta:n,input:f},i&&i.map(function(e){return l.a.createElement("option",{key:"filter_option_".concat(f.name,"_").concat(e.value),value:e.value},e.name)})),n.error&&l.a.createElement(U.a,{variant:"danger"},n.error))};be.defaultProps={min:null,max:null,values:null,entityType:"",inputType:null};var Oe=function(e){var t=e.filtersDefs,a=e.getFiltersDefsConnected,n=e.loading,o=e.idPrefix;return Object(r.useEffect)(function(){a()},[a]),l.a.createElement(P.a,{className:"ml-3 mr-3 filtersForm"},n&&l.a.createElement(z,null),t&&t.map(function(e){return l.a.createElement(P.a.Row,{key:"filters_api_".concat(e.id)},l.a.createElement(Y.a,Object.assign({},e,{label:e.name,name:e.id,idPrefix:o,inputType:e.inputType,component:be})))}))};Oe.defaultProps={filtersDefs:[],loading:!0},Oe=Object(q.a)({form:"filtersForm",onChange:function(e,t){t(function(e,t){var a=t(),n=a.form.filtersForm,r=a.filters.defs,l=n.values?n.values:{};if(n.syncErrors&&Object.keys(n.syncErrors).forEach(function(e){return delete l[e]}),l.timestamp)try{var o=he(r,"timestamp")[0].pattern.replace("yyyy","YYYY").replace("dd","DD");l.timestamp=M()(l.timestamp).format(o)}catch(c){console.error("Error while parsing timestamp value.",c),delete l.timestamp}return e([{type:"UPDATE_FILTERS_QUERY",payload:l},ye()])})}})(Oe);var _e=Object(y.connect)(function(e){return{loading:e.filters.loading,filtersDefs:e.filters.defs}},function(e){return Object(v.b)({getFiltersDefsConnected:ve},e)})(Oe),Te=(a(315),function(e){var t=e.idPrefix,a="".concat(t,"-title");return l.a.createElement(f.a,{fluid:!0,role:"form","aria-labelledby":a},l.a.createElement("h1",{className:"mt-3",id:a},"Filters"),l.a.createElement(_e,{idPrefix:t}))}),Se=a(102),Ie=a.n(Se),Ne=a(163),Le=a.n(Ne),ke=function(e){var t=e.input,a=e.meta;return l.a.createElement(Ie.a,null,l.a.createElement(P.a.Group,{className:"customSearchInput",controlId:"navForm-".concat(t.name)},l.a.createElement(P.a.Label,{className:"mr-2"},"Busca: "),l.a.createElement(P.a.Control,Object.assign({},t,{type:"text",meta:a}))),l.a.createElement(Ie.a.Append,null,l.a.createElement(Le.a,{fontSize:"2rem",color:"#fff"})))},je=Object(q.a)({form:"localSearchForm"})(function(){return l.a.createElement(P.a,{inline:!0,className:"justify-content-center mr-md-5"},l.a.createElement(Y.a,{label:"Nome",name:"name",id:"name",inputType:"input",component:ke}))}),we=function(){return function(e){e({type:"USER",payload:null})}},De=function(){return function(e){e({type:"LOADING_USER"}),de({method:"get",url:"".concat(pe,"/me")}).then(function(t){e([{type:"USER",payload:t.data},{type:"LOADING_USER"}])}).catch(function(t){var a=Ee(t,"Erro ao carregar as informa\xe7\xf5es do usu\xe1rio");console.error(a,t),d.toastr.error("Error",a),e([{type:"USER",payload:{}},{type:"LOADING_USER"}])})}},Fe=(a(335),function(e){var t=e.token,a=e.user,n=e.getUserConnect,o=e.logout,c=e.clearUserConnect;Object(r.useEffect)(function(){t&&n()},[t,n]);return l.a.createElement(L.a,{fixed:"top",collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},l.a.createElement(L.a.Brand,null,"Spotifood"),t&&a&&l.a.createElement(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),t&&a&&l.a.createElement(L.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end text-white"},l.a.createElement(j.a,null,l.a.createElement(je,null),l.a.createElement(D.a,{className:"loggedInUserDropdown",title:l.a.createElement("span",null,a.images&&a.images.length>0&&l.a.createElement(A.a,{alt:"Logged In Profile Picture",className:"userImage",src:a.images[0].url,roundedCircle:!0}),l.a.createElement("b",null,a.display_name)),id:"collasible-nav-dropdown"},l.a.createElement(D.a.Item,{onClick:function(e){e.preventDefault(),c(),o&&o()}},"Sair")),l.a.createElement("div",{className:"filtersWrapperNav"},l.a.createElement(Te,{idPrefix:"navFilterForm"})))))});Fe.defaultProps={token:"",user:{}};var Ae=Object(y.connect)(function(e){return{user:e.user.user,token:e.auth.access_token}},function(e){return Object(v.b)({getUserConnect:De,clearUserConnect:we},e)})(Fe),xe=function(e){var t=e.filtersForm,a=e.localSearchForm,n=e.filtersDefs,r=[];return t&&t.values&&Object.keys(t.values).forEach(function(e){var a=he(n,e)[0],l=t.values[e];if(a.validation&&"DATE_TIME"===a.validation.entityType)try{l=new Date(l).toLocaleString()}catch(o){}r.push({key:e,name:he(n,e)[0].name,value:l})}),a&&a.values&&a.values.name&&r.push({key:"name",name:"Nome",value:a.values.name}),l.a.createElement("div",null,r.map(function(e,t){return l.a.createElement(U.a,{key:e.key,variant:"info ".concat(t>0&&"ml-4")},"".concat(e.name,": ").concat(e.value))}))};xe.defaultProps={filtersForm:{},localSearchForm:{},filtersDefs:[]};var Ce,Pe=Object(y.connect)(function(e){return{filtersForm:e.form.filtersForm,localSearchForm:e.form.localSearchForm,filtersDefs:e.filters.defs}})(xe),Re=(a(373),function(e){var t=e.playlist;return l.a.createElement("div",{className:"playlist text-center"},t.images&&t.images.length>0&&l.a.createElement(A.a,{alt:'"'.concat(t.name,'" cover image'),src:t.images[0].url,rounded:!0}),l.a.createElement("h2",{className:"mt-2 mb-2"},t.name),l.a.createElement("p",null,l.a.createElement("b",null,t.tracks&&t.tracks.total)," faixas - Por ",l.a.createElement("b",null,t.owner&&t.owner.display_name)))}),Ue=function(e){var t=e.playlists,a=e.getPlaylistsConnect,n=e.loading,o=e.localSearchForm;Object(r.useEffect)(function(){a(),Ce&&clearInterval(Ce),Ce=setInterval(function(){a()},3e4)},[a]);var c=function(e,t){if(!e||!e.items)return[];if(!t.values||!t.values.name)return e.items;var a=t.values.name.toLowerCase();return e.items.filter(function(e){return e.name.toLowerCase().indexOf(a)>-1})}(t,o);return l.a.createElement(f.a,{fluid:!0,className:"playlistsWrapper",role:"main","aria-labelledby":"playlistsTitle"},l.a.createElement("h1",{className:"mt-3",id:"playlistsTitle"},"Playlists "),l.a.createElement(Pe,null),l.a.createElement(s.a,null,n&&l.a.createElement(z,null),!n&&c&&c.map(function(e){return l.a.createElement(m.a,{key:"playlist_wrapper_".concat(e.id)},l.a.createElement(Re,{playlist:e}))}),(!c||0===c.length)&&!n&&l.a.createElement(m.a,{className:"h-100 justify-content-center align-items-center d-flex"},l.a.createElement("p",null,"Nenhuma playlist dispon\xedvel"))))};Ue.defaultProps={playlists:{},loading:!0,localSearchForm:{}};var Ge=Object(y.connect)(function(e){return{loading:e.playlists.loading,playlists:e.playlists.response,localSearchForm:e.form.localSearchForm,token:e.auth.access_token}},function(e){return Object(v.b)({getPlaylistsConnect:ye},e)})(Ue),Ye=(a(374),a(375),function(e){var t=e.clearTokenConnect,a=e.getTokenConnect,n=e.accessToken;Object(r.useEffect)(function(){a()},[a]);return l.a.createElement("div",{className:"App h-100"},l.a.createElement("div",{className:"body-bkg"}),l.a.createElement(Ae,{logout:function(){t()}}),l.a.createElement(E.a,{timeOut:4e3,newestOnTop:!1,preventDuplicates:!0,position:"top-left",transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0,closeOnToastrClick:!0}),!n&&l.a.createElement(I,null),n&&l.a.createElement(f.a,{fluid:!0,className:"contentWrapper h-100 text-white"},l.a.createElement(s.a,{className:"align-items-stretch h-100"},l.a.createElement(m.a,{style:{flexGrow:1}},l.a.createElement(Ge,null)),l.a.createElement(m.a,{md:"5",lg:"4",xl:"3",className:"filtersWrapper d-none d-md-flex"},l.a.createElement(Te,{idPrefix:"sideFilterForm"})))))});Ye.defaultProps={accessToken:null};var qe,Be=Object(y.connect)(function(e){return{accessToken:e.auth.access_token}},function(e){return Object(v.b)({clearTokenConnect:ue,getTokenConnect:me},e)})(Ye),We=(qe={},n=Object(v.d)(se,qe,Object(v.a)(ne.a,ae.a,ee.a)));c.a.render(l.a.createElement(y.Provider,{store:We},l.a.createElement(Be,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.84815998.chunk.js.map