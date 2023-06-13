import styles from './styles.module.css'


export default function ResultInformation(props) {

  // const [one, two, three] = props.one;
  // const [...dados] = props.one;

  // destruction array 

  // console.log(one)
  // console.log(two)
  // console.log(dados)
  return (
    <div className={styles.container}>
 

          {props.one.map((item, index)=>{
            return(
              <div key={index} className={styles.result}>
                <p>{`${item.acertos} Acertos `}</p> 
                {/* CORRIR PLURAL */}
                <p>{item.quantidade_ganhadores > 0 ? `${item.quantidade_ganhadores} Ganhadores R$ ${item.valor_total}` : 'Não houve ganhadores' }</p> 
              </div>
            )
          })}
  

        
    </div>
  )
}
