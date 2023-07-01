import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../../../../assets/logo.png";

import Container from "../../Container";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.logo}>
          <img src={logo} alt="Logo" />
        </Link>
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
  );
}
