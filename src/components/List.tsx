import { useState } from 'react'
import { ClipboardText } from 'phosphor-react'
import styles from './List.module.css'
import { Tasks } from './Tasks'


export function List() {
  const [isThereTasks] = useState(false)

  return (
  <div className={styles.task}>
    <div className={styles.header}>
      <header >
        <p className={styles.leftParagraph}>Tarefas criadas <span>0</span></p>
        <p className={styles.rightParagraph}>Concluídas <span>0</span></p>
      </header> 
    </div>

    {isThereTasks ?
    <div className={styles.list}>
      <div className={styles.emptyList}>
        <ClipboardText size={70} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div> 

    : 
    <>
    <Tasks />
    <Tasks />
    </>
    }
  </div>
  
  )
}