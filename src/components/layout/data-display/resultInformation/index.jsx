// import styles from './styles.module.css'


export default function ResultInformation(props) {

  return (
    <div >
        <h2>{props.number ? (
          "Acumulou" ) : (
            " Concurso não acumulou"
          
        )}</h2>
    </div>
  )
}
