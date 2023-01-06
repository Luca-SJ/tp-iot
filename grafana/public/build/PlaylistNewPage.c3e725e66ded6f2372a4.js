"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9975],{94969:(e,a,s)=>{s.d(a,{H:()=>B});var l,r,t,n,i=s(68404),d=s(25004),o=s(65737),c=s(3218),u=s(65678),h=s(4645),g=s(54761),m=s(8006),p=s(71438),b=s(89496),v=s(20425),x=s(19677),j=s(52423),y=s(64681),f=s.n(y),w=s(16755),I=s(81691),N=s(99500),k=s(23734),C=s(69980),$=s(45916);const P=e=>{let{items:a,onDelete:s}=e;const i=(0,w.wW)(O);if(null==a||!a.length)return l||(l=(0,$.jsx)("div",{children:(0,$.jsx)("em",{children:"Playlist is empty. Add dashboards below."})}));const o=e=>{var a;let s="dashboard_by_tag"===e.type?"apps":"tag-alt";const l=[],n=null===(a=e.dashboards)||void 0===a?void 0:a[0];if(e.dashboards)if("dashboard_by_tag"===e.type)l.push((0,$.jsx)(C.e,{label:e.value,removeIcon:!1,count:0},e.value)),n?l.push((0,$.jsxs)("span",{children:["  ",f()("dashboard",e.dashboards.length,!0)]},"info")):(s="exclamation-triangle",l.push(t||(t=(0,$.jsx)("span",{children:"  No dashboards found"},"info"))));else if(n){var d;l.push(e.dashboards.length>1?(0,$.jsxs)("span",{children:["Multiple items found: $",e.value]},"info"):(0,$.jsx)("span",{children:null!==(d=n.name)&&void 0!==d?d:e.value},"info"))}else s="exclamation-triangle",l.push((0,$.jsxs)("span",{children:["  Not found: ",e.value]},"info"));else l.push(r||(r=(0,$.jsx)(I.$,{},"spinner")));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(N.J,{name:s,className:i.rightMargin},"icon"),l]})};return(0,$.jsx)($.Fragment,{children:a.map(((e,a)=>(0,$.jsx)(x._l,{draggableId:`${a}`,index:a,children:l=>(0,$.jsxs)("div",Object.assign({className:i.row,ref:l.innerRef},l.draggableProps,l.dragHandleProps,{role:"row",children:[(0,$.jsx)("div",{className:i.actions,role:"cell","aria-label":`Playlist item, ${e.type}, ${e.value}`,children:o(e)}),(0,$.jsxs)("div",{className:i.actions,children:[(0,$.jsx)(k.h,{name:"times",size:"md",onClick:()=>s(a),"aria-label":d.wl.pages.PlaylistForm.itemDelete,type:"button"}),n||(n=(0,$.jsx)(N.J,{title:"Drag and drop to reorder",name:"draggabledots",size:"md"}))]})]}))},`${a}/${e.value}`)))})};function O(e){return{row:j.css`
      padding: 6px;
      background: ${e.colors.background.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3px;

      border: 1px solid ${e.colors.border.medium};
      &:hover {
        border: 1px solid ${e.colors.border.strong};
      }
    `,rightMargin:j.css`
      margin-right: 5px;
    `,actions:j.css`
      align-items: center;
      justify-content: center;
      display: flex;
    `,settings:j.css`
      label: settings;
      text-align: right;
    `}}var S;const _=e=>{var a;let{items:s,deleteItem:l,moveItem:r}=e;return(0,$.jsxs)("div",{className:"gf-form-group",children:[S||(S=(0,$.jsx)("h3",{className:"page-headering",children:"Dashboards"})),(0,$.jsx)(x.Z5,{onDragEnd:e=>{var a;e.destination&&r(e.source.index,null===(a=e.destination)||void 0===a?void 0:a.index)},children:(0,$.jsx)(x.bK,{droppableId:"playlist-list",direction:"vertical",children:e=>(0,$.jsxs)("div",Object.assign({ref:e.innerRef},e.droppableProps,{children:[a||(a=(0,$.jsx)(P,{items:s,onDelete:l})),e.placeholder]}))})})]})};var A,D=s(66015),F=s(11603);const B=e=>{var a;let{onSubmit:s,playlist:l}=e;const[r,t]=(0,i.useState)(!1),{name:n,interval:x,items:j}=l,y=(0,i.useMemo)((()=>()=>(0,v.O)().tags({kind:["dashboard"]})),[]),{items:f,addById:w,addByTag:I,deleteItem:N,moveItem:k}=function(e){const[a,s]=(0,i.useState)(null!=e?e:[]);(0,D.Z)((async()=>{for(const e of a)if(!e.dashboards)return void s(await(0,F.jc)(a))}),[a]);const l=(0,i.useCallback)((e=>{e&&s([...a,{type:"dashboard_by_uid",value:e.uid}])}),[a]),r=(0,i.useCallback)((e=>{const l=e[0];if(!l||a.find((e=>e.value===l)))return;const r={type:"dashboard_by_tag",value:l};s([...a,r])}),[a]),t=(0,i.useCallback)(((e,l)=>{if(e===l||!a[e])return;const r=Array.from(a),[t]=r.splice(e,1);r.splice(l,0,t),s(r)}),[a]),n=(0,i.useCallback)((e=>{const l=a.slice();l.splice(e,1),s(l)}),[a]);return{items:a,addById:l,addByTag:r,deleteItem:n,moveItem:t}}(j);return(0,$.jsx)("div",{children:(0,$.jsx)(c.l,{onSubmit:e=>{t(!0),s(Object.assign({},e,{items:f}))},validateOn:"onBlur",children:e=>{var s,l;let{register:t,errors:i}=e;const c=0===f.length||Object.keys(i).length>0;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u.g,{label:"Name",invalid:!!i.name,error:null==i||null===(s=i.name)||void 0===s?void 0:s.message,children:(0,$.jsx)(h.I,Object.assign({type:"text"},t("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:n,"aria-label":d.wl.pages.PlaylistForm.name}))}),(0,$.jsx)(u.g,{label:"Interval",invalid:!!i.interval,error:null==i||null===(l=i.interval)||void 0===l?void 0:l.message,children:(0,$.jsx)(h.I,Object.assign({type:"text"},t("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!=x?x:"5m","aria-label":d.wl.pages.PlaylistForm.interval}))}),a||(a=(0,$.jsx)(_,{items:f,deleteItem:N,moveItem:k})),(0,$.jsxs)("div",{className:"gf-form-group",children:[A||(A=(0,$.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),(0,$.jsx)(u.g,{label:"Add by title",children:(0,$.jsx)(p.o,{id:"dashboard-picker",onChange:w},f.length)}),(0,$.jsx)(u.g,{label:"Add by tag",children:(0,$.jsx)(b.D,{isClearable:!0,tags:[],hideValues:!0,tagOptions:y,onChange:I,placeholder:"Select a tag"})})]}),(0,$.jsxs)(g.Lh,{children:[(0,$.jsx)(m.zx,{type:"submit",variant:"primary",disabled:c,icon:r?"fa fa-spinner":void 0,children:"Save"}),(0,$.jsx)(m.Qj,{variant:"secondary",href:`${o.v.appSubUrl}/playlists`,children:"Cancel"})]})]})}})})}},7342:(e,a,s)=>{s.r(a),s.d(a,{PlaylistNewPage:()=>o,default:()=>c});var l=s(68404),r=s(80795),t=s(37417),n=s(94969),i=s(11603),d=s(45916);const o=()=>{const[e]=(0,l.useState)((0,i.d5)());return(0,d.jsx)(t.T,{navId:"dashboards/playlists",pageNav:{text:"New playlist",subTitle:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."},children:(0,d.jsx)(t.T.Contents,{children:(0,d.jsx)(n.H,{onSubmit:async e=>{await(0,i.cg)(e),r.E1.push("/playlists")},playlist:e})})})},c=o}}]);
//# sourceMappingURL=PlaylistNewPage.c3e725e66ded6f2372a4.js.map