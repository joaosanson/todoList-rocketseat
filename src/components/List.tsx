import { ClipboardText } from 'phosphor-react'
import styles from './List.module.css'
import { Tasks } from './Tasks'
import { useTodos } from '../context/ContextTodos'


export function List() {
  const { todos } = useTodos()
  const isThereTodos = todos?.length <= 0
  return (
    <div className={styles.task}>
      <div className={styles.header}>
        <header >
          <p className={styles.leftParagraph}>Tarefas criadas <span>0</span></p>
          <p className={styles.rightParagraph}>Concluídas <span>0</span></p>
        </header>
      </div>

      {isThereTodos ?
        <div className={styles.list}>
          <div className={styles.emptyList}>
            <ClipboardText size={70} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      :
        <>
          {todos?.map((todo) => (
            <Tasks
              key={todo}
              content={todo}
            />
          ))}
        </>
      }
    </div>
  )
}
