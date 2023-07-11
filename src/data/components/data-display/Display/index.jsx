import styles from './styles.module.css'

export default function Display({ number, color }) {

  return (
    <div className={styles.padding}>
      <span className={styles.display} style={{ background: color }}>{number}</span>
    </div>
  )
}