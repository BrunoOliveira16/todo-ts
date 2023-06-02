// React
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from 'react-icons/bs';
import { RiTodoLine } from 'react-icons/ri';
// CSS
import styles from "./Header.module.css";


const Header = () => {
  const [ theme, setTheme ] = useState('dark-theme');

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_logo}>
              <RiTodoLine />
          </div>
          <h1>TO DO List</h1>
          <div className={styles.header_theme} onClick={toggleTheme}>
              {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
          </div>
      </div>
    </header>
  );
};

export default Header;