const useScore = () => {
  const score = useState("score", () => null);
  const time = useState("time", () => null);
  const round = useState("round", () => 0);
  const songG = useState("songG", () => 0);
  const songU = useState("songU", () => 0);
  const started = useState("started", () => false);
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
    clearInterval(interval);
    setScore(0);
    setTime(0);
    setRound(1);
    setState(false);
  };

  // checks if the game and the timer has started
  const setState = (val: boolean) => {
    started.value = val;
    // If the game has started, reset the score and start the timer
    if (started) {
      interval = setInterval(() => { time.value += 1; }, 1000)
    } 
    // If the game hasn't started, stop the timer and reset the score
    if (!started) {
      resetScore();
      interval = clearInterval(interval);
    }
  };

  const getState = () => {
    return started.value;
  };

  const setRound = (val: number) => {
    round.value = val;
  };

  const getRound = () => {
    return round.value;
  };

  const addRound = (val: number) => {
    if (round.value < 10) {
      round.value += val;
    }
    else {
      resetScore();
    }
  };

  const setSong = () => {
    songG.value = Math.floor(Math.random() * 4) + 1;
  };

  const getSong = () => {
    return songG.value;
  };

  const setAnswer = (val: number) => {
    songU.value = val;
    if (songU.value === songG.value) {
      addScore(1);
    }
    else {
      // tell the console that the answer is wrong
      console.log("You put " + songU.value + " but the answer was " + songG.value);
    }
  };

  const getAnswer = () => {
    return songU.value;
  };

// return the values to the main component
  return {
    score,
    time,
    round,
    songG,
    songU,
    setScore,
    resetScore,
    addScore,
    addRound,
    setState,
    setSong,
    setAnswer
  };
};

export default useScore;
