const useGenre = () => {
  const Genre = useState("genre", () => null);

  const setGenre = (val: string) => {
    Genre.value = val;
  };

  const getGenre = () => {
    return Genre.value;
  };

  return {
    Genre,
    setGenre,
  };
};

export default useGenre;
