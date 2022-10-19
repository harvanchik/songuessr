import{e as d,s as m,o as r,l as n,v as e,u as o,t as s,z as i,x as c,y as u,A as p}from"./entry.fab09f0f.js";import{u as g,a as f}from"./useGenre.8d6cd455.js";const x={class:"flex flex-col min-h-screen pt-20 pb-20 bg-red-100"},_=e("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),v={class:"flex flex-col max-w-md mx-auto space-y-5 text-5xl"},y={key:0,class:"novice-info"},b={class:"mx-auto mt-3 mb-10 text-5xl text-green-500 capitalize w-max"},w={class:"p-5 mb-10 text-lg bg-green-200 rounded-lg"},k={key:1,class:"insane-info"},T={class:"mx-auto mt-3 mb-10 text-5xl text-purple-500 capitalize w-max"},z={class:"p-5 mb-10 text-lg bg-purple-200 rounded-lg"},B={key:2,class:"lightning-info"},C={class:"mx-auto mt-3 mb-10 text-5xl text-blue-500 capitalize w-max"},D={class:"p-5 mb-10 text-lg bg-blue-200 rounded-lg"},N=e("button",{class:"duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-500 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1"}," Genres ",-1),G=e("br",null,null,-1),M=e("button",{class:"duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-500 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"}," Back ",-1),R=e("br",null,null,-1),q=d({__name:"info",setup(S){const{difficulty:t}=g(),{genre:h}=f(),a=()=>{switch(t.value){case"novice":return`Casual players trying to pass time throughout the day or enhance their
        music knowledge can play this mode to figure out their knowledge of a
        certain genre of music. This mode gives multiple choice options, so the
        user has a range of options to guess or choose from before answering.
        They are given their scores out of 10, since they are given 10 song
        choices to choose from.`;case"insane":return`Hardcore players that are attempting speedruns and high score on the
        leaderboard will choose the insane mode. This mode gives score
        multipliers through the duration of the guess, so the faster the guess
        the higher the score. It also has a text box, so the user would have to
        know the name of the song exactly to get it correct. A correct answer is
        100 points, and an almost instant answer can go up to a 5x multiplier.`;case"lightning":return`This is a very fast speed mode similar to insane mode, but without the
        points system involved. This mode records how quickly you can guess 10
        songs in a given amount of time. Your high score gets recorded as a
        time, where the lower the time the better the rating. If any of your
        guesses are incorrect, your game ends and you cannot record a time.`;default:return"No description found for this difficulty"}};return m({titleTemplate:()=>"Difficulty: "+t.value+" Genre: "+h.value+" | Songuessr"}),(V,A)=>{const l=p;return r(),n("div",x,[_,e("div",v,[o(t)==="novice"?(r(),n("div",y,[e("h3",b,s(o(t))+" Mode Rules ",1),e("p",w,s(a()),1)])):i("",!0),o(t)==="insane"?(r(),n("div",k,[e("h3",T,s(o(t))+" Mode Rules ",1),e("p",z,s(a()),1)])):i("",!0),o(t)==="lightning"?(r(),n("div",B,[e("h3",C,s(o(t))+" Mode Rules ",1),e("p",D,s(a()),1)])):i("",!0),c(l,{to:"/genre"},{default:u(()=>[N,G]),_:1}),c(l,{to:"/"},{default:u(()=>[M,R]),_:1})])])}}});export{q as default};
