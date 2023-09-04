import React, { createContext, useContext, useState } from 'react'

type TodosProviderProps = {
  children: React.ReactNode
}

type ContextTodosProps = {
  todos: string[]
  handleRemoveTodo: (todo: string) => void
  handleAddTodo: (newTask: string) => void
}

const ContextTodos = createContext<ContextTodosProps>({} as ContextTodosProps)

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<string[]>(['tomar banho', 'lavar a louça'])

  function handleRemoveTodo(todo: string) {
    const todosWithoutDeletedOne = todos.filter((item) => item !== todo)
    setTodos(todosWithoutDeletedOne)
  }

  function handleAddTodo(newTask: string) {
    const checkIfTodoExists = todos.includes(newTask)
    if (checkIfTodoExists) return

    setTodos((prevState) => [...prevState, newTask])
  }

  return (
    <ContextTodos.Provider value={{ todos, handleRemoveTodo, handleAddTodo }}>
      {children}
    </ContextTodos.Provider>
  )
}

export function useTodos() {
  const context = useContext(ContextTodos)
  return context
}
