import { Check, Circle, Trash } from 'phosphor-react'
import { CheckButton, DeleteButton, TasksWrapper } from './styles'

interface TasksProps {
  id: string
  content: string
  isCompleted: boolean
  handleCompletedButton: (id: string) => void
  handleDeleteButton: (id: string) => void
}

export function Tasks({
  id,
  content,
  isCompleted,
  handleCompletedButton,
  handleDeleteButton,
}: TasksProps) {
  return (
    <TasksWrapper>
      <CheckButton onClick={() => handleCompletedButton(id)}>
        {isCompleted ? (
          <Check size={22} weight="duotone" className="completedButton" />
        ) : (
          <Circle size={22} className="uncompletedButton" />
        )}
      </CheckButton>
      <p className={isCompleted ? 'completedText' : ''}>{content}</p>
      <DeleteButton onClick={() => handleDeleteButton(id)}>
        <Trash size={20} />
      </DeleteButton>
    </TasksWrapper>
  )
}
