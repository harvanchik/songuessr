import{e as u,o as c,l as p,v as o,y as s,z as a,u as l,D as d,s as m}from"./entry.ced68b55.js";import{u as f}from"./useDifficulty.cb00e925.js";import{u as x}from"./useGenre.d36c514b.js";const g={class:"flex flex-col h-screen pt-20 bg-red-100"},_=o("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),h={class:"flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max"},b=u({__name:"menu",setup(v){const{setDifficulty:t}=f();return(i,e)=>{const n=d;return c(),p("div",g,[_,o("div",h,[s(n,{to:"/info"},{default:a(()=>[o("button",{id:"novice",var1:"1",onClick:e[0]||(e[0]=r=>l(t)("novice")),class:"duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 thing"}," Novice ")]),_:1}),s(n,{to:"/info"},{default:a(()=>[o("button",{id:"insane",var1:"2",onClick:e[1]||(e[1]=r=>l(t)("insane")),class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 thing"}," Insane ")]),_:1}),s(n,{to:"/info"},{default:a(()=>[o("button",{id:"lightning",var1:"3",onClick:e[2]||(e[2]=r=>l(t)("lightning")),class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 thing"}," Lightning ")]),_:1})])])}}}),C=u({__name:"index",setup(v){const{difficulty:t}=f(),{genre:i}=x();return m({titleTemplate:()=>"Difficulty: "+t.value+" Genre: "+i.value+" | Songuessr"}),(e,n)=>{const r=b;return c(),p("div",null,[s(r)])}}});export{C as default};