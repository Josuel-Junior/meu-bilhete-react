import styles from './styles.module.css'


export default function ContestResult({ resultContest, result }) {


  console.log(result.length)

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
      <p>{result[0].vencedores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
