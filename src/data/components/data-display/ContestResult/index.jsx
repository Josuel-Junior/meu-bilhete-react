import styles from './styles.module.css'


export default function ContestResult({ resultContest, result }) {

  if (result.length == 0) {
    return (
      <div>
        <p>Valores em apuração</p>
      </div>
    )
  }

  return (
    <div className={styles.result}>
      <h3>{resultContest ? "Acumulou" : "Concurso não acumulou"}</h3>
      <p>{result[0].ganhadores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
