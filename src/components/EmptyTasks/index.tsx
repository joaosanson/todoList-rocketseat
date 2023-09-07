import { EmptyTasksContainer } from './styles'
import emptyTask from '../../assets/emptyTask.svg'

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <img src={emptyTask} alt="" />
      <p className="boldText">Você ainda não tem tarefas cadastradas</p>
      <p className="normalText">Crie tarefas e organize seus itens a fazer</p>
    </EmptyTasksContainer>
  )
}
