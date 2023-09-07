import { ChangeEvent, FormEvent, useState } from 'react'
import { InputForm } from './styles'
import { PlusCircle } from 'phosphor-react'
import { InfoTasks } from '../InfoTasks'
import { v4 as uuidv4 } from 'uuid'
import { Tasks } from '../Tasks'
import { EmptyTasks } from '../EmptyTasks'

interface TasksType {
  id: string
  content: string
  isCompleted: boolean
}

export function InputTask() {
  const [tasks, setTasks] = useState<TasksType[]>([
    {
      id: uuidv4(),
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    },
  ])
  const [newTask, setNewTask] = useState('')

  function handleAddTaskButton(event: FormEvent) {
    event.preventDefault()
    const addNewTask: TasksType = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    }

    setTasks((prevState) => [addNewTask, ...prevState])
    setNewTask('')
  }

  function handleDeleteTaskButton(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id)
    setTasks(tasksWithoutDeletedOne)
  }

  function handleCompletedButton(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setNewTask(value)
  }

  let amountOfConcludedTasks = 0

  tasks.map((task) => {
    if (task.isCompleted) {
      return amountOfConcludedTasks++
    } else {
      return task
    }
  })

  return (
    <>
      <InputForm onSubmit={handleAddTaskButton}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleInputChange}
        />
        <button>
          Criar <PlusCircle size={20} />
        </button>
      </InputForm>
      <InfoTasks
        amountOfCreatedTasks={tasks.length}
        amountOfConcludedTasks={amountOfConcludedTasks}
      />
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            handleCompletedButton={handleCompletedButton}
            handleDeleteButton={handleDeleteTaskButton}
          />
        ))
      ) : (
        <EmptyTasks />
      )}
    </>
  )
}
