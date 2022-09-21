import{q as i,s as u,o as a,l as c,v as n,x as l,y as s}from"./entry.2159be06.js";const d={},p={class:"flex flex-col h-screen pt-20 bg-red-100"},h=n("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),v={class:"flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max"};function f(e,o){const r=u("router-link");return a(),c("div",p,[h,n("div",v,[l(r,{to:{path:"/novice"}},{default:s(()=>[n("button",{onClick:o[0]||(o[0]=(...t)=>e.logNovice&&e.logNovice(...t)),id:"novice",class:"duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 thing"}," Novice ")]),_:1}),l(r,{to:{path:"/insane"}},{default:s(()=>[n("button",{onClick:o[1]||(o[1]=(...t)=>e.logInsane&&e.logInsane(...t)),id:"insane",class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 thing"}," Insane ")]),_:1}),l(r,{to:{path:"/lightning"}},{default:s(()=>[n("button",{onClick:o[2]||(o[2]=(...t)=>e.logLightning&&e.logLightning(...t)),id:"lightning",class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 thing"}," Lightning ")]),_:1})])])}const x=i(d,[["render",f]]),m={methods:{logNovice(){console.log("Clicked Novice")},logInsane(){console.log("Clicked Insane")},logLightning(){console.log("Clicked Lightning")}},mounted(){this.$refs.Btn.click()}};function b(e,o,r,t,_,k){const g=x;return a(),c("div",null,[l(g)])}const C=i(m,[["render",b]]);export{C as default};