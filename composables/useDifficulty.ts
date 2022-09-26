const useDifficulty = () => {
  const difficulty = useState("difficulty", () => "insane");

  const setDifficulty = (val: string) => {
    difficulty.value = val;
  };

  return {
    difficulty,
    setDifficulty,
  };
};

export default useDifficulty;
