import{r as o}from"./react-27c91ab6.js";import{i as f,g as k,r as J,j as P,p as L,m as T,A as D,s as _,a as z}from"./@remix-run-7c975f36.js";/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}const U=o.createContext(null),V=o.createContext(null),y=o.createContext(null),R=o.createContext(null),C=o.createContext({outlet:null,matches:[],isDataRoute:!1}),M=o.createContext(null);function b(){return o.useContext(R)!=null}function O(){return b()||f(!1),o.useContext(R).location}function j(e){o.useContext(y).static||o.useLayoutEffect(e)}function ne(){let{isDataRoute:e}=o.useContext(C);return e?H():W()}function W(){b()||f(!1);let e=o.useContext(U),{basename:t,navigator:r}=o.useContext(y),{matches:n}=o.useContext(C),{pathname:l}=O(),a=JSON.stringify(k(n).map(i=>i.pathnameBase)),c=o.useRef(!1);return j(()=>{c.current=!0}),o.useCallback(function(i,u){if(u===void 0&&(u={}),!c.current)return;if(typeof i=="number"){r.go(i);return}let d=J(i,JSON.parse(a),l,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:P([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,a,l,e])}function q(e,t){return G(e,t)}function G(e,t,r){b()||f(!1);let{navigator:n}=o.useContext(y),{matches:l}=o.useContext(C),a=l[l.length-1],c=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let i=O(),u;if(t){var d;let p=typeof t=="string"?L(t):t;s==="/"||(d=p.pathname)!=null&&d.startsWith(s)||f(!1),u=p}else u=i;let v=u.pathname||"/",g=s==="/"?v:v.slice(s.length)||"/",m=T(e,{pathname:g}),h=Z(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},c,p.params),pathname:P([s,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:P([s,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,r);return t&&h?o.createElement(R.Provider,{value:{location:E({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:D.Pop}},h):h}function K(){let e=S(),t=z(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:l},r):null,a)}const Q=o.createElement(K,null);class X extends o.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?o.createElement(C.Provider,{value:this.props.routeContext},o.createElement(M.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(e){let{routeContext:t,match:r,children:n}=e,l=o.useContext(U);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(C.Provider,{value:t},n)}function Z(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var l;if((l=r)!=null&&l.errors)e=r.matches;else return null}let a=e,c=(n=r)==null?void 0:n.errors;if(c!=null){let s=a.findIndex(i=>i.route.id&&(c==null?void 0:c[i.route.id]));s>=0||f(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,i,u)=>{let d=i.route.id?c==null?void 0:c[i.route.id]:null,v=null;r&&(v=i.route.errorElement||Q);let g=t.concat(a.slice(0,u+1)),m=()=>{let h;return d?h=v:i.route.Component?h=o.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=s,o.createElement(Y,{match:i,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||u===0)?o.createElement(X,{location:r.location,revalidation:r.revalidation,component:v,error:d,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var B;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(B||(B={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function $(e){let t=o.useContext(U);return t||f(!1),t}function w(e){let t=o.useContext(V);return t||f(!1),t}function A(e){let t=o.useContext(C);return t||f(!1),t}function F(e){let t=A(),r=t.matches[t.matches.length-1];return r.route.id||f(!1),r.route.id}function S(){var e;let t=o.useContext(M),r=w(x.UseRouteError),n=F(x.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function H(){let{router:e}=$(B.UseNavigateStable),t=F(x.UseNavigateStable),r=o.useRef(!1);return j(()=>{r.current=!0}),o.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,E({fromRouteId:t},a)))},[e,t])}function ee(e){f(!1)}function oe(e){let{basename:t="/",children:r=null,location:n,navigationType:l=D.Pop,navigator:a,static:c=!1}=e;b()&&f(!1);let s=t.replace(/^\/*/,"/"),i=o.useMemo(()=>({basename:s,navigator:a,static:c}),[s,a,c]);typeof n=="string"&&(n=L(n));let{pathname:u="/",search:d="",hash:v="",state:g=null,key:m="default"}=n,h=o.useMemo(()=>{let p=_(u,s);return p==null?null:{location:{pathname:p,search:d,hash:v,state:g,key:m},navigationType:l}},[s,u,d,v,g,m,l]);return h==null?null:o.createElement(y.Provider,{value:i},o.createElement(R.Provider,{children:r,value:h}))}function ae(e){let{children:t,location:r}=e;return q(N(t),r)}var I;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(I||(I={}));new Promise(()=>{});function N(e,t){t===void 0&&(t=[]);let r=[];return o.Children.forEach(e,(n,l)=>{if(!o.isValidElement(n))return;let a=[...t,l];if(n.type===o.Fragment){r.push.apply(r,N(n.props.children,a));return}n.type!==ee&&f(!1),!n.props.index||!n.props.children||f(!1);let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=N(n.props.children,a)),r.push(c)}),r}export{oe as R,ae as a,ee as b,ne as u};