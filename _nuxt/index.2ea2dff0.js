import{f as d,e as v,o as c,l as p,s as r,t as _,u as l,v as i,x as u,y as g,q as x}from"./entry.cf4f4674.js";const h=()=>{const t=d("difficulty",()=>"insane");return{difficulty:t,setDifficulty:n=>{t.value=n}}},m={class:"flex flex-col h-screen pt-20 bg-red-100"},b=r("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),y={class:"flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max"},$=v({__name:"menu",setup(t){const{difficulty:e,setDifficulty:n}=h();return(f,o)=>{const s=g;return c(),p("div",m,[b,r("h2",null,_(l(e)),1),r("div",y,[i(s,{to:"/novice"},{default:u(()=>[r("button",{id:"novice",var1:"1",onClick:o[0]||(o[0]=a=>l(n)("novice")),class:"duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 thing"}," Novice ")]),_:1}),i(s,{to:"/insane"},{default:u(()=>[r("button",{id:"insane",var1:"2",onClick:o[1]||(o[1]=a=>l(n)("insane")),class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 thing"}," Insane ")]),_:1}),i(s,{to:"/lightning"},{default:u(()=>[r("button",{id:"lightning",var1:"3",onClick:o[2]||(o[2]=a=>l(n)("lightning")),class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 thing"}," Lightning ")]),_:1})])])}}}),V=()=>({var1:null,var2:null}),C={SET_VAR_1(t,e){console.log("SET_VAR_1",e),t.var1=e},SET_VAR_2(t,e){console.log("SET_VAR_2",e),t.var2=e}},S={};function k(t,e,n,f,o,s){const a=$;return c(),p("div",null,[i(a)])}const D=x(S,[["render",k]]);export{D as default,C as mutations,V as state};
