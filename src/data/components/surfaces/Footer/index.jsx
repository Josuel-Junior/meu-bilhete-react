import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <span> <a href="https://www.jfctecnologia.com/">JFC Tecnologia</a>  </span> Copyright &copy; 2023 - Todos os direitos
        reservados.
      </address>
    </footer>
  );
}
