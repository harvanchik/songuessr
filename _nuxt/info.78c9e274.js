import{e as c,s as h,o as l,l as u,v as e,t as s,u as d,x as r,y as a,A as g}from"./entry.f5a84309.js";import{u as m,a as f}from"./useGenre.f4cf8a62.js";const p={class:"flex flex-col min-h-screen pt-20 pb-20 bg-red-100"},x=e("h1",{class:"mx-auto text-6xl font-semibold text-red-500 w-max"},"Songuessr",-1),_={class:"flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl"},v={class:"mx-auto text-5xl text-black {{ getDifficulty() }} capitalize w-max"},w={class:"p-5 text-lg bg-white {{ getDifficulty() }} rounded-lg"},y=e("br",null,null,-1),b=e("button",{class:"duration-250 mx-auto w-full rounded bg-white py-2 px-5 uppercase text-black transition-[colors,transform] hover:scale-105 hover:bg-white300 hover:bg-gradient-to-r hover:from-white hover:to-white400 hover:text-white700 active:translate-y-1"}," Genres ",-1),k=e("br",null,null,-1),D=e("button",{class:"duration-250 mx-auto w-full rounded bg-white py-2 px-5 uppercase text-black transition-[colors,transform] hover:scale-105 hover:bg-white300 hover:bg-gradient-to-r hover:from-white hover:to-white400 hover:text-white700 active:translate-y-1"}," Back ",-1),T=e("br",null,null,-1),A=c({__name:"info",setup(B){const{difficulty:t}=m(),{genre:n}=f(),i=()=>{switch(t.value){case"novice":return`Casual players trying to pass time throughout the day or enhance their
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
        guesses are incorrect, your game ends and you cannot record a time.`;default:return"No description found for this difficulty"}};return h({titleTemplate:()=>"Difficulty: "+t.value+" Genre: "+n.value+" | Songuessr"}),(C,G)=>{const o=g;return l(),u("div",p,[x,e("div",_,[e("h3",v,s(d(t))+" Mode Rules ",1),e("p",w,s(i()),1),y,r(o,{to:"/genre"},{default:a(()=>[b,k]),_:1}),r(o,{to:"/"},{default:a(()=>[D,T]),_:1})])])}}});export{A as default};
