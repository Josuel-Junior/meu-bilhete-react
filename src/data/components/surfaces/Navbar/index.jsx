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
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/quina">Quina</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
