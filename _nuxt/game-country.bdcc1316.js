import{e as f,s as x,o as r,l as o,v as t,u as e,t as a,x as s,y as w,z as g,A as b}from"./entry.306785c5.js";import{u as v}from"./useDifficulty.c41b330a.js";import{u as k}from"./useGenre.d91a688e.js";import{u as B}from"./useScore.d47c651d.js";const S={class:"flex flex-col min-h-screen pt-20 pb-20 bg-red-100"},z=t("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),R={class:"flex flex-col max-w-md mx-auto mt-3 space-y-5 text-5xl"},C={key:0,class:"mx-auto text-5xl text-green-500 w-max"},A={key:1,class:"mx-auto text-5xl text-purple-500 w-max"},L={key:2,class:"mx-auto text-5xl text-blue-500 w-max"},N=t("div",{class:"absolute mx-1/2 top-[4.3em] w-[325px] h-[72px] bg-[#282828] rounded-md"},[t("p",{class:"relative text-center text-white text-[32px] py-3 px-auto"},"-- Guess the Song --"),t("div",{class:"relative w-8 h-8 bg-[#282828] rounded-md left-[6.5em] bottom-[1.2em]"})],-1),j={key:3},F=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/7uMBc5uxQRZNFowjhxH9WL?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),J=[F],T={key:4},V=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/4z4nyCVJYm4qZrnkAYrgNm?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),q=[V],M={key:5},E=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/6MmCP3F50aAlcOhjGJk4r0?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),G=[E],O={key:6},Y=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/0nJzekxLI0x35YtKg0FdZ2?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),Z=[Y],D={key:7},H=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/7l4tELVqU1wWKHDc3JlhwS?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),K=[H],W={key:8},P=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/3uR8oTCMvM1OuwAx4JjRis?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),Q=[P],I={key:9},U=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/0p2xtffpsh4syNCVZQFgAR?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),X=[U],$={key:10},ee=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/0tfRRlTnRELObqLAqFLz82?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),te=[ee],re={key:11},oe=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/06JF3LCOBbguprTXrmepjg?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),se=[oe],le={key:12},ie=t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/3PutbYf6kjBkMN5KmWqjrc?utm_source=generator&theme=0",width:"100%",height:"100",frameBorder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,-1),ae=[ie],ne=t("br",null,null,-1),ve=f({__name:"game-country",setup(ce){const{difficulty:n}=v(),{genre:i}=k(),{score:d,time:p,round:l,songG:ue,addScore:de,addRound:pe,resetScore:h,resetSong:me,setState:_,setAnswer:he,setSong:_e}=B(),c=()=>n.value==="novice"||n.value==="insane"?d.value:p.value,u=()=>l.value;return x({titleTemplate:()=>"Time: "+p.value+" Score: "+d.value+" | Songuessr"}),(ye,m)=>{const y=b;return r(),o("div",S,[z,t("div",R,[e(n)==="novice"?(r(),o("h3",C,"Score: "+a(c())+" Round: "+a(u()),1)):s("",!0),e(n)==="insane"?(r(),o("h3",A,"Score: "+a(c())+" Round: "+a(u()),1)):s("",!0),e(n)==="lightning"?(r(),o("h3",L,"Time: "+a(c())+" Round: "+a(u()),1)):s("",!0),N,e(l)===1&&e(i)==="country"?(r(),o("div",j,J)):s("",!0),e(l)===2&&e(i)==="country"?(r(),o("div",T,q)):s("",!0),e(l)===3&&e(i)==="country"?(r(),o("div",M,G)):s("",!0),e(l)===4&&e(i)==="country"?(r(),o("div",O,Z)):s("",!0),e(l)===5&&e(i)==="country"?(r(),o("div",D,K)):s("",!0),e(l)===6&&e(i)==="country"?(r(),o("div",W,Q)):s("",!0),e(l)===7&&e(i)==="country"?(r(),o("div",I,X)):s("",!0),e(l)===8&&e(i)==="country"?(r(),o("div",$,te)):s("",!0),e(l)===9&&e(i)==="country"?(r(),o("div",re,se)):s("",!0),e(l)===10&&e(i)==="country"?(r(),o("div",le,ae)):s("",!0),w(y,{to:"/"},{default:g(()=>[t("button",{onClick:m[0]||(m[0]=fe=>(e(h)(),e(_)(!1))),class:"duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"},"Exit"),ne]),_:1})])])}}});export{ve as default};
