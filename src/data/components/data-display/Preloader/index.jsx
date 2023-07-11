import Preloading from '../../../../assets/search.gif'
import styles from './styles.module.css'

export default function Preloader() {

    return (
        <div className={styles.loading}>
            <div className={styles.preLoading}>
                <h2>Buscando Resultado...</h2>
                <img src={Preloading} alt="Logo busacando dados no servidor" />
            </div>
        </div>
    );

}