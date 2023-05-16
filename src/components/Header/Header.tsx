// React
import { useState } from "react";
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

  return (
    <header className={styles.header}>
        <div>
            <RiTodoLine />
        </div>
        <h1>TO DO List</h1>
        <div onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>
    </header>
  );
};

export default Header;