import{q as a,o as l,l as c,s as n,v as r,x as s,y as p}from"./entry.6e0e2c0c.js";const g={methods:{logNovice(){console.log("Clicked Novice")},logInsane(){console.log("Clicked Insane")},logLightning(){console.log("Clicked Lightning")}}},h={class:"flex flex-col h-screen pt-20 bg-red-100"},x=n("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),v={class:"flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max"},f=n("button",{id:"novice",class:"duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 thing"}," Novice ",-1),m=n("button",{id:"insane",class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 thing"}," Insane ",-1),b=n("button",{id:"lightning",class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 thing"}," Lightning ",-1);function $(o,e,i,_,u,d){const t=p;return l(),c("div",h,[x,n("div",v,[r(t,{to:"/novice"},{default:s(()=>[f]),_:1}),r(t,{to:"/insane"},{default:s(()=>[m]),_:1}),r(t,{to:"/lightning"},{default:s(()=>[b]),_:1})])])}const y=a(g,[["render",$]]),E=()=>({var1:null,var2:null}),N={SET_VAR_1(o,e){console.log("SET_VAR_1",e),o.var1=e},SET_VAR_2(o,e){console.log("SET_VAR_2",e),o.var2=e}},k={};function w(o,e,i,_,u,d){const t=y;return l(),c("div",null,[r(t)])}const S=a(k,[["render",w]]);export{S as default,N as mutations,E as state};
