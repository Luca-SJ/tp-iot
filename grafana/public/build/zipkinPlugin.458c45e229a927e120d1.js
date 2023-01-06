"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4023],{90618:(e,t,n)=>{n.d(t,{et:()=>i,fy:()=>l,nO:()=>o,np:()=>u});var a=n(57171),r=n(25803),s=n(27843);function i(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const n=e.slice(-1)[0],[a,r]=n,[s,i]=t;return i<r?e:s>r?[...e,t]:[...e.slice(0,-1),[a,i]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function o(e){const t={};let n;for(let a=0;n=e(a),n;a++){t[n.id]?t[n.id].span=n.span:t[n.id]={span:n.span,children:[]};for(const e of n.parentIds)e&&(t[e]?t[e].children.push(n.id):t[e]={span:void 0,children:[n.id]})}return t}function l(e,t,n){return{main:`${d(e)}ms (${d(e/t*100)}%)`,secondary:`${d(n)}ms (${d(n/e*100)}%)`}}function d(e){return parseFloat(e.toFixed(2))}function u(){return[new a.v({fields:[{name:r.z.id,type:s.fS.string},{name:r.z.title,type:s.fS.string},{name:r.z.subTitle,type:s.fS.string},{name:r.z.mainStat,type:s.fS.string,config:{displayName:"Total time (% of trace)"}},{name:r.z.secondaryStat,type:s.fS.string,config:{displayName:"Self time (% of total)"}},{name:r.z.color,type:s.fS.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new a.v({fields:[{name:r.z.id,type:s.fS.string},{name:r.z.target,type:s.fS.string},{name:r.z.source,type:s.fS.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},30832:(e,t,n)=>{n.r(t),n.d(t,{plugin:()=>M});var a=n(23214),r=n(68404),s=n(65737),i=n(88807),o=n(97602),l=n(6288),d=n(11753),u=n(23218),c=n(45916);var p=n(52423),m=n(82897),v=n(7197),f=n(50986),g=n(62124),h=n(16755),y=n(34117),k=n(46889),b=n(37625),S=n(19050),j=n(30477),O=n(22995),I=n(93686),N=n(47900),T=n(63454);const w=e=>({tracesCascader:(0,p.css)({label:"tracesCascader",marginRight:e.spacing(1)})});const q=[{label:"No traces found",value:"no_traces",isLeaf:!0}],x={"[No traces in time range]":"__NO_TRACES__"};var z=n(53786),C=n(3363),D=n(2101),E=n(57171),Z=n(27843),$=n(2633),F=n(93570),R=n(40225),V=n(25803),_=n(90618);function G(e){const{nodes:t,edges:n}=function(e){const t=[],n=[],a=function(e){let t=0,n=1/0;for(const a of e)a.timestamp<n&&(n=a.timestamp),a.timestamp+a.duration>t&&(t=a.timestamp+a.duration);return t-n}(e),r=(0,_.nO)((t=>{if(!(t>=e.length))return{span:e[t],id:e[t].id,parentIds:e[t].parentId?[e[t].parentId]:[]}}));for(const o of e){var s,i;const e=r[o.id].children.map((e=>{const t=r[e].span;return[t.timestamp,t.timestamp+t.duration]})),l=(0,_.et)(e),d=o.duration-l,u=(0,_.fy)(o.duration/1e3,a/1e3,d/1e3);t.push({[V.z.id]:o.id,[V.z.title]:(null===(s=o.localEndpoint)||void 0===s?void 0:s.serviceName)||(null===(i=o.remoteEndpoint)||void 0===i?void 0:i.serviceName)||"unknown",[V.z.subTitle]:o.name,[V.z.mainStat]:u.main,[V.z.secondaryStat]:u.secondary,[V.z.color]:d/a}),o.parentId&&r[o.parentId].span&&n.push({[V.z.id]:o.parentId+"--"+o.id,[V.z.target]:o.id,[V.z.source]:o.parentId})}return{nodes:t,edges:n}}(e),[a,r]=(0,_.np)();for(const e of t)a.add(e);for(const e of n)r.add(e);return[a,r]}var J=n(23237);function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Q extends a.MF{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,$.J)();super(e),L(this,"uploadedJson",null),L(this,"nodeGraph",void 0),L(this,"spanBar",void 0),this.instanceSettings=e,this.templateSrv=t,this.nodeGraph=e.jsonData.nodeGraph}query(e){const t=e.targets[0];if("upload"===t.queryType){if(!this.uploadedJson)return(0,z.of)({data:[]});try{var n;const e=JSON.parse(this.uploadedJson);return(0,z.of)(A({data:e},null===(n=this.nodeGraph)||void 0===n?void 0:n.enabled))}catch(e){return(0,z.of)({error:{message:"JSON is not valid Zipkin format"},data:[]})}}if(t.query){const n=this.applyVariables(t,e.scopedVars);return this.request(`/api/v2/trace/${encodeURIComponent(n.query)}`).pipe((0,D.U)((e=>{var t;return A(e,null===(t=this.nodeGraph)||void 0===t?void 0:t.enabled)})))}return(0,z.of)(W)}async metadataRequest(e,t){return(await(0,C.n)(this.request(e,t,{hideFromInspector:!0}))).data}async testDatasource(){return await this.metadataRequest("/api/v2/services"),{status:"success",message:"Data source is working"}}getQueryDisplayText(e){return e.query}interpolateVariablesInQueries(e,t){return e&&0!==e.length?e.map((e=>Object.assign({},e,{datasource:this.getRef()},this.applyVariables(e,t)))):[]}applyVariables(e,t){var n;const a=Object.assign({},e);return Object.assign({},a,{query:this.templateSrv.replace(null!==(n=e.query)&&void 0!==n?n:"",t)})}request(e,t,n){const a=t?(0,R.tW)(t):"",r=`${this.instanceSettings.url}${e}${a.length?`?${a}`:""}`,s=Object.assign({},n,{url:r});return(0,F.i)().fetch(s)}}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=null!=e&&e.data?[(0,J.m)(null==e?void 0:e.data)]:[];return t&&n.push(...G(null==e?void 0:e.data)),{data:n}}const W={data:[new E.v({fields:[{name:"trace",type:Z.fS.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}})]},M=new a.hf(Q).setQueryEditor((e=>{let{query:t,onChange:n,onRunQuery:a,datasource:s}=e;const i=function(e){const t="/api/v2/services",[n,a]=(0,v.Z)((async()=>{try{const n=await e.metadataRequest(t);return n?n.sort().map((e=>({label:e,value:e,isLeaf:!1}))):[]}catch(e){const t=e instanceof Error?e:"An unknown error occurred";throw(0,T.WI)((0,I.$l)((0,N.t_)("Failed to load services from Zipkin",t))),e}}),[e]);return(0,f.Z)((()=>{a()})),n}(s),o=(0,h.l4)(),l=(0,h.wW)(w),{onLoadOptions:d,allOptions:u}=function(e){const t=(0,g.Z)(),[n,a]=(0,r.useState)({}),[,s]=(0,v.Z)((async function(n){const r="/api/v2/spans";try{const s=await e.metadataRequest(r,{serviceName:n});t()&&a((e=>{const t=(0,m.fromPairs)(s.map((e=>[e,void 0])));return Object.assign({},e,{[n]:t})}))}catch(e){const t=e instanceof Error?e:"An unknown error occurred";throw(0,T.WI)((0,I.$l)((0,N.t_)("Failed to load spans from Zipkin",t))),e}}),[e,n]),[,i]=(0,v.Z)((async function(n,r){const s="/api/v2/traces",i={serviceName:n,spanName:r};try{const o=await e.metadataRequest(s,i);if(t()){const e=o.length?(0,m.fromPairs)(o.map((e=>{const t=e.find((e=>!e.parentId));return[`${t.name} [${Math.floor(t.duration/1e3)} ms]`,t.traceId]}))):x;a((t=>{const a=t[n];return Object.assign({},t,{[n]:Object.assign({},a,{[r]:e})})}))}}catch(e){const t=e instanceof Error?e:"An unknown error occurred";throw(0,T.WI)((0,I.$l)((0,N.t_)("Failed to load spans from Zipkin",t))),e}}),[e]);return{onLoadOptions:(0,r.useCallback)((e=>{const t=e[0].value;if(1===e.length)s(t);else if(2===e.length){const n=e[1].value;i(t,n)}}),[s,i]),allOptions:n}}(s),z=(0,r.useCallback)(((e,r)=>{if(3===r.length){const e=r[2].value;n(Object.assign({},t,{query:e})),a()}}),[n,a,t]);let C=function(e,t){return(0,r.useMemo)((()=>{let n=[];return e.value&&e.value.length?n=e.value.map((e=>Object.assign({},e,{children:t[e.value]&&Object.keys(t[e.value]).map((n=>({label:n,value:n,isLeaf:!1,children:t[e.value][n]&&Object.keys(t[e.value][n]).map((a=>({label:a,value:t[e.value][n][a]})))})))}))):e.value&&!e.value.length&&(n=q),n}),[e,t])}(i,u);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y.Z,{children:(0,c.jsx)(k._,{label:"Query type",children:(0,c.jsx)(b.S,{options:[{value:"traceID",label:"TraceID"},{value:"upload",label:"JSON File"}],value:t.queryType||"traceID",onChange:e=>n(Object.assign({},t,{queryType:e})),size:"md"})})}),"upload"===t.queryType?(0,c.jsx)("div",{className:(0,p.css)({padding:o.spacing(2)}),children:(0,c.jsx)(S.Yo,{options:{multiple:!1},onLoad:e=>{s.uploadedJson=e,a()}})}):(0,c.jsxs)(y.Z,{children:[(0,c.jsx)(j.O,{options:C,onChange:z,loadData:d,variant:"secondary",buttonProps:{className:l.tracesCascader},children:"Traces"}),(0,c.jsx)("div",{className:"gf-form gf-form--grow flex-shrink-1 min-width-15",children:(0,c.jsx)(O.q,{query:t.query,onChange:e=>{const a=Object.assign({},t,{query:e});n(a)},onRunQuery:a,placeholder:"Insert Trace ID (run with Shift+Enter)",portalOrigin:"zipkin"})})]})]})})).setConfigEditor((e=>{let{options:t,onOptionsChange:n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.E,{defaultUrl:"http://localhost:9411",dataSourceConfig:t,showAccessOptions:!1,onChange:n}),(0,c.jsx)("div",{className:"gf-form-group",children:(0,c.jsx)(d.Z,{options:t,onOptionsChange:n})}),s.v.featureToggles.traceToMetrics?(0,c.jsx)("div",{className:"gf-form-group",children:(0,c.jsx)(u.F,{options:t,onOptionsChange:n})}):null,(0,c.jsx)("div",{className:"gf-form-group",children:(0,c.jsx)(l.n,{options:t,onOptionsChange:n})}),(0,c.jsx)("div",{className:"gf-form-group",children:(0,c.jsx)(o.e6,{options:t,onOptionsChange:n})})]})}))},23237:(e,t,n)=>{n.d(t,{H:()=>c,m:()=>i});var a=n(82897),r=n(57171),s=n(27843);function i(e){const t=e.map(o),n=new r.v({fields:[{name:"traceID",type:s.fS.string},{name:"spanID",type:s.fS.string},{name:"parentSpanID",type:s.fS.string},{name:"operationName",type:s.fS.string},{name:"serviceName",type:s.fS.string},{name:"serviceTags",type:s.fS.other},{name:"startTime",type:s.fS.number},{name:"duration",type:s.fS.number},{name:"logs",type:s.fS.other},{name:"tags",type:s.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}});for(const e of t)n.add(e);return n}function o(e){var t,n,a,r;const s={traceID:e.traceId,spanID:e.id,parentSpanID:e.parentId,operationName:e.name,serviceName:(null===(t=e.localEndpoint)||void 0===t?void 0:t.serviceName)||(null===(n=e.remoteEndpoint)||void 0===n?void 0:n.serviceName)||"unknown",serviceTags:d(e),startTime:e.timestamp/1e3,duration:e.duration/1e3,logs:null!==(a=null===(r=e.annotations)||void 0===r?void 0:r.map(l))&&void 0!==a?a:[],tags:Object.keys(e.tags||{}).reduce(((t,n)=>"error"===n?(t.push({key:"error",value:!0}),t.push({key:"errorValue",value:e.tags.error}),t):(t.push({key:n,value:e.tags[n]}),t)),[])};var i,o;e.kind&&(s.tags=[{key:"kind",value:e.kind},...null!==(i=s.tags)&&void 0!==i?i:[]]);e.shared&&(s.tags=[{key:"shared",value:e.shared},...null!==(o=s.tags)&&void 0!==o?o:[]]);return s}function l(e){return{timestamp:e.timestamp,fields:[{key:"annotation",value:e.value}]}}function d(e){const t=e.localEndpoint||e.remoteEndpoint;return t?[u("ipv4",t.ipv4),u("ipv6",t.ipv6),u("port",t.port),u("endpointType",e.localEndpoint?"local":"remote")].filter(a.identity):[]}function u(e,t){if(t)return{key:e,value:t}}const c=e=>{let t=[];for(let r=0;r<e.length;r++){var n,a;const s=e.get(r);t.push(Object.assign({traceId:s.traceID,parentId:s.parentSpanID,name:s.operationName,id:s.spanID,timestamp:1e3*s.startTime,duration:1e3*s.duration},p(s),{annotations:s.logs.length?s.logs.map((e=>({timestamp:e.timestamp,value:e.fields[0].value}))):void 0,tags:s.tags.length?s.tags.filter((e=>"kind"!==e.key&&"endpointType"!==e.key&&"shared"!==e.key)).reduce(((e,t)=>"error"===t.key?Object.assign({},e,{[t.key]:s.tags.find((e=>"errorValue"===e.key)).value||""}):Object.assign({},e,{[t.key]:t.value})),{}):void 0,kind:null===(n=s.tags.find((e=>"kind"===e.key)))||void 0===n?void 0:n.value,shared:null===(a=s.tags.find((e=>"shared"===e.key)))||void 0===a?void 0:a.value}))}return t},p=e=>{var t,n,a,r;const s="local"===(null===(t=e.serviceTags.find((e=>"endpointType"===e.key)))||void 0===t?void 0:t.value)?"localEndpoint":"remoteEndpoint";return"unknown"!==e.serviceName?{[s]:{serviceName:e.serviceName,ipv4:null===(n=e.serviceTags.find((e=>"ipv4"===e.key)))||void 0===n?void 0:n.value,ipv6:null===(a=e.serviceTags.find((e=>"ipv6"===e.key)))||void 0===a?void 0:a.value,port:null===(r=e.serviceTags.find((e=>"port"===e.key)))||void 0===r?void 0:r.value}}:void 0}},50986:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(31423);const r=function(e){(0,a.Z)((function(){e()}))}}}]);
//# sourceMappingURL=zipkinPlugin.458c45e229a927e120d1.js.map