import{e,j as n,M as r}from"./index-BGTdml55.js";function c(){const s=e();return n.jsx(n.Fragment,{children:n.jsx("div",{className:"btnback",onClick:()=>s(-1),children:n.jsx("h2",{children:n.jsx(r,{name:"MdArrowBackIos"})})})})}function l({dataLoad:s}){return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:[n.jsx("span",{children:"Genre:"})," ",s.Genre]}),n.jsxs("p",{children:[n.jsx("span",{children:"Director:"})," ",s.Director]}),n.jsxs("p",{children:[n.jsx("span",{children:"Actors:"})," ",s.Actors]}),n.jsxs("p",{children:[n.jsx("span",{children:"Writer:"})," ",s.Writer]}),n.jsxs("p",{children:[n.jsx("span",{children:"Country: "}),s.Country]}),n.jsxs("p",{children:[n.jsx("span",{children:"Language:"})," ",s.Language]}),s.Ratings.length>=2?n.jsxs("p",{children:[n.jsx("span",{children:"Ratings IMD:"})," ",s.Ratings[0].Value,n.jsx("span",{children:" | "}),s.Ratings[1].Value]}):n.jsxs("p",{children:[n.jsx("span",{children:"Ratings IMD: "}),s.imdbRating]}),n.jsxs("h4",{children:[n.jsx("span",{children:"Year:"})," ",s.Year]})]})}export{c as B,l as M};