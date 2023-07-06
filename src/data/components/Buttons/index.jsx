import iconPdf from '../../../assets/icon-pdf.svg'

import styles from './styles.module.css'

export default function Button({ generation }) {

    return (
        <div className={styles.buttonPdf}>
            <span  >
                <img src={iconPdf} alt="Ícone para gerar PDF " onClick={generation} />
            </span>
        </div>
    )
}