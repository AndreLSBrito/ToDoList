import styles from './CreaterTask.module.css'
import {PlusCircle} from 'phosphor-react'

export function CreaterTask(){
  return(
 
        <form className={styles.CreaterTask}>
          <textarea
            placeholder='Adicione uma nova tarefa'
          />
          
          <button
            type='submit'
          >
            Criar
            <span><PlusCircle /></span>
          
          </button>
        </form>
            
  )
}