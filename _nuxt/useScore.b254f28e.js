import{f as t}from"./entry.abae439f.js";const I=()=>{const a=t("score",()=>null),l=t("time",()=>null),r=t("round",()=>0),s=t("songG",()=>0),o=t("songU",()=>0),u=t("started",()=>!1);let n=null;const v=e=>{a.value=e},g=e=>{l.value=e},d=e=>{a.value+=e},S=()=>{clearInterval(n),v(0),g(0),i(1),c(),f(!1)},f=e=>{u.value=e,u&&(n=setInterval(()=>{l.value+=1},1e3)),u||(S(),n=clearInterval(n))},i=e=>{r.value=e},m=e=>{r.value+=e},c=()=>{s.value=Math.floor(Math.random()*4)+1};return{score:a,time:l,round:r,songG:s,songU:o,setScore:v,resetScore:S,resetSong:()=>{c()},addScore:d,addRound:m,setState:f,setSong:c,setAnswer:e=>{o.value=e,o.value===s.value?d(1):console.log("You put "+o.value+" but the answer was "+s.value)}}};export{I as u};
