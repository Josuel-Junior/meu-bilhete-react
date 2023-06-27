import styles from './styles.module.css'

import { DisplayResult } from './styles'

export default function Display({ number, color }) {
  return (
    <div className={styles.padding}>
      <DisplayResult className={styles.display} color={color}>{number}</DisplayResult>
    </div>
  )
}