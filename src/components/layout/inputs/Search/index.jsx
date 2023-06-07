export default function Search({ contest, setContest, setSearchConcurso }) {
  const handChange = (event) => {
    event.preventDefault();

    setSearchConcurso(contest);
  };

  return (
    <div onSubmit={handChange}>
      <form>
        <input
          type="text"
          onChange={(e) => setContest(e.target.value)}
          value={contest}
        />
        <p>{contest}</p>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
