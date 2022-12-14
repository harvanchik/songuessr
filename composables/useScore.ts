const useScore = () => {
  const score = useState("score", () => null);
  const time = useState("time", () => null);
  const round = useState("round", () => 0);
  const songG = useState("songG", () => 0); // correct answer
  const songU = useState("songU", () => 0); // user picked answer
  const started = useState("started", () => false);
  const games = useState("games", () => 0);
  const endTime = useState("endTime", () => null);
  let interval: any = null;

  const setScore = (val: number) => {
    score.value = val;
  };

  const getScore = () => {
    return score.value;
  };

  const setTime = (val: number) => {
    time.value = val;
  };

  const getTime = () => {
    return time.value;
  };

  const addScore = (val: number) => {
    score.value += val;
  };

  const resetScore = () => {
    setScore(0);
    setTime(0);
    setRound(1);
    setSong();
    started.value = false;
  };
  
  const setScoreTime = () => {
    if (score.value >= 10) {
      endTime.value = Math.floor(getTime() / games.value);
    }
    else {
      endTime.value = 10 - score.value;
    }
  };

  const getScoreTime = () => {
    return endTime.value;
  };

  const startTimer = () => {
    games.value++;
    if (!started.value) 
    {
      interval = setInterval(() => {
        if (started.value) {
          time.value++;
        }
        else
        {
          time.value = 0;
        }
      }, 1000);
      started.value = true;
      console.log("Timer started");
    }
  };

  const stopTimer = () => {
    clearInterval(interval);
    started.value = false;
    console.log("Timer stopped");
  };

  const setRound = (val: number) => {
    round.value = val;
  };

  const getRound = () => {
    return round.value;
  };

  const addRound = (val: number) => {
    round.value += val;
  };

  const setSong = () => {
    songG.value = Math.floor(Math.random() * 4) + 1;
  };

  const getSong = () => {
    return songG.value;
  };

  const resetSong = () => {
    setSong();
  };

  const setAnswer = (val: number) => {
    songU.value = val;
    if (songU.value === songG.value) {
      addScore(1);
    } else {
      // tell the console that the answer is wrong
      console.log(
        "You put " + songU.value + " but the answer was " + songG.value
      );
    }
  };

  const checkAnswer = (guess: string, genre: string) => {
    console.log("guess", guess);
    // get song name from current song
    const songName: string = songNumToName(round.value, songG.value, genre);
    console.log("songName", songName);
    console.log("is match", songName.toLowerCase() === guess.toLowerCase());
    // check if the name's match
    if (songName.toLowerCase() === guess.toLowerCase()) addScore(1);
  };

  const songNumToName = (round: number, val: number, genre: string) => {
    if (genre === "rock") {
      switch (round) {
        case 1:
          switch (val) {
            case 1:
              return "Down by the Seaside";
            case 2:
              return "Money";
            case 3:
              return "Train in Vain";
            case 4:
              return "Behind Blue Eyes";
          }
        case 2:
          switch (val) {
            case 1:
              return "Mary Jane's Last Dance";
            case 2:
              return "West LA Fadeaway";
            case 3:
              return "Sweet Leaf";
            case 4:
              return "In the City";
          }
        case 3:
          switch (val) {
            case 1:
              return "When the Levee Breaks";
            case 2:
              return "Don't Ask Me No Questions";
            case 3:
              return "I Fought the Law";
            case 4:
              return "Long Live Rock";
          }
        case 4:
          switch (val) {
            case 1:
              return "Showdown";
            case 2:
              return "Fortunate Son";
            case 3:
              return "Listen to the Music";
            case 4:
              return "Must of Got Lost";
          }
        case 5:
          switch (val) {
            case 1:
              return "Over the Hills and Far Away";
            case 2:
              return "Spill the Wine";
            case 3:
              return "Lover's Rock";
            case 4:
              return "Rock'n Me";
          }
        case 6:
          switch (val) {
            case 1:
              return "Pinball Wizard";
            case 2:
              return "Cheatin' Woman";
            case 3:
              return "Brown Eyed Woman";
            case 4:
              return "Lonely Is The Night";
          }
        case 7:
          switch (val) {
            case 1:
              return "Runnin' Down A Dream";
            case 2:
              return "Fool in the Rain";
            case 3:
              return "Funk #48";
            case 4:
              return "Paul's Tune";
          }
        case 8:
          switch (val) {
            case 1:
              return "One Rainy Wish";
            case 2:
              return "The Long Run";
            case 3:
              return "Shakedown Street";
            case 4:
              return "Monkey Man";
          }
        case 9:
          switch (val) {
            case 1:
              return "Fame";
            case 2:
              return "Dance the Night Away";
            case 3:
              return "D'yer Mak'er";
            case 4:
              return "Night Moves";
          }
        case 10:
          switch (val) {
            case 1:
              return "Red Angel Dragnet";
            case 2:
              return "Pali Gap";
            case 3:
              return "I can't Explain";
            case 4:
              return "Fire In The Hole";
          }
      }
    } else if (genre === "reggae") {
      switch (round) {
        case 1:
          switch (val) {
            case 1:
              return "Down On The Rocks";
            case 2:
              return "Badfish";
            case 3:
              return "Wild Goose Chase";
            case 4:
              return "Wanted Dread and Alive";
          }
        case 2:
          switch (val) {
            case 1:
              return "So Much Trouble In The World";
            case 2:
              return "Act Of Affection";
            case 3:
              return "Morning Ride";
            case 4:
              return "Murderer";
          }
        case 3:
          switch (val) {
            case 1:
              return "Big Ship";
            case 2:
              return "Pass The Dutchie";
            case 3:
              return "Wa-Do-Dem";
            case 4:
              return "Steppin' Out";
          }
        case 4:
          switch (val) {
            case 1:
              return "Meridian";
            case 2:
              return "Island Feeling";
            case 3:
              return "Something Wrong";
            case 4:
              return "Siren";
          }
        case 5:
          switch (val) {
            case 1:
              return "Positive Vibration";
            case 2:
              return "I'm Not Crazy";
            case 3:
              return "Chant a Psalm";
            case 4:
              return "Sensi Party";
          }
        case 6:
          switch (val) {
            case 1:
              return "2am";
            case 2:
              return "Who The Cap Fit";
            case 3:
              return "Bodyguard";
            case 4:
              return "Shark Attack";
          }
        case 7:
          switch (val) {
            case 1:
              return "Rule This Land";
            case 2:
              return "Westbound Train";
            case 3:
              return "Outta Control";
            case 4:
              return "Sunshine and Rain";
          }
        case 8:
          switch (val) {
            case 1:
              return "Blues Dance Raid";
            case 2:
              return "Put It On";
            case 3:
              return "Bam Bam";
            case 4:
              return "The International Herb";
          }
        case 9:
          switch (val) {
            case 1:
              return "Drift Away";
            case 2:
              return "Careful";
            case 3:
              return "Ballz Deep";
            case 4:
              return "Satisfied";
          }
        case 10:
          switch (val) {
            case 1:
              return "Grab Education";
            case 2:
              return "Roots, Rock, Reggae";
            case 3:
              return "Ganja Smuggling";
            case 4:
              return "Welcome To Jamrock";
          }
      }
    } else if (genre === "hip hop") {
      switch (round) {
        case 1:
          switch (val) {
            case 1:
              return "It Was A Good Day";
            case 2:
              return "Feel Me Flow";
            case 3:
              return "Passin' Me By";
            case 4:
              return "ATLiens";
          }
        case 2:
          switch (val) {
            case 1:
              return "Sometimes I Rhyme Slow";
            case 2:
              return "Ms. Fat Booty";
            case 3:
              return "Hits from the Bong";
            case 4:
              return "Can I Kick It";
          }
        case 3:
          switch (val) {
            case 1:
              return "Regulate";
            case 2:
              return "Still Not A Player";
            case 3:
              return "Find a Way";
            case 4:
              return "Flava in Ya Ear";
          }
        case 4:
          switch (val) {
            case 1:
              return "Mistadobalina";
            case 2:
              return "Check the Rhime";
            case 3:
              return "How Do U Want It";
            case 4:
              return "Juicy";
          }
        case 5:
          switch (val) {
            case 1:
              return "Gettin' It";
            case 2:
              return "I Get Around";
            case 3:
              return "1st of Tha Month";
            case 4:
              return "Around The Way Girl";
          }
        case 6:
          switch (val) {
            case 1:
              return "Get Money";
            case 2:
              return "Doo Wop (That Thing";
            case 3:
              return "Hip Hop Hooray";
            case 4:
              return "Hypnotize";
          }
        case 7:
          switch (val) {
            case 1:
              return "C.R.E.A.M";
            case 2:
              return "So What'Cha Want";
            case 3:
              return "Check Yo Self";
            case 4:
              return "Uknowhowwedu";
          }
        case 8:
          switch (val) {
            case 1:
              return "Mo Money Mo Problems";
            case 2:
              return "Resurrection";
            case 3:
              return "Slow Down";
            case 4:
              return "DWYCK";
          }
        case 9:
          switch (val) {
            case 1:
              return "California Love";
            case 2:
              return "Keep Their Heads Ringin";
            case 3:
              return "Tha Crossroads";
            case 4:
              return "Intergalactic";
          }
        case 10:
          switch (val) {
            case 1:
              return "O.P.P";
            case 2:
              return "Watcha Gon Do";
            case 3:
              return "Hand In Hand";
            case 4:
              return "24 Deep";
          }
      }
    } else if (genre === "indie") {
      switch (round) {
        case 1:
          switch (val) {
            case 1:
              return "Pistol";
            case 2:
              return "One Night with The Valet";
            case 3:
              return "Die For You";
            case 4:
              return "God Turn Me Into a Flower";
          }
        case 2:
          switch (val) {
            case 1:
              return "Today";
            case 2:
              return "About You";
            case 3:
              return "New Gold";
            case 4:
              return "Angelica";
          }
        case 3:
          switch (val) {
            case 1:
              return "Panic Attacks";
            case 2:
              return "Bad Habit";
            case 3:
              return "Slow Ready";
            case 4:
              return "Future Lover";
          }
        case 4:
          switch (val) {
            case 1:
              return "Diarabi";
            case 2:
              return "Shotgun";
            case 3:
              return "After The Earthquake";
            case 4:
              return "Some Of Us Are Brave";
          }
        case 5:
          switch (val) {
            case 1:
              return "Chameleons";
            case 2:
              return "Lonely One";
            case 3:
              return "WYD";
            case 4:
              return "Pictures of You";
          }
        case 6:
          switch (val) {
            case 1:
              return "Chem Bath";
            case 2:
              return "Eggshells";
            case 3:
              return "Rose Pink Cadillac";
            case 4:
              return "Jesus Freak Lighter";
          }
        case 7:
          switch (val) {
            case 1:
              return "Happy Ending";
            case 2:
              return "Everything Eventually Ends";
            case 3:
              return "Freedom";
            case 4:
              return "Billie Toppy";
          }
        case 8:
          switch (val) {
            case 1:
              return "Wild";
            case 2:
              return "Motels";
            case 3:
              return "Paradise";
            case 4:
              return "Unfold";
          }
        case 9:
          switch (val) {
            case 1:
              return "Get Inspired";
            case 2:
              return "TVI";
            case 3:
              return "Smalltown Stardust";
            case 4:
              return "Words and Guitar";
          }
        case 10:
          switch (val) {
            case 1:
              return "Spitting Off the Edge of the World";
            case 2:
              return "Self Portrait";
            case 3:
              return "Immunity";
            case 4:
              return "Hard Drive Gold";
          }
      }
    } else if (genre === "80") {
      switch (round) {
        case 1:
          switch (val) {
            case 1:
              return "Hooked on a Feeling";
            case 2:
              return "Girls Just Want to Have Fun";
            case 3:
              return "Wake Me Up Before You Go-Go";
            case 4:
              return "Stayin Alive";
          }
        case 2:
          switch (val) {
            case 1:
              return "Dancing Queen";
            case 2:
              return "Don't Stop Believing";
            case 3:
              return "Material Girl";
            case 4:
              return "Take On Me";
          }
        case 3:
          switch (val) {
            case 1:
              return "Rick Roll";
            case 2:
              return "The Look Of Love, Pt.1";
            case 3:
              return "Africa";
            case 4:
              return "Everybody Wants to Rule the World";
          }
        case 4:
          switch (val) {
            case 1:
              return "Footloose";
            case 2:
              return "Down Under";
            case 3:
              return "Tainted Love";
            case 4:
              return "Summer of '69";
          }
        case 5:
          switch (val) {
            case 1:
              return "I'm Still Standing";
            case 2:
              return "I Wanna Dance with Somebody";
            case 3:
              return "Don't You (Forget About Me)";
            case 4:
              return "Under Pressure";
          }
        case 6:
          switch (val) {
            case 1:
              return "You Make My Dreams (Come True)";
            case 2:
              return "We Built This City";
            case 3:
              return "Beat It";
            case 4:
              return "Funkytown";
          }
        case 7:
          switch (val) {
            case 1:
              return "Blue Monday";
            case 2:
              return "Don't You Want Me";
            case 3:
              return "Break My Stride";
            case 4:
              return "Jump";
          }
        case 8:
          switch (val) {
            case 1:
              return "Red Red Wine";
            case 2:
              return "Heaven Is A Place On Earth";
            case 3:
              return "Everywhere";
            case 4:
              return "Walk Of Life";
          }
        case 9:
          switch (val) {
            case 1:
              return "The Power Of Love";
            case 2:
              return "Tell It to My Heart";
            case 3:
              return "Hungry Like the Wolf";
            case 4:
              return "Uptown Girl";
          }
        case 10:
          switch (val) {
            case 1:
              return "Danger Zone";
            case 2:
              return "Eye of the Tiger";
            case 3:
              return "Come On Eileen";
            case 4:
              return "Just Can't Get Enough";
          }
      }
    }
  };

  const getAnswer = () => {
    return songU.value;
  };

  // return the values to the main component
  return {
    score,
    time,
    endTime,
    round,
    songG,
    songU,
    startTimer,
    stopTimer,
    setScore,
    setScoreTime,
    resetScore,
    resetSong,
    addScore,
    addRound,
    setSong,
    setAnswer,
    checkAnswer,
  };
};

export default useScore;
