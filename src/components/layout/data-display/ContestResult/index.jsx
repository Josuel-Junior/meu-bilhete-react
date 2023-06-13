export default function ContestResult(props) {
  const [resultOne] = props.awardOne;

  console.log(resultOne.quantidade_ganhadores);
  return (
    <div>
      <h2>{props.number ? "Acumulou" : "Concurso não acumulou"}</h2>

      <p>{resultOne.quantidade_ganhadores > 0 ? "Saiu" : "Não saiu"}</p>
    </div>
  );
}
