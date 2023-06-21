import styles from "./styles.module.css";
import ValidateInformation from "../../../data/ValidateData/ValidateInformation";


export default function ResultInformation(props) {

  if (props.one.length == 0) {
    return (
      <div>
        <p>Resultado em breve</p>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      {props.one.map((item, index) => {
        return (
          <div key={index} className={styles.result}>
            <h3>{`${item.acertos}`}</h3>
            <ValidateInformation validateWinners={item} />
          </div>
        );
      })}
    </div>
  );
}
