import styles from "./styles.module.css";
import ValidateInformation from "../../../data/ValidateData/ValidateInformation";


export default function ResultInformation(props) {

  return (
    <div className={styles.container}>
      {props.one.map((item, index) => {
        return (
          <div key={index} className={styles.result}>
            <p>{`${item.acertos} Acertos `}</p>
            <ValidateInformation validateWinners={item} />
          </div>
        );
      })}
    </div>
  );
}
