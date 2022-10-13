const useGenre = () => {
  const genre = useState("genre", () => null);

  const setGenre = (val: string) => {
    genre.value = val;
  };

  const getGenre = () => {
    return genre.value;
  };

  return {
    genre: genre,
    setGenre,
  };
};

export default useGenre;
