const useDifficulty = () => {
  const difficulty = useState("difficulty", () => null);

  const setDifficulty = (val: string) => {
    difficulty.value = val;
  };

  const getDifficulty = () => {
    return difficulty.value;
  };

  return {
    difficulty,
    setDifficulty,
  };
};

export default useDifficulty;
