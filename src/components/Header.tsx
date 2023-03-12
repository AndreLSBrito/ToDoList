import styles from './Header.module.css'
import logoToDo from '../assets/Logo.svg'

export function Header(){
  
  return(
      <header className={styles.header}>
        <img 
          src={logoToDo} alt='Logo da aplicação com um ícone de um foguete em azul escrito todo ao lado'
        />
      </header>

  );
}