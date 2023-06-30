import styles from './styles.module.css'


export default function ContestResult(props) {

  const [resultOne] = props.awardOne;

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
      <p>{resultOne.vencedores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
