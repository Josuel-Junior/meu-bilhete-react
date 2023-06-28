import styles from "./styles.module.css";
import validateInfoResult from "../../../Services/validateInfoResult";


export default function ResultInformation(props) {

  if (props.infoGame.length == 0) {
    return (
      <div>
        <p>Resultado em breve</p>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      {props.infoGame.map((item, index) => {
        return (
          <div key={index} className={styles.result}>
            <h3>{`${item.acertos}`}</h3>
            <span>{validateInfoResult(item)}</span>
          </div>
        );
      })}
    </div>
  );
}
