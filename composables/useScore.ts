const useScore = () => {
  const score = useState("score", () => null);
  const time = useState("time", () => null);

  const setScore = (val: number) => {
    score.value = val;
  };

  const getScore = () => {
    return score.value;
  };

  const addScore = (val: number) => {
    score.value += val;
  };

  const resetScore = () => {
    setScore(0);
    setTimer(0);
  };

  const setTimer = (val: number) => {
    timer();
    time.value = val;
  };

// timer that adds 1 to score every 1 second if the mode is lightning
  let timer = () => { setInterval(() => { time.value++; }, 1000); };
  
// return the values to the main component
  return {
    score,
    time,
    setScore,
    addScore,
    resetScore,
  };
};

export default useScore;
