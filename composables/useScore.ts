const useScore = () => {
  const score = useState("score", () => null);
  const time = useState("time", () => null);
  score.value = 0;

  const setScore = (val: number) => {
    score.value = val;
  };

  const addScore = (val: number) => {
    score.value += val;
  };

  const getScore = () => {
    return score.value;
  };

//   make a timer that adds 1 to score every 1 second if the mode is lightning
  const timer = () => {
    if (difficulty.value === "lightning") {
      setInterval(() => {
        time.value++;
      }, 1000);
    }
  };
  
// return the values to the main component
  return {
    score: score,
    time: time,
    setScore,
  };
};

export default useScore;
