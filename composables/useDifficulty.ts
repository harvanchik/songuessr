const useDifficulty = () => {
  const difficulty = useState("difficulty", () => null);

  const setDifficulty = (val: string) => {
    difficulty.value = val;
  };

  return {
    difficulty,
    setDifficulty,
  };
};

export default useDifficulty;
