import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Tasks.module.css'
import { useState } from 'react'
import { useTodos } from '../context/ContextTodos'

type TasksProps = {
  content: string
}

export function Tasks({ content }: TasksProps) {
  const { handleRemoveTodo } = useTodos()
  const [isClicked, setIsClicked] = useState(false)

  function handleIsClicked() {
    setIsClicked((prev) => !prev)
  }

  return (
    <div className={styles.tasks}>
      <button onClick={handleIsClicked} className={styles.clickButton}>
        {isClicked ? (
          <CheckCircle
            size={28}
            weight="fill"
            className={styles.clickedButton}
          />
        ) : (
          <Circle size={28} weight="bold" className={styles.notClickedButton} />
        )}
      </button>
      <p className={isClicked ? styles.clickedContent : styles.content}>
        {content}
      </p>
      <button
        onClick={() => handleRemoveTodo(content)}
        className={styles.trashButton}
      >
        <Trash size={22} className={styles.trashSvg} />
      </button>
    </div>
  )
}
