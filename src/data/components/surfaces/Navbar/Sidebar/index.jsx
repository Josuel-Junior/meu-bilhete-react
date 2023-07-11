import React from 'react'

import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'

import styles from './styles.module.css'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (

        <div className={styles.container} style={{ right: active ? '0' : '-100%' }}>
            <FaTimes onClick={closeSidebar} />
            <div className={styles.content}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeSidebar} >MegaSena</Link>
                    </li>
                    <li>
                        <Link to="/quina" onClick={closeSidebar}>Quina</Link>
                    </li>
                    <li>
                        <Link to="/duplasena" onClick={closeSidebar}>Duplasena</Link>
                    </li>
                    <li>
                        <Link to="/lotofacil" onClick={closeSidebar}>LotoFácil</Link>
                    </li>
                    <li>
                        <Link to="/diadesorte" onClick={closeSidebar}>DiaDeSorte</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar