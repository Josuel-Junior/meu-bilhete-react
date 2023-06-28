import styles from './styles.module.css'


export default function ContestResult(props) {

  if (props.awardOne.length == 0) {
    return (
      <div>
        <p>Valores em apuração</p>
      </div>
    )
  }

  return (
    <div className={styles.result}>
      <h2>{props.number ? "Acumulou" : "Concurso não acumulou"}</h2>
      <p>{props.awardOne.quantidade_ganhadores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
