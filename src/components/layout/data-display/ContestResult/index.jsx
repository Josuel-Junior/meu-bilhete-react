
export default function ContestResult(props) {
  const [resultOne, validateOne, validateTwo] = props.awardOne;

  if (validateOne == 0 && validateTwo == 0) {
    return (
      <div>
        <p>Valores em apuração</p>
      </div>
    )
  }

  return (
    <div>
      <h2>{props.number ? "Acumulou" : "Concurso não acumulou"}</h2>
      <p>{resultOne.quantidade_ganhadores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
