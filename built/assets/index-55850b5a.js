import{j as e,r as o,R}from"./react-27c91ab6.js";import{c as T}from"./react-dom-6d659da2.js";import{s as c}from"./styled-components-d780cbfc.js";import{u as B,a as O,b as f}from"./react-router-e2673604.js";import{q as w,W as v}from"./react-helmet-async-9d8a153d.js";import"./firebase-c3b5bc76.js";import{i as _,g as H,a as W,b as q,o as m,c as h}from"./@firebase-c2b50322.js";import{u as G,G as J,M as K}from"./@react-google-maps-22a47ba6.js";import{W as V}from"./webfontloader-fcc142b2.js";import{B as D}from"./react-router-dom-01cc4c3a.js";import"./invariant-347b0604.js";import"./scheduler-765c72db.js";import"./tslib-89fde298.js";import"./@emotion-019a61c4.js";import"./stylis-bbc0ab72.js";import"./@remix-run-7c975f36.js";import"./prop-types-d5da3958.js";import"./react-fast-compare-d2a20b46.js";import"./shallowequal-a711ff59.js";import"./idb-81bdbf9b.js";(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))g(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&g(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}})();const X=c.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vw;
    background-color: #ffffff;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: space-around;
        height: 12vh;
        align-items: center;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`,Y=c.div`
width: 80%;
font-size: 17px;
display: flex;
position: unset;
top: 0;
left: 0;
width: 100%;
height: 8vw;
background-color:none;
justify-content: space-around;

@media(max-width: 60rem){ /* 950px */
    justify-content: space-around;
    height: 15vh;
    align-items: center;
    margin-right: 5px;
    width: 85%;
    font-size: 26px;
}
`,Q=c.div`
width: 20%;
font-size: 120%;
display: flex;
position: relative;
top: 0;
left: 0;
width: 100%;
height: 8vw;
background-color: none;
justify-content: right;


@media(max-width: 60rem){ /* 950px */
    justify-content: right;
    height: 15vh;
    align-items: center;
    width: 15%;
    & > * {
        margin-bottom: 0.62rem; /* 10px */
    }
}
`,F=c.li`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`,S=c.a`
  font-family: sans-serif;
  font-size: 1.2em;
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  color: #47413b;
  box-sizing: border-box;

  &:before{
    display: block;
    content: "";
    position: absolute;
    top: calc(80% - 5px);
    left: 0;
    height: 0.2rem;
    transform: scaleX(0);
    border-radius: 1px;
    transition: 0.5s;
  }

  &:hover{
    position: relative;
    color: #d60505;
    border-bottom: 5px;
    border-bottom-color: #d40000;
    border-bottom-style: outset;
    transition: 0.09s;
    
    &:before{
        transform: scaleX(1);
        transition: 0.5s;
    }
  }

  @media(max-width: 60rem){ /* 950px */
    font-size: 16px;
    }
`,Z=c.img`
  width: 6vw;
  height: 77%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 10px;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
        top: 7px;
        margin-right: 2px;
    }
`,U="/assets/Logo2-5b675316.png",$=()=>{const t=B();return e.jsx(e.Fragment,{children:e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsx(F,{children:e.jsx(S,{onClick:()=>t("/"),children:e.jsx("h4",{children:"Home"})})}),e.jsx(F,{children:e.jsx(S,{onClick:()=>t("/Menu"),children:e.jsx("h4",{children:"Menu"})})}),e.jsx(F,{children:e.jsx(S,{onClick:()=>t("/SobreNosotros"),children:e.jsx("h4",{children:" Nosotros"})})})]}),e.jsx(Q,{children:e.jsx(Z,{src:U})})]})})},ee=c.svg`
height: 50vh;
width: 100%;
position: fixed;
bottom: 0;
z-index: -1;
path {
    fill: rgb(215, 215, 215);
}
`,se=()=>e.jsxs(e.Fragment,{children:["                                ",e.jsx(ee,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none",children:e.jsx("path",{"fill-opacity":"1",d:"M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,165.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})})]});const re=()=>e.jsx(e.Fragment,{children:e.jsx("footer",{className:"Pie",children:e.jsx("div",{className:"Pie",children:"© Fratello Caffé | Luis Gerardo"})})});function ie(){return e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx(se,{}),e.jsx(re,{})]})}const A=c.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #db0a68;
color: white;
justify-content: space-around;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: column;
align-items: center;

@media(max-width: 60rem){ /* 950px */
display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
    align-items: center;
}
`,I=c.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #107a46;
color: white;
justify-content: center;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: row;
align-items: center;

@media(max-width: 60rem){ /* 950px */
    display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
}
`,L=c.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #093a34;
color: white;
justify-content: center;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: row;
align-items: center;

@media(max-width: 60rem){ /* 950px */
    display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
    align-items: center;
}
`,E=c.button`
    display: inline;
    background: none;
    color: white;
    border: 1px solid;
    border-radius: 50px;
    border-color: white;
    padding: 7px 16px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    width: 10vw;

    &:hover{
        background-color: white;
        color: #2143619f;
        transition: all .2s ease;
    }
    
    @media(max-width: 60rem){ /* 950px */
    max-width: 50%;
    width: auto;
    padding: none;

    & > * {
        width: 100%;
        margin-bottom: 0.62rem; /* 10px */
    }
}
`,z=c.a`
    display: inline;
    background: none;
    margin: 10px;
    border-radius: 100%;
    border-color: none;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    width: 70px;
    height: 70px;
    
    &:hover{
        cursor: pointer;
    }
    
    @media(max-width: 60rem){ /* 950px */
    max-width: 50%;
    width: 50px;
    padding: none;
}
`,k=c.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: auto;
    font-size: 26px;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    @media(max-width: 60rem){ /* 950px */
        width: 100vw;
        flex-direction: column;
        font-size: 20px;
    }
`,N=c.div`
    top: 140px;
    display: flex;
    font-size: 26px;
    position: relative;
    width: 100vw;
    height: auto;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    overflow-y: scroll;

    @media(max-width: 60rem){ /* 950px */
        width: 100vw;
        font-size: 20px;
        top: 55px;
    }
`,oe=c.p`
    display: flex;
    padding-right: 50px;
    padding-left: 30px;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 60rem){ /* 950px */
        padding-left: 10px;
        padding-right: 10px;
    }
`,P=c.div`
    font-size: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media(max-width: 65rem){/* 960px */
        font-size: 20px;
    }
`,C=c.button`
    display: inline;
    position: relative;
    width: 300px;
    height: 300px;
    background-color:#172737;
    margin: 5px;
    padding:10px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    font-size:11px;
    line-height:32px;
    text-transform: uppercase;
    float:left;
    justify-content: center;

    @media(max-width: 60rem){ /* 950px */
    width: 135px;
    height: 135px;
    padding: none;

    & > * {
        width: 100%;
        margin-bottom: 0.62rem; /* 10px */
    }
    }

    &:hover{
        opacity: 0.50;
        -moz-opacity: .50;
        filter: alpha (opacity=50);
        transition: all .2s ease;
    }
`,y=c.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;

    @media(max-width: 60rem){ /* 950px */
        font-size: 12px;
    }

`,x=c.li`

    @media(max-width: 60rem){ /* 950px */
        font-size: 17px;
    }

`,te="/assets/MatchaCaliente-0d433841.png",ne="/assets/FriasIcon-18c58035.png",ae=()=>{const t=B();return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(v,{children:" Bebidas "})}),e.jsx("h1",{className:"Titulos",children:"Bebidas"}),e.jsxs(k,{children:[e.jsxs(y,{children:[e.jsxs(C,{onClick:()=>t("/BebidasFrias"),children:[e.jsx("img",{src:ne,className:"AlimetoIcon"})," "]}),e.jsx("h2",{children:"Frias"})]}),e.jsxs(y,{children:[e.jsx(C,{onClick:()=>t("/BebidasCalientes"),children:e.jsx("img",{src:te,className:"AlimetoIcon"})}),e.jsx("h2",{children:"Calientes"})]})]})]})},de={apiKey:"AIzaSyC35qOPDx7lvHP6mT9g_-Hj2sV8eKbEGb0",authDomain:"fratello-91e12.firebaseapp.com",projectId:"fratello-91e12",storageBucket:"fratello-91e12.appspot.com",messagingSenderId:"949397367537",appId:"1:949397367537:web:05296ee840792c30911750",measurementId:'G-7CNE847Y00"'},ce=_(de);H(ce);W();const p=q(),le=()=>{const[t,j]=o.useState([]),[l,g]=o.useState([]),[r,a]=o.useState([]),[s,d]=o.useState([]),[n,M]=o.useState([]);return o.useEffect(()=>{m(h(p,"Frappes"),i=>{const b=i.docs.map(u=>({...u.data(),id:u.id}));return console.log(b),j(b)})},[]),o.useEffect(()=>{m(h(p,"Limonadas"),i=>{const b=i.docs.map(u=>({...u.data(),id:u.id}));return g(b)})},[]),o.useEffect(()=>{m(h(p,"Smoothies"),i=>{const b=i.docs.map(u=>({...u.data(),id:u.id}));return a(b)})},[]),o.useEffect(()=>{m(h(p,"TisanaFriaFrappe"),i=>{const b=i.docs.map(u=>({...u.data(),id:u.id}));return d(b)})},[]),o.useEffect(()=>{m(h(p,"OtrosFrios"),i=>{const b=i.docs.map(u=>({...u.data(),id:u.id}));return M(b)})},[]),e.jsx(e.Fragment,{children:e.jsxs(N,{className:"Frias",children:[e.jsx("h2",{children:"Bebidas Frias"}),e.jsx("h3",{children:"Frappes"}),e.jsx("ul",{children:t.map(i=>e.jsx(x,{id:i,nombre:i.Nombre,children:i.Nombre},i.id))}),e.jsx("h3",{children:"Limonadas y sodas Italianas"}),e.jsx("ul",{children:l.map(i=>e.jsx(x,{id:i,nombre:i.Nombre,children:i.Nombre},i.id))}),e.jsx("h3",{children:"Smoothies"}),e.jsx("ul",{children:r.map(i=>e.jsx(x,{id:i,nombre:i.Nombre,children:i.Nombre},i.id))}),e.jsx("h3",{children:"Tisanas Frias y Frappe"}),e.jsx("ul",{children:s.map(i=>e.jsx(x,{id:i,nombre:i.Nombre,children:i.Nombre},i.id))}),e.jsx("h3",{children:"Cafés frios y Otros"}),e.jsx("ul",{children:n.map(i=>e.jsx(x,{id:i,nombre:i.Nombre,children:i.Nombre},i.id))})]})})},me=()=>{const[t,j]=o.useState([]),[l,g]=o.useState([]),[r,a]=o.useState([]);return o.useEffect(()=>{m(h(p,"Café"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return console.log(d),j(d)})},[]),o.useEffect(()=>{m(h(p,"TisanaFriaFrappe"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return g(d)})},[]),o.useEffect(()=>{m(h(p,"OtrosCalientes"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return a(d)})},[]),e.jsx(e.Fragment,{children:e.jsxs(N,{className:"Calientes",children:[e.jsx("h2",{children:"Bebidas Calientes"}),e.jsx("h3",{children:"Con Café"}),e.jsx("ul",{children:t.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))}),e.jsx("h3",{children:"Tisanas"}),e.jsx("ul",{children:l.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))}),e.jsx("h3",{children:"Otros"}),e.jsx("ul",{children:r.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))})]})})},he="/assets/CroissantIcon-694cebd3.png",xe="/assets/DedosQuesoIcon-440d0a15.png",pe="/assets/LechugaIcon-809338d6.png",je=()=>{const t=B();return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(v,{children:" Comida "})}),e.jsx("h1",{className:"Titulos",children:"Comida"}),e.jsxs(k,{children:[e.jsxs(y,{children:[e.jsx(C,{onClick:()=>t("/Emparedados"),children:e.jsx("img",{src:he,className:"AlimetoIcon"})}),e.jsx("h2",{children:"Emparedados"}),"x"]}),e.jsxs(y,{children:[e.jsx(C,{onClick:()=>t("/AlitasSnaks"),children:e.jsx("img",{src:xe,className:"AlimetoIcon"})}),e.jsx("h2",{children:"Alitas y Snaks"})]}),e.jsxs(y,{children:[e.jsx(C,{onClick:()=>t("/Ensaladas"),children:e.jsx("img",{src:pe,className:"AlimetoIcon"})}),e.jsx("h2",{children:"Ensaladas"})]})]})]})},ge=()=>{const[t,j]=o.useState([]);return o.useEffect(()=>{m(h(p,"Ensaladas"),l=>{const g=l.docs.map(r=>({...r.data(),id:r.id}));return console.log(g),j(g)})},[]),e.jsx(e.Fragment,{children:e.jsxs(N,{className:"Ensaladas",children:[e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),e.jsx("h3",{children:"Ensaladas"}),e.jsx("ul",{children:t.map(l=>e.jsx(x,{id:l,nombre:l.Nombre,children:l.Nombre},l.id))}),e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{}),"                ",e.jsx("br",{})]})})},ue=()=>{const[t,j]=o.useState([]),[l,g]=o.useState([]),[r,a]=o.useState([]);return o.useEffect(()=>{m(h(p,"CroissantBaguette"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return console.log(d),j(d)})},[]),o.useEffect(()=>{m(h(p,"Hamburguesas"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return g(d)})},[]),o.useEffect(()=>{m(h(p,"ClubSandwich"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return a(d)})},[]),e.jsx(e.Fragment,{children:e.jsxs(N,{className:"Emparedados",children:[e.jsx("h2",{children:"Emparedados"}),e.jsx("h3",{children:"Croissant y Baguette"}),e.jsx("ul",{children:t.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))}),e.jsx("h3",{children:"Hambueguesas"}),e.jsxs("ul",{children:[l.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id)),e.jsx("p",{children:"Puede ser de res o de pollo"})]}),e.jsx("h3",{children:"Club Sandwich"}),e.jsx("ul",{children:r.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))})]})})},fe=()=>{const[t,j]=o.useState([]),[l,g]=o.useState([]);return o.useEffect(()=>{m(h(p,"AlitasTiras"),r=>{const a=r.docs.map(s=>({...s.data(),id:s.id}));return console.log(a),j(a)})},[]),o.useEffect(()=>{m(h(p,"Snaks"),r=>{const a=r.docs.map(s=>({...s.data(),id:s.id}));return g(a)})},[]),e.jsx(e.Fragment,{children:e.jsxs(N,{className:"AlitasSnaks",children:[e.jsx("h2",{children:"Alitas y Snaks"}),e.jsx("h3",{children:"Alitas y Tiras de pollo"}),e.jsx("ul",{children:t.map(r=>e.jsx(x,{id:r,nombre:r.Nombre,children:r.Nombre},r.id))}),e.jsx("h3",{children:"Snaks"}),e.jsx("ul",{children:l.map(r=>e.jsx(x,{id:r,nombre:r.Nombre,children:r.Nombre},r.id))})]})})},be=()=>{const[t,j]=o.useState([]),[l,g]=o.useState([]),[r,a]=o.useState([]);return o.useEffect(()=>{m(h(p,"Pay"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return console.log(d),j(d)})},[]),o.useEffect(()=>{m(h(p,"Crepas"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return console.log(d),g(d)})},[]),o.useEffect(()=>{m(h(p,"Waffle"),s=>{const d=s.docs.map(n=>({...n.data(),id:n.id}));return console.log(d),a(d)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(v,{children:" Postres "})}),e.jsxs(N,{className:"Postres",children:[e.jsx("h2",{children:"Postres"}),e.jsx("h3",{children:"Pay de queso"}),e.jsx("ul",{children:t.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))}),e.jsx("h3",{children:"Crepas"}),e.jsx("ul",{children:l.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))}),e.jsx("h3",{children:"Waffles"}),e.jsx("ul",{children:r.map(s=>e.jsx(x,{id:s,nombre:s.Nombre,children:s.Nombre},s.id))})]})]})},we=()=>{const t=B();return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(v,{children:" Menu "})}),e.jsx(A,{id:"FondoBebida",children:e.jsxs("div",{className:"ContBotonComidas",children:[e.jsx("h1",{children:"Bebidas"}),e.jsx(E,{onClick:()=>t("/Bebidas"),children:"Ver"})]})}),e.jsx(I,{id:"FondoComida",children:e.jsxs("div",{className:"ContBotonComidas",children:[e.jsx("h1",{children:"Comida"}),e.jsx(E,{onClick:()=>t("/Comida"),children:"Ver"})]})}),e.jsx(L,{id:"FondoPostre",children:e.jsxs("div",{className:"ContBotonComidas",children:[e.jsx("h1",{children:"Postres"}),e.jsx(E,{onClick:()=>t("/Postres"),children:"Ver"})]})})]})},ve="/assets/MatchaPromocional-5f14dc51.png",Ne="/assets/CafeFrio---01067cb1.png",Ce="/assets/CroissantPromo-a2080ef2.png",ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(v,{children:" Home "})}),e.jsxs(A,{className:"FondoPromo_1",children:[e.jsxs(P,{children:[e.jsx("h2",{children:"- Café Frio -"}),e.jsx("h3",{children:"¡No te quedes Esperando!"})]}),e.jsx("img",{src:Ne,className:"Promocional"})]}),e.jsxs(I,{className:"FondoPromo_2",children:[e.jsx("img",{src:ve,className:"Promocional"}),e.jsxs(P,{children:[e.jsx("h2",{children:"Mucho Matcha"}),e.jsx("h3",{children:"¡Pídelo Caliente, Helado o Frappuccino!"})]})]}),e.jsxs(L,{className:"FondoPromo_3",children:[e.jsxs(P,{children:[e.jsx("h2",{children:"Croissant"}),e.jsx("h4",{children:"¡Pídelo de Pollo, Jamón de Pierna o Jamón de Pavo!"})]}),e.jsx("img",{src:Ce,className:"Promocional"})]})]}),Be="/assets/facebook-ad3f6a75.svg",Fe="/assets/instagram-544f45ef.svg",Se=()=>{const{isLoaded:t}=G({googleMapsApiKey:"AIzaSyCb1rbWYvg08zA8AWdMl90w7gJJ0FE_TCw"});return t?e.jsx(Ee,{}):e.jsx(e.Fragment,{children:e.jsx("h4",{children:"Loading ..."})})},Ee=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"FondoNosotros",children:[e.jsx(w,{children:e.jsx(v,{children:" Nosotros "})}),e.jsxs(k,{className:"Nosotros",children:[e.jsx("h1",{children:"Nosotros"}),e.jsx(oe,{children:"Nosotros somos Fratello Café, un lugar cafetero que ha estado vigente desde 2011. Con más de una década de experiencia, seguimos sirviendo deliciosos cafés y creando momentos memorables. ¡Te esperamos con una taza de café!"})]}),e.jsxs("div",{className:"Mapa-RedSocial",children:[e.jsx(J,{zoom:10,center:{lat:21.680463,lng:-102.587872},mapContainerClassName:"Mapa",children:e.jsx(K,{position:{lat:21.680463,lng:-102.587872}})}),e.jsxs("div",{className:"ContBotonRedSocial",children:[e.jsx(z,{href:"https://www.facebook.com/fratellocaffevhj/photos",target:"_blank",className:"BotonRedSocial",children:e.jsx("img",{src:Be})}),e.jsx(z,{href:"https://www.instagram.com/fratellocaffevh/",target:"_blank",className:"BotonRedSocial",children:e.jsx("img",{src:Fe})})]})]})]})});V.load({google:{families:["Raleway: 400, 500, 700","sans-serif"]}});T.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode,{children:e.jsxs(D,{children:[e.jsx("div",{children:e.jsxs(O,{children:[e.jsx(f,{path:"/Bebidas",element:e.jsx(ae,{})}),e.jsx(f,{path:"/BebidasFrias",element:e.jsx(le,{})}),e.jsx(f,{path:"/BebidasCalientes",element:e.jsx(me,{})}),e.jsx(f,{path:"/Comida",element:e.jsx(je,{})}),e.jsx(f,{path:"/Emparedados",element:e.jsx(ue,{})}),e.jsx(f,{path:"/AlitasSnaks",element:e.jsx(fe,{})}),e.jsx(f,{path:"/Ensaladas",element:e.jsx(ge,{})}),e.jsx(f,{path:"/Postres",element:e.jsx(be,{})}),e.jsx(f,{path:"/Menu",element:e.jsx(we,{})}),e.jsx(f,{path:"/SobreNosotros",element:e.jsx(Se,{})}),e.jsx(f,{path:"/",element:e.jsx(ye,{})})]})}),e.jsx(ie,{})]})}));
