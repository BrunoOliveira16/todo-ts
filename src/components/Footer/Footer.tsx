import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>&copy;2023 <span>Bruno Oliveira</span>. Todos os direitos Reservados</p>
    </footer>
  );
};

export default Footer;