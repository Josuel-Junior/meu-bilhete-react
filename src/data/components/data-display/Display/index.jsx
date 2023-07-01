import styles from './styles.module.css'

export default function Display(props) {

  return (
    <div className={styles.padding}>
      <h2 className={styles.display} style={{ background: props.color }}>{props.number}</h2>
    </div>
  )
}