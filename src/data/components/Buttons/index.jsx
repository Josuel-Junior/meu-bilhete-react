import iconPdf from '../../../assets/icon-pdf.svg'

import styles from './styles.module.css'

export default function Button(props) {

    return (
        <div className={styles.buttonPdf}>
            <span  >
                <img src={iconPdf} alt="Ícone para gerar PDF " onClick={props.generation} />
            </span>
        </div>
    )
}