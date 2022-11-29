const useScore = () => {
  const score = useState("score", () => null);
  const time = useState("time", () => null);
  const round = useState("round", () => 0);
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

  // // checks if the timer is already running or not
  // const checkState = () => {
  //   return started.value;
  // };

  // // this function runs the timer
  // const startTimer = () =>  {
  //   interval = setInterval(() => { time.value += 1; }, 1000)
  // }

  // // this function stops the timer
  // const stopTimer = () => {
  //   clearInterval(interval);
  // }

// return the values to the main component
  return {
    score,
    time,
    round,
    setScore,
    addScore,
    resetScore,
    setState,
    addRound
  };
};

export default useScore;
