import { ConcludedTasks, CreatedTasks, InfoTasksWrapper } from './styles'

interface InfoTasksProps {
  amountOfCreatedTasks: number
  amountOfConcludedTasks: number
}

export function InfoTasks({
  amountOfConcludedTasks,
  amountOfCreatedTasks,
}: InfoTasksProps) {
  return (
    <InfoTasksWrapper>
      <CreatedTasks>
        <p>
          Tarefas criadas <span>{amountOfCreatedTasks}</span>
        </p>
      </CreatedTasks>
      <ConcludedTasks>
        <p>
          Concluídas
          {amountOfConcludedTasks > 0 ? (
            <span className="concludedFromTotal">
              {amountOfConcludedTasks} <span className="de">de</span>
              {amountOfCreatedTasks}
            </span>
          ) : (
            <span>{amountOfConcludedTasks}</span>
          )}
        </p>
      </ConcludedTasks>
    </InfoTasksWrapper>
  )
}
