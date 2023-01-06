"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8715],{75809:(e,s,a)=>{a.d(s,{f:()=>c});var t=a(68404),i=a(7197),r=a(68374),o=a(64850),n=a(81135),l=a(97928),d=a(45916);const c=e=>{let{teamId:s,roleOptions:a,disabled:c,onApplyRoles:m,pendingRoles:u,apply:p=!1,maxWidth:h}=e;const[{loading:b,value:g=[]},f]=(0,i.Z)((async()=>{try{if(p&&Boolean(null==u?void 0:u.length))return u;if(r.Vt.hasPermission(o.bW.ActionTeamsRolesList))return await(0,l._C)(s)}catch(e){console.error("Error loading options",e)}return[]}),[s,u]);(0,t.useEffect)((()=>{f()}),[s,f,u]);const x=r.Vt.hasPermission(o.bW.ActionTeamsRolesAdd)&&r.Vt.hasPermission(o.bW.ActionTeamsRolesRemove);return(0,d.jsx)(n.I,{apply:p,onRolesChange:async e=>{p?m&&m(e):(await(0,l.u7)(e,s),await f())},roleOptions:a,appliedRoles:g,isLoading:b,disabled:c,basicRoleDisabled:!0,canUpdateRoles:x,maxWidth:h})}},55801:(e,s,a)=>{a.d(s,{C:()=>l});var t=a(68404),i=a(25981),r=a(68374),o=a(64850),n=a(97928);const l=e=>{const[s,a]=(0,t.useState)(e),{value:l=[]}=(0,i.Z)((async()=>r.Vt.licensedAccessControlEnabled()&&r.Vt.hasPermission(o.bW.ActionRolesList)?(0,n.ul)(s):Promise.resolve([])),[s]);return[{roleOptions:l},a]}},92161:(e,s,a)=>{a.r(s),a.d(s,{CreateTeam:()=>v,default:()=>y});var t,i=a(68404),r=a(93570),o=a(80795),n=a(3218),l=a(71980),d=a(65678),c=a(4645),m=a(8006),u=a(37417),p=a(75809),h=a(97928),b=a(55801),g=a(68374),f=a(64850),x=a(45916);const R={icon:"users-alt",id:"team-new",text:"New team",subTitle:"Create a new team. Teams let you grant permissions to a group of users.",breadcrumbs:[{title:"Configuration",url:"org/teams"}]},v=()=>{var e;const s=g.Vt.user.orgId,[a,v]=(0,i.useState)([]),[{roleOptions:y}]=(0,b.C)(s),j=g.Vt.hasPermission(f.bW.ActionUserRolesAdd)&&g.Vt.hasPermission(f.bW.ActionUserRolesRemove);return(0,x.jsx)(u.T,{navId:"teams",pageNav:R,children:(0,x.jsx)(u.T.Contents,{children:(0,x.jsx)(n.l,{onSubmit:async e=>{const s=await(0,r.i)().post("/api/teams",e);if(s.teamId){try{await g.Vt.fetchUserPermissions(),g.Vt.licensedAccessControlEnabled()&&j&&await(0,h.u7)(a,s.teamId,s.orgId)}catch(e){console.error(e)}o.E1.push(`/org/teams/edit/${s.teamId}`)}},children:s=>{let{register:i,errors:r}=s;return(0,x.jsxs)(l.C,{children:[(0,x.jsx)(d.g,{label:"Name",required:!0,invalid:!!r.name,error:"Team name is required",children:(0,x.jsx)(c.I,Object.assign({},i("name",{required:!0}),{id:"team-name"}))}),g.Vt.licensedAccessControlEnabled()&&(e||(e=(0,x.jsx)(d.g,{label:"Role",children:(0,x.jsx)(p.f,{teamId:0,roleOptions:y,disabled:!1,apply:!0,onApplyRoles:v,pendingRoles:a,maxWidth:"100%"})}))),(0,x.jsx)(d.g,{label:"Email",description:"This is optional and is primarily used for allowing custom team avatars.",children:(0,x.jsx)(c.I,Object.assign({},i("email"),{type:"email",id:"team-email",placeholder:"email@test.com"}))}),t||(t=(0,x.jsx)("div",{className:"gf-form-button-row",children:(0,x.jsx)(m.zx,{type:"submit",variant:"primary",children:"Create"})}))]})}})})})},y=v}}]);
//# sourceMappingURL=CreateTeam.ae62afa672974daf02fb.js.map