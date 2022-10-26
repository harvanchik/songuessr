import{e as b,s as g,o as l,l as s,v as e,u as t,t as d,x as i,y as a,z as u,A as _}from"./entry.41fe9861.js";import{u as f}from"./useDifficulty.7322b960.js";import{u as y}from"./useScore.1beea069.js";const w={class:"flex flex-col min-h-screen pt-20 pb-20 bg-red-100"},k=e("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),S={class:"flex flex-col max-w-md mx-auto mt-3 space-y-5 text-5xl"},C={key:0,class:"mx-auto text-5xl text-green-500 w-max"},I={key:1,class:"mx-auto text-5xl text-purple-500 w-max"},T={key:2,class:"mx-auto text-5xl text-blue-500 w-max"},B=e("p",{class:"p-5 mx-auto text-lg text-black bg-white rounded-lg"},"-- Song Clip Player --",-1),E=e("br",null,null,-1),N={key:3,class:"novice-buttons"},V=e("br",null,null,-1),$=e("button",{id:"option2",class:"duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"}," Incorrect ",-1),D=e("br",null,null,-1),z=e("button",{id:"option3",class:"duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"}," Incorrect ",-1),A=e("br",null,null,-1),H=e("button",{id:"option4",class:"duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"}," Incorrect ",-1),P=e("br",null,null,-1),j={key:4,class:"expert-buttons"},q=e("input",{id:"textInput",class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"},null,-1),F=e("br",null,null,-1),G=e("br",null,null,-1),Q=b({__name:"game",setup(J){const{difficulty:o}=f(),{score:x,time:p,addScore:h,resetScore:m}=y(),c=()=>o.value==="novice"||o.value==="insane"?x.value:p.value;return g({titleTemplate:()=>"Time: "+p.value+" Score: "+x.value+" | Songuessr"}),(K,r)=>{const n=_;return l(),s("div",w,[k,e("div",S,[t(o)==="novice"?(l(),s("h3",C,"Score: "+d(c())+" / 10",1)):i("",!0),t(o)==="insane"?(l(),s("h3",I,"Score: "+d(c()),1)):i("",!0),t(o)==="lightning"?(l(),s("h3",T,"Time: "+d(c())+" seconds",1)):i("",!0),B,E,t(o)==="novice"?(l(),s("div",N,[a(n,{to:"/game"},{default:u(()=>[e("button",{id:"option1",onClick:r[0]||(r[0]=v=>t(h)(1)),class:"duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"}," Correct "),V]),_:1}),a(n,{to:"/game"},{default:u(()=>[$,D]),_:1}),a(n,{to:"/game"},{default:u(()=>[z,A]),_:1}),a(n,{to:"/game"},{default:u(()=>[H,P]),_:1})])):i("",!0),t(o)==="insane"||t(o)==="lightning"?(l(),s("div",j,[q,a(n,{to:"/game"},{default:u(()=>[e("button",{id:"enterText",onClick:r[1]||(r[1]=v=>t(h)(1)),class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"}," Enter "),F]),_:1})])):i("",!0),a(n,{to:"/"},{default:u(()=>[e("button",{id:"exit",class:"duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1",onClick:r[2]||(r[2]=v=>t(m)())}," Exit "),G]),_:1})])])}}});export{Q as default};
