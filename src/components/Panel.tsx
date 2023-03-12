import styles from './Panel.module.css'
import {Task} from './Task'


export function Panel(){

  const tasks = [
  {
    id : 1,
    content: 'Beber água',
    completed: false
  },
  {
    id: 2,
    content: 'Estudar',
    completed: false
  }
]


  return(
    

    <article>
      <div className={styles.panel}>
        <div className={styles.info}>

          <div className={styles.created}>
            Tarefas criadas
            <span> {tasks.length}</span>
          </div>
          
          <div className={styles.done}>
            Concluídas
            <span>{tasks.filter(task => {return( task.completed)}).length} de {tasks.length}</span>
          </div>
        </div>

        <div className={styles.list}>
          {tasks.map(task => {
            return(
              <Task 
                key={task.id} 
                id ={task.id} 
                content={task.content} 
                completed={task.completed}
              />
            )
          }
          )
          }
          

        </div>
      </div>

     
    </article>
    

  );
}