import{c as r,j as s,L as a,I as t,d as o,f as c,M as l,r as n,b as m,P as v}from"./index-4JuXVryl.js";import{M as x,B as h}from"./movieInfo-KzNAT1bg.js";function j({dataLoad:e}){const i=r();return s.jsxs("div",{className:"favorites__item",children:[s.jsxs("div",{className:"favorites__leftbox",children:[s.jsx(a,{to:`/movie/${e.imdbID}`,children:s.jsx("div",{className:"favorites__poster",children:s.jsx(t,{src:e.Poster,alt:e.Title,height:"100%"})})}),s.jsx("div",{onClick:()=>{i(o.delItemMovie(e.imdbID)),i(c.delMovie(e.imdbID))},className:"favorites__delitem",children:s.jsx("h3",{children:s.jsx(l,{name:"MdDelete"})})})]}),s.jsxs("div",{className:"favorites__info",children:[s.jsx("h3",{children:e.Title}),s.jsx("p",{children:s.jsx("span",{children:e.Type})}),s.jsx(x,{dataLoad:e}),s.jsx("p",{children:e.Plot})]})]})}const _=n.memo(()=>{const e=m(i=>i.favorData.movieData);return s.jsxs("div",{className:"favorites",children:[s.jsxs("div",{className:"favorites__header",children:[s.jsx("h2",{children:"favorites"}),s.jsx(h,{})]}),s.jsx("div",{className:"favorites__itembox",children:e?e.map(i=>s.jsx(j,{dataLoad:i},i.imdbID)):s.jsx(v,{})})]})});export{_ as default};
