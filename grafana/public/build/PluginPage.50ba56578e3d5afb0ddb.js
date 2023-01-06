"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2417],{63498:(e,n,t)=>{t.d(n,{Z:()=>l});t(68404);var a,s=t(99500),i=t(8006),r=t(45916);const l=function(e){let{dashboards:n,onImport:t,onRemove:l}=e;function o(e){return e.revision!==e.importedRevision?"Update":"Re-import"}return(0,r.jsx)("table",{className:"filter-table",children:(0,r.jsx)("tbody",{children:n.map(((e,n)=>(0,r.jsxs)("tr",{children:[a||(a=(0,r.jsx)("td",{className:"width-1",children:(0,r.jsx)(s.J,{name:"apps"})})),(0,r.jsx)("td",{children:e.imported?(0,r.jsx)("a",{href:e.importedUrl,children:e.title}):(0,r.jsx)("span",{children:e.title})}),(0,r.jsxs)("td",{style:{textAlign:"right"},children:[e.imported?(0,r.jsx)(i.zx,{variant:"secondary",size:"sm",onClick:()=>t(e,!0),children:o(e)}):(0,r.jsx)(i.zx,{variant:"secondary",size:"sm",onClick:()=>t(e,!1),children:"Import"}),e.imported&&(0,r.jsx)(i.zx,{"aria-label":"Delete dashboard",icon:"trash-alt",variant:"destructive",size:"sm",onClick:()=>l(e)})]})]},`${e.dashboardId}-${n}`)))})})}},14662:(e,n,t)=>{t.d(n,{SX:()=>r,IF:()=>v,oZ:()=>c,xh:()=>f});t(68404);var a=t(15546),s=t(64313),i=t(45916);function r(e){let{error:n}=e;const t=function(e){switch(e){case a.w2.modifiedSignature:return"Plugin disabled due to modified content";case a.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case a.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return"Plugin disabled due to unknown error"+(e?`: ${e}`:"")}}(n);return(0,i.jsx)(s.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:t})}var l=t(16755),o=t(52423);const d=e=>o.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,l.wW)(d);return(0,i.jsx)(s.C,{text:"Installed",color:"orange",className:e})}var u,g=t(72677),h=t(54761),p=t(38437),m=t(8006);function v(e){let{plugin:n}=e;const t=(0,l.wW)(d);return(0,g.v)("enterprise.plugins")?u||(u=(0,i.jsx)(s.C,{text:"Enterprise",color:"blue"})):(0,i.jsxs)(h.Lh,{children:[(0,i.jsx)(p.o,{status:n.signature}),(0,i.jsx)(s.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:t}),(0,i.jsx)(m.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${n.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function f(e){let{plugin:n}=e;const t=(0,l.wW)(x);return n.hasUpdate&&!n.isCore&&n.type!==a.zV.renderer?(0,i.jsx)("p",{className:t.hasUpdate,children:"Update available!"}):null}const x=e=>({hasUpdate:o.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},62201:(e,n,t)=>{t.r(n),t.d(n,{default:()=>en,getStyles:()=>nn});var a,s,i=t(52423),r=t(68404),l=t(16755),o=t(2843),d=t(71873),c=t(54761),u=t(37417),g=t(64850),h=t(37434),p=t(7213),m=t(6432),v=t(13467),f=t(45916);const x=e=>{let{versions:n=[],installedVersion:t}=e;const i=(0,l.wW)(b),r=(0,v.RU)(n);return 0===n.length?a||(a=(0,f.jsx)("p",{children:"No version history was found."})):(0,f.jsxs)("table",{className:i.table,children:[s||(s=(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Version"}),(0,f.jsx)("th",{children:"Last updated"})]})})),(0,f.jsx)("tbody",{children:n.map((e=>{const n=t===e.version;return(0,f.jsxs)("tr",{children:[n?(0,f.jsxs)("td",{className:i.currentVersion,children:[e.version," (installed version)"]}):e.version===(null==r?void 0:r.version)?(0,f.jsxs)("td",{children:[e.version," (latest compatible version)"]}):(0,f.jsx)("td",{children:e.version}),(0,f.jsx)("td",{className:n?i.currentVersion:"",children:(0,m.E8)(e.createdAt)})]},e.version)}))})]})},b=e=>({container:i.css`
    padding: ${e.spacing(2,4,3)};
  `,table:i.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `,currentVersion:i.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var j=t(66015),y=t(86821);const w=e=>(0,j.Z)((async()=>e&&e.isInstalled&&!e.isDisabled?(0,y.O)(e.id):null),[null==e?void 0:e.id,null==e?void 0:e.isInstalled,null==e?void 0:e.isDisabled]);var N,I,S=t(95796),P=t(82897),k=t(61069),C=t(93570),D=t(70194),$=t(8006);function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class V extends r.PureComponent{constructor(e){super(e),E(this,"element",null),E(this,"model",void 0),E(this,"preUpdateHook",(()=>Promise.resolve())),E(this,"postUpdateHook",(()=>Promise.resolve())),E(this,"update",(()=>{const e=this.model.id;this.preUpdateHook().then((()=>{const n=(0,P.extend)({enabled:this.model.enabled,pinned:this.model.pinned,jsonData:this.model.jsonData,secureJsonData:this.model.secureJsonData},{});return(0,C.i)().post(`/api/plugins/${e}/settings`,n)})).then(this.postUpdateHook).then((e=>{window.location.href=window.location.href}))})),E(this,"setPreUpdateHook",(e=>{this.preUpdateHook=e})),E(this,"setPostUpdateHook",(e=>{this.postUpdateHook=e})),E(this,"importDashboards",(()=>((0,k.d)("AppConfig","importDashboards()"),Promise.resolve()))),E(this,"enable",(()=>{this.model.enabled=!0,this.model.pinned=!0,this.update()})),E(this,"disable",(()=>{this.model.enabled=!1,this.model.pinned=!1,this.update()})),this.state={angularCtrl:null,refresh:0}}componentDidMount(){setTimeout((()=>{this.setState({refresh:this.state.refresh+1})}),5)}componentDidUpdate(e){if(!this.element||this.state.angularCtrl)return;this.model=(0,P.cloneDeep)(this.props.app.meta);const n={ctrl:this,isAppConfigCtrl:!0},t=(0,D.w)().load(this.element,n,'<plugin-component type="app-config-ctrl"></plugin-component>');this.setState({angularCtrl:t})}render(){const e=this.model,n=(0,i.css)({marginRight:"8px"});return(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{ref:e=>this.element=e}),N||(N=(0,f.jsx)("br",{})),I||(I=(0,f.jsx)("br",{})),e&&(0,f.jsxs)("div",{className:"gf-form",children:[!e.enabled&&(0,f.jsx)($.zx,{variant:"primary",onClick:this.enable,className:n,children:"Enable"}),e.enabled&&(0,f.jsx)($.zx,{variant:"primary",onClick:this.update,className:n,children:"Update"}),e.enabled&&(0,f.jsx)($.zx,{variant:"destructive",onClick:this.disable,className:n,children:"Disable"})]})]})}}var U,T,W=t(94025),A=t(68374),L=t(63498);function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class z extends r.PureComponent{constructor(e){super(e),R(this,"importAll",(()=>{this.importNext(0)})),R(this,"importNext",(e=>{const{dashboards:n}=this.state;return this.import(n[e],!0).then((()=>e+1<n.length?new Promise((n=>{setTimeout((()=>{this.importNext(e+1).then((()=>{n()}))}),500)})):Promise.resolve()))})),R(this,"import",((e,n)=>{const{plugin:t,datasource:a}=this.props,s={pluginId:t.id,path:e.path,overwrite:n,inputs:[]};return a&&s.inputs.push({name:"*",type:"datasource",pluginId:a.meta.id,value:a.name}),(0,C.i)().post("/api/dashboards/import",s).then((n=>{A.h$.emit(W.SI.alertSuccess,["Dashboard Imported",e.title]),(0,P.extend)(e,n),this.setState({dashboards:[...this.state.dashboards]})}))})),R(this,"remove",(e=>{(0,C.i)().delete("/api/dashboards/uid/"+e.uid).then((()=>{e.imported=!1,this.setState({dashboards:[...this.state.dashboards]})}))})),this.state={loading:!0,dashboards:[]}}async componentDidMount(){const e=this.props.plugin.id;(0,C.i)().get(`/api/plugins/${e}/dashboards`).then((e=>{this.setState({dashboards:e,loading:!1})}))}render(){const{loading:e,dashboards:n}=this.state;return e?U||(U=(0,f.jsx)("div",{children:"loading..."})):n&&n.length?(0,f.jsx)("div",{className:"gf-form-group",children:(0,f.jsx)(L.Z,{dashboards:n,onImport:this.import,onRemove:this.remove})}):T||(T=(0,f.jsx)("div",{children:"No dashboards are included with this plugin"}))}}var O,_,F=t(89050),G=t(53786),B=t(65737),Z=t(81691),H=t(75442),M=t(13330),Q=t(20425);function q(e){let{plugin:n}=e;const t=(0,l.wW)(J),a=(0,r.useMemo)((()=>({query:"*",panel_type:n.id,kind:["panel"]})),[n]),s=(0,j.Z)((()=>(0,Q.O)().search(a)),[a]),i=s.value;return null!=i&&i.totalRows?(0,f.jsxs)("div",{className:t.wrap,children:[(0,f.jsxs)("div",{className:t.info,children:[n.name," is used ",(0,f.jsx)("b",{children:i.totalRows})," times."]}),(0,f.jsx)(F.Z,{children:e=>{let{width:n,height:t}=e;return(0,f.jsx)(M.Q,{response:i,width:n,height:t,clearSelection:()=>{},keyboardEvents:(0,G.of)(),onTagSelected:()=>{}})}})]}):s.loading?O||(O=(0,f.jsx)(Z.$,{})):B.v.featureToggles.panelTitleSearch?(0,f.jsx)(H.Z,{title:`${n.name} is not used in any dashboards yet`,buttonIcon:"plus",buttonTitle:"Create Dashboard",buttonLink:`dashboard/new?panelType=${n.id}&editPanel=1`}):_||(_=(0,f.jsx)(o.b,{title:"Missing feature toggle: panelTitleSearch",children:"Plugin usage requires the new search index to find usage across dashboards"}))}const J=e=>({wrap:i.css`
      width: 100%;
      height: 100%;
    `,info:i.css`
      padding-bottom: 30px;
    `});var X;function Y(e){let{plugin:n,queryParams:t,pageId:a}=e;const s=(0,l.wW)(K),{value:r}=w(n);var o,d,c;if(a===S.tu.OVERVIEW)return(0,f.jsx)("div",{className:(0,i.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:null!==(o=null===(d=n.details)||void 0===d?void 0:d.readme)&&void 0!==o?o:"No plugin help or readme markdown file was found"}});if(a===S.tu.VERSIONS)return(0,f.jsx)("div",{className:s.container,children:(0,f.jsx)(x,{versions:null===(c=n.details)||void 0===c?void 0:c.versions,installedVersion:n.installedVersion})});if(a===S.tu.CONFIG&&null!=r&&r.angularConfigCtrl)return(0,f.jsx)("div",{className:s.container,children:(0,f.jsx)(V,{app:r})});if(null!=r&&r.configPages)for(const e of r.configPages)if(a===e.id)return(0,f.jsx)("div",{className:s.container,children:(0,f.jsx)(p.b,{meta:r.meta,children:(0,f.jsx)(e.body,{plugin:r,query:t})})});return a===S.tu.USAGE&&r?(0,f.jsx)("div",{className:s.container,children:(0,f.jsx)(q,{plugin:null==r?void 0:r.meta})}):a===S.tu.DASHBOARDS&&r?(0,f.jsx)("div",{className:s.container,children:(0,f.jsx)(z,{plugin:null==r?void 0:r.meta})}):(0,f.jsx)("div",{className:s.container,children:X||(X=(0,f.jsx)("p",{children:"Page not found."}))})}const K=e=>({container:i.css``,readme:i.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }

    a {
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.link};
        text-decoration: underline;
      }
    }
  `});var ee,ne,te,ae,se,ie,re,le,oe=t(15546),de=t(25004);function ce(e){let{className:n,plugin:t}=e;return t.isDisabled?(0,f.jsxs)(o.b,{severity:"error",title:"Plugin disabled",className:n,"aria-label":de.wl.pages.PluginPage.disabledInfo,children:[ue(t.error),ee||(ee=(0,f.jsx)("p",{children:"Please contact your server administrator to get this resolved."})),ne||(ne=(0,f.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about managing plugins"}))]}):null}function ue(e){switch(e){case oe.w2.modifiedSignature:return te||(te=(0,f.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case oe.w2.invalidSignature:return ae||(ae=(0,f.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case oe.w2.missingSignature:return se||(se=(0,f.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));default:return ie||(ie=(0,f.jsx)("p",{children:"We failed to run this plugin due to an unkown reason and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."}))}}function ge(e){let{className:n,plugin:t}=e;const a=t.signature===oe.Xy.valid,s=t.signature===oe.Xy.internal,i=t.isDisabled&&function(e){switch(e){case oe.w2.invalidSignature:case oe.w2.missingSignature:case oe.w2.modifiedSignature:return!0;default:return!1}}(t.error);return a||s||i?null:(0,f.jsxs)(o.b,{severity:"warning",title:"Invalid plugin signature","aria-label":de.wl.pages.PluginPage.signatureInfo,className:n,children:[re||(re=(0,f.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can’t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."})),le||(le=(0,f.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about plugins signing."}))]})}var he=t(70356),pe=t(16371);const me=(e,n)=>{var t;const{loading:a,error:s,value:i}=w(e),{pathname:l}=(0,he.TH)(),o=function(e,n){var t;if(!e||!n)return S.tu.OVERVIEW;if(!A.Vt.hasAccessInMetadata(g.bW.PluginsWrite,e,(0,pe.RN)())||n.meta.type!==oe.zV.app)return S.tu.OVERVIEW;if(n.angularConfigCtrl)return S.tu.CONFIG;if(null!==(t=n.configPages)&&void 0!==t&&t.length)return n.configPages[0].id;return S.tu.OVERVIEW}(e,i),d=l.substring(0,l.lastIndexOf("/")),c=Boolean(null==e?void 0:e.isPublished),u=n||o,h=(0,r.useMemo)((()=>{const n=e&&A.Vt.hasAccessInMetadata(g.bW.PluginsWrite,e,(0,pe.RN)()),t=[];if(c&&t.push({text:S.xc.VERSIONS,id:S.tu.VERSIONS,icon:"history",url:`${l}?page=${S.tu.VERSIONS}`,active:S.tu.VERSIONS===u}),!i)return t;if(B.v.featureToggles.panelTitleSearch&&i.meta.type===oe.zV.panel&&t.push({text:S.xc.USAGE,icon:"list-ul",id:S.tu.USAGE,url:`${l}?page=${S.tu.USAGE}`,active:S.tu.USAGE===u}),!n)return t;if(i.meta.type===oe.zV.app){var a;if(i.angularConfigCtrl&&t.push({text:"Config",icon:"cog",id:S.tu.CONFIG,url:`${l}?page=${S.tu.CONFIG}`,active:S.tu.CONFIG===u}),i.configPages)for(const e of i.configPages)t.push({text:e.title,icon:e.icon,id:e.id,url:`${l}?page=${e.id}`,active:e.id===u});null!==(a=i.meta.includes)&&void 0!==a&&a.find((e=>e.type===oe.$_.dashboard))&&t.push({text:"Dashboards",icon:"apps",id:S.tu.DASHBOARDS,url:`${l}?page=${S.tu.DASHBOARDS}`,active:S.tu.DASHBOARDS===u})}return t}),[e,i,l,c,u]);return{error:s,loading:a,navModel:{text:null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"",img:null==e?void 0:e.info.logos.small,breadcrumbs:[{title:"Plugins",url:d}],children:[{text:S.xc.OVERVIEW,icon:"file-alt",id:S.tu.OVERVIEW,url:`${l}?page=${S.tu.OVERVIEW}`,active:S.tu.OVERVIEW===u},...h]},activePageId:u}};var ve=t(60299);function fe(e){let{plugin:n}=e;const{value:t}=w(n);if(!t)return null;if(!A.Vt.hasAccessInMetadata(g.bW.PluginsWrite,n,(0,pe.RN)()))return null;const{enabled:a,jsonData:s}=null==t?void 0:t.meta;return(0,f.jsxs)(f.Fragment,{children:[!a&&(0,f.jsx)($.zx,{variant:"primary",onClick:()=>xe(n.id,{enabled:!0,pinned:!0,jsonData:s}),children:"Enable"}),a&&(0,f.jsx)($.zx,{variant:"destructive",onClick:()=>{xe(n.id,{enabled:!1,pinned:!1,jsonData:s})},children:"Disable"})]})}const xe=async(e,n)=>{try{await(0,ve.P6)(e,n),window.location.reload()}catch(e){console.error("Error while updating the plugin",e)}};var be=t(5316);function je(e){let{plugin:n}=e;const t=(0,g.I0)(),a=(0,r.useCallback)((()=>{const e={name:n.name,id:n.id};t((0,be.J_)(e))}),[t,n]);return(0,pe.Gg)()?(0,f.jsxs)($.zx,{variant:"primary",onClick:a,children:["Create a ",n.name," data source"]}):null}function ye(e){let{plugin:n}=e;if(!n.isInstalled||n.isDisabled)return null;switch(n.type){case oe.zV.datasource:return(0,f.jsx)(je,{plugin:n});case oe.zV.app:return(0,f.jsx)(fe,{plugin:n});default:return null}}var we,Ne,Ie,Se=t(72677),Pe=t(99500),ke=t(69104);const Ce=e=>{let{plugin:n,pluginStatus:t,latestCompatibleVersion:a}=e;const s=(0,l.wW)(De),i=B.v.pluginAdminExternalManageEnabled,r=A.Vt.hasAccess(g.bW.PluginsInstall,(0,pe.bO)()),o=(0,ke.y9)(),d=Boolean(a);if(n.type===oe.zV.renderer)return(0,f.jsx)("div",{className:s.message,children:"Renderer plugins cannot be managed by the Plugin Catalog."});if(n.type===oe.zV.secretsmanager)return(0,f.jsx)("div",{className:s.message,children:"Secrets manager plugins cannot be managed by the Plugin Catalog."});if(n.isEnterprise&&!(0,Se.v)("enterprise.plugins"))return(0,f.jsxs)(c.Lh,{height:"auto",align:"center",children:[(0,f.jsx)("span",{className:s.message,children:"No valid Grafana Enterprise license detected."}),(0,f.jsx)($.Qj,{href:`${(0,v.Uj)(n.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt",children:"Learn more"})]});if(n.isDev)return(0,f.jsx)("div",{className:s.message,children:"This is a development build of the plugin and can't be uninstalled."});if(!r&&!i){const e=`You do not have permission to ${t} this plugin.`;return(0,f.jsx)("div",{className:s.message,children:e})}return n.isPublished?d?o?null:(0,f.jsx)("div",{className:s.message,children:"The install controls have been disabled because the Grafana server cannot access grafana.com."}):(0,f.jsxs)("div",{className:s.message,children:[Ie||(Ie=(0,f.jsx)(Pe.J,{name:"exclamation-triangle"}))," This plugin doesn't support your version of Grafana."]}):(0,f.jsxs)("div",{className:s.message,children:[we||(we=(0,f.jsx)(Pe.J,{name:"exclamation-triangle"}))," This plugin is not published to"," ",Ne||(Ne=(0,f.jsx)("a",{href:"https://www.grafana.com/plugins",target:"__blank",rel:"noreferrer",children:"grafana.com/plugins"}))," ","and can't be managed via the catalog."]})},De=e=>({message:i.css`
      color: ${e.colors.text.secondary};
    `});var $e=t(80795),Ee=t(2024),Ve=t(2247),Ue=t(19512);function Te(e){let{plugin:n,pluginStatus:t,latestCompatibleVersion:a}=e;const[s]=(0,Ue.K)(),i=(0,he.TH)(),{isInstalling:l,error:o}=(0,ke.IS)(),{isUninstalling:d,error:u}=(0,ke.wq)(),g=(0,ke.x3)(),h=(0,ke.S1)(),[p,m]=(0,r.useState)(!1),v=()=>m(!0),x=()=>m(!1),b=d?"Uninstalling":"Uninstall",j=async()=>{if(x(),await h(n.id),!u){const e=s.page;e!==S.tu.OVERVIEW&&e!==S.tu.VERSIONS&&$e.E1.replace(`${i.pathname}?page=${S.tu.OVERVIEW}`),Ve.Z.emit(W.SI.alertSuccess,[`Uninstalled ${n.name}`])}},y=async()=>{await g(n.id,null==a?void 0:a.version,!0),o||Ve.Z.emit(W.SI.alertSuccess,[`Updated ${n.name}`])};return t===S.vF.UNINSTALL?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ee.s,{isOpen:p,title:`Uninstall ${n.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:j,onDismiss:x}),(0,f.jsx)(c.Lh,{align:"flex-start",width:"auto",height:"auto",children:(0,f.jsx)($.zx,{variant:"destructive",disabled:d,onClick:v,children:b})})]}):t===S.vF.UPDATE?(0,f.jsxs)(c.Lh,{align:"flex-start",width:"auto",height:"auto",children:[(0,f.jsx)($.zx,{disabled:l,onClick:y,children:l?"Updating":"Update"}),(0,f.jsx)($.zx,{variant:"destructive",disabled:d,onClick:j,children:b})]}):(0,f.jsx)($.zx,{disabled:l,onClick:async()=>{await g(n.id,null==a?void 0:a.version),o||Ve.Z.emit(W.SI.alertSuccess,[`Installed ${n.name}`])},children:l?"Installing":"Install"})}function We(e){let{pluginId:n,pluginStatus:t}=e;const a=`${(0,v.Uj)(n)}/?tab=installation`;return t===S.vF.UPDATE?(0,f.jsxs)(c.Lh,{height:"auto",children:[(0,f.jsx)($.Qj,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Update via grafana.com"}),(0,f.jsx)($.Qj,{variant:"destructive",href:a,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"})]}):t===S.vF.UNINSTALL?(0,f.jsx)($.Qj,{variant:"destructive",href:a,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"}):(0,f.jsx)($.Qj,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Install via grafana.com"})}const Ae=e=>{var n;let{plugin:t}=e;const a=(0,ke.y9)(),s=(0,v.RU)(null==t||null===(n=t.details)||void 0===n?void 0:n.versions);if(!t)return null;const i=(0,v.HT)(t,a,s),r=B.v.pluginAdminExternalManageEnabled,l=t.isInstalled?t.hasUpdate?S.vF.UPDATE:S.vF.UNINSTALL:S.vF.INSTALL,o=t.isCore||t.isDisabled||!(0,v.fG)()||i;return(0,f.jsxs)(f.Fragment,{children:[!o&&(0,f.jsx)(f.Fragment,{children:r?(0,f.jsx)(We,{pluginId:t.id,pluginStatus:l}):(0,f.jsx)(Te,{plugin:t,latestCompatibleVersion:s,pluginStatus:l})}),(0,f.jsx)(ye,{plugin:t})]})},Le=e=>{var n,t;let{plugin:a}=e;const s=(0,ke.y9)(),i=(0,l.wW)(Re);if(!a)return null;const o=(0,v.RU)(null===(n=a.details)||void 0===n?void 0:n.versions),d=a.isInstalled?a.hasUpdate?S.vF.UPDATE:S.vF.UNINSTALL:S.vF.INSTALL;return(0,f.jsxs)("div",{className:i.subtitle,children:[(null==a?void 0:a.description)&&(0,f.jsx)("div",{children:null==a?void 0:a.description}),(null==a||null===(t=a.details)||void 0===t?void 0:t.links)&&a.details.links.length>0&&(0,f.jsx)("span",{children:a.details.links.map(((e,n)=>(0,f.jsxs)(r.Fragment,{children:[n>0&&" | ",(0,f.jsx)("a",{href:e.url,className:"external-link",children:e.name})]},n)))}),(0,v.HT)(a,s,o)&&(0,f.jsx)(Ce,{plugin:a,pluginStatus:d,latestCompatibleVersion:o})]})},Re=e=>({subtitle:i.css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `});var ze=t(14662),Oe=t(68522);function _e(e){var n,t,a;let{plugin:s,latestCompatibleVersion:i,className:r}=e;const o=(0,l.wW)(Fe),d=null===(n=s.details)||void 0===n?void 0:n.pluginDependencies,c=s.isInstalled?null===(t=s.details)||void 0===t?void 0:t.grafanaDependency:(null==i?void 0:i.grafanaDependency)||(null===(a=s.details)||void 0===a?void 0:a.grafanaDependency);return!(c||d&&d.length)?null:(0,f.jsxs)(Oe.Stack,{gap:1,children:[Boolean(c)&&(0,f.jsxs)("div",{className:o.depBadge,children:[(0,f.jsx)(Pe.J,{name:"grafana",className:o.icon}),"Grafana ",c]}),d&&d.length>0&&(0,f.jsx)("div",{children:d.map((e=>(0,f.jsxs)("span",{className:o.depBadge,children:[(0,f.jsx)(Pe.J,{name:S.Co[e.type],className:o.icon}),e.name," ",e.version]},e.name)))})]})}const Fe=e=>({dependencyTitle:i.css`
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,depBadge:(0,i.css)({display:"flex",alignItems:"flex-start"}),icon:i.css`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var Ge=t(38437),Be=t(64313);const Ze={[oe._Z.grafana]:"grafana",[oe._Z.commercial]:"shield",[oe._Z.community]:"shield",DEFAULT:"shield-exclamation"};function He(e){let{signatureType:n,signatureOrg:t=""}=e;const a=(0,l.wW)(Qe);if(!n&&!t)return null;const s=n===oe._Z.grafana?"Grafana Labs":(0,P.capitalize)(n),i=Ze[n||""]||Ze.DEFAULT;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Me,{children:(0,f.jsxs)("div",{className:a.detailsWrapper,children:[(0,f.jsx)("strong",{className:a.strong,children:"Level: "}),(0,f.jsx)(Pe.J,{size:"xs",name:i})," ",s]})}),(0,f.jsxs)(Me,{children:[(0,f.jsx)("strong",{className:a.strong,children:"Signed by:"})," ",t]})]})}const Me=e=>{let{children:n}=e;const t=(0,l.wW)(Qe);return(0,f.jsx)(Be.C,{color:"green",className:t.badge,text:n})},Qe=e=>({badge:i.css`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
  `,detailsWrapper:i.css`
    align-items: center;
    display: flex;
  `,strong:i.css`
    color: ${e.colors.text.primary};
  `,icon:i.css`
    margin-right: ${e.spacing(.5)};
  `});function qe(e){let{plugin:n}=e;const t=(0,l.wW)(Je),a=n.signature===oe.Xy.valid;return(0,f.jsxs)("div",{className:t.container,children:[(0,f.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",className:t.link,children:(0,f.jsx)(Ge.o,{status:n.signature})}),a&&(0,f.jsx)(He,{signatureType:n.signatureType,signatureOrg:n.signatureOrg})]})}const Je=e=>({container:i.css`
      display: flex;
      flex-wrap: wrap;
      gap: ${e.spacing(.5)};
    `,link:i.css`
      display: inline-flex;
      align-items: center;
    `}),Xe=e=>{const n=(e=>{var n,t,a,s;const i=[];if(!e)return i;const r=(0,v.RU)(null===(n=e.details)||void 0===n?void 0:n.versions),l=e.installedVersion||(null==r?void 0:r.version);Boolean(l)&&i.push({label:"Version",value:l}),Boolean(e.orgName)&&i.push({label:"From",value:e.orgName}),(!e.signatureType||e.signatureType===oe._Z.community||e.signatureType===oe._Z.commercial)&&Boolean(e.downloads>0)&&i.push({label:"Downloads",value:(new Intl.NumberFormat).format(e.downloads)});const o=null===(t=e.details)||void 0===t?void 0:t.pluginDependencies;return!((e.isInstalled?null===(a=e.details)||void 0===a?void 0:a.grafanaDependency:(null==r?void 0:r.grafanaDependency)||(null===(s=e.details)||void 0===s?void 0:s.grafanaDependency))||o&&o.length)||i.push({label:"Dependencies",value:(0,f.jsx)(_e,{plugin:e,latestCompatibleVersion:r})}),e.isDisabled&&i.push({label:"Status",value:(0,f.jsx)(ze.SX,{error:e.error})}),i.push({label:"Signature",value:(0,f.jsx)(qe,{plugin:e})}),i})(e);return{actions:(0,f.jsx)(Ae,{plugin:e}),info:n,subtitle:(0,f.jsx)(Le,{plugin:e})}};var Ye,Ke;function en(e){let{match:n,queryParams:t}=e;const{params:{pluginId:a=""},url:s}=n,i=s.substring(0,s.lastIndexOf("/")),r=(0,ke.bJ)(a),{navModel:p,activePageId:m}=me(r,t.page),{actions:v,info:x,subtitle:b}=Xe(r),{isLoading:j}=(0,ke.ZV)(),{isLoading:y}=(0,ke.bt)(),w=(0,l.wW)(nn);return j||y?Ye||(Ye=(0,f.jsx)(u.T,{navId:"plugins",children:(0,f.jsx)(h.a,{})})):r?(0,f.jsx)(u.T,{navId:"plugins",pageNav:p,actions:v,subTitle:b,info:x,children:(0,f.jsx)(u.T.Contents,{children:(0,f.jsxs)(d.I,{className:w.tabContent,children:[(0,f.jsx)(ge,{plugin:r,className:w.alert}),(0,f.jsx)(ce,{plugin:r,className:w.alert}),(0,f.jsx)(Y,{queryParams:t,plugin:r,pageId:m})]})})}):(0,f.jsx)(c.Ar,{justify:"center",align:"center",children:(0,f.jsxs)(o.b,{severity:g.F1.Warning,title:"Plugin not found",children:["That plugin cannot be found. Please check the url is correct or ",Ke||(Ke=(0,f.jsx)("br",{})),"go to the ",(0,f.jsx)("a",{href:i,children:"plugin catalog"}),"."]})})}const nn=e=>({alert:i.css`
      margin-bottom: ${e.spacing(2)};
    `,subtitle:i.css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `,tabContent:i.css`
      overflow: auto;
      height: 100%;
    `})},69104:(e,n,t)=>{t.d(n,{iY:()=>T,bt:()=>D,ZV:()=>C,GE:()=>w,UQ:()=>I,bJ:()=>N,x3:()=>S,IS:()=>$,y9:()=>k,S1:()=>P,wq:()=>E});var a=t(68404),s=t(64850),i=t(13467),r=t(71482),l=t(45919),o=t(4387),d=t(56949),c=t(95796);const u=e=>e.plugins,g=(0,o.P1)(u,(e=>{let{items:n}=e;return n})),h=(0,o.P1)(u,(e=>{let{settings:n}=e;return n.displayMode})),{selectAll:p,selectById:m}=l.CD.getSelectors(g),v=(e,n)=>(0,o.P1)((e=>(0,o.P1)(p,(n=>n.filter((n=>"installed"===e?n.isInstalled:!n.isCore)))))(e),(e=>e.filter((e=>"all"===n||e.type===n)))),f=(e,n,t)=>(0,o.P1)(v(n,t),(e=>(0,o.P1)(p,(n=>""===e?[]:n.filter((n=>{const t=[];return n.name&&t.push(n.name.toLowerCase()),n.orgName&&t.push(n.orgName.toLowerCase()),t.some((n=>n.includes((0,d.x6)(e).toLowerCase())))})))))(e),((n,t)=>""===e?n:t)),x=(0,o.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),b=e=>(0,o.P1)(u,(n=>{let{requests:t={}}=n;return t[e]})),j=e=>(0,o.P1)(b(e),(e=>(null==e?void 0:e.status)===c.eE.Pending)),y=e=>(0,o.P1)(b(e),(e=>(null==e?void 0:e.status)===c.eE.Rejected?null==e?void 0:e.error:null)),w=e=>{let{query:n="",filterBy:t="installed",filterByType:a="all",sortBy:r=i.Nh.nameAsc}=e;V();const l=(0,s.v9)(f(n,t,a)),{isLoading:o,error:d}=C();return{isLoading:o,error:d,plugins:(0,i.AA)(l,r)}},N=e=>(V(),U(e),(0,s.v9)((n=>m(n,e)))),I=()=>(V(),(0,s.v9)(x)),S=()=>{const e=(0,s.I0)();return(n,t,a)=>e((0,r.N9)({id:n,version:t,isUpdating:a}))},P=()=>{const e=(0,s.I0)();return n=>e((0,r.Tz)(n))},k=()=>null===(0,s.v9)(y(r.tQ.typePrefix)),C=()=>({isLoading:(0,s.v9)(j(r.Qd.typePrefix)),error:(0,s.v9)(y(r.Qd.typePrefix))}),D=()=>({isLoading:(0,s.v9)(j(r.DD.typePrefix)),error:(0,s.v9)(y(r.DD.typePrefix))}),$=()=>({isInstalling:(0,s.v9)(j(r.N9.typePrefix)),error:(0,s.v9)(y(r.N9.typePrefix))}),E=()=>({isUninstalling:(0,s.v9)(j(r.Tz.typePrefix)),error:(0,s.v9)(y(r.Tz.typePrefix))}),V=()=>{const e=(0,s.I0)(),n=(0,s.v9)((t=r.Qd.typePrefix,(0,o.P1)(b(t),(e=>void 0===e))));var t;(0,a.useEffect)((()=>{n&&e((0,r.Qd)())}),[])},U=e=>{const n=(0,s.I0)(),t=(0,s.v9)((n=>m(n,e))),i=!(0,s.v9)(j(r.DD.typePrefix))&&t&&!t.details;(0,a.useEffect)((()=>{i&&n((0,r.DD)(e))}),[t])},T=()=>{const e=(0,s.I0)();return{displayMode:(0,s.v9)(h),setDisplayMode:n=>e((0,l.UC)(n))}}}}]);
//# sourceMappingURL=PluginPage.50ba56578e3d5afb0ddb.js.map