import styles from './styles.module.css'

const maskOnlyNumbers = (value) => {

  return value.replace(/\D/g, "");
};

export default function Search({ contest, setContest, fnSearch }) {

  const handChange = (event) => {
    event.preventDefault();
    fnSearch()
    setContest('')
  };


  return (
    <div className={styles.container} onSubmit={handChange}>
      <form className={styles.form}>
        <input
          type="number"
          onChange={(e) => setContest(maskOnlyNumbers(e.target.value))}
          placeholder=" Concurso"
          value={contest}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
