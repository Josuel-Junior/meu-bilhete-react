import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../../../../../assets/logo.png";

import Container from "../../../Container";


import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

export default function Navbar() {

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)


  return (

    <header>
      <nav className={styles.navbar}>
        <Container>
          <Link className={styles.logo}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className={styles.toggle}>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
          </div>
          <ul className={styles.list}>
            <li>
              <Link to="/">MegaSena</Link>
            </li>
            <li>
              <Link to="/quina">Quina</Link>
            </li>
            <li>
              <Link to="/duplasena">Duplasena</Link>
            </li>
            <li>
              <Link to="/lotofacil">LotoFácil</Link>
            </li>
            <li>
              <Link to="/diadesorte">DiaDeSorte</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
