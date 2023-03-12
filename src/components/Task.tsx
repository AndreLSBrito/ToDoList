import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useState } from 'react'; 
//import { Checkbox} from 'semantic-ui-react'; 

interface TaskProps{
  id: number;
  content: string;
  completed: boolean;
}

export function Task({id, content, completed}:TaskProps){
  return(

  <div className={styles.task}>
    <Checkbox.Root  
    className={styles.checkboxRoot}
    //checked={true}  
    //onChange={}  
    >
      <div className={styles.checkboxIndicator}>
        <Checkbox.CheckboxIndicator>
          <Check className={styles.iconCheck}/>
        </Checkbox.CheckboxIndicator>
      </div>
      
    </Checkbox.Root>

    <span >
      {content}
    </span>
    <div className={styles.iconTrash}>
      <Trash size={24}/>
    </div>
    

  </div>
 
  );
}
