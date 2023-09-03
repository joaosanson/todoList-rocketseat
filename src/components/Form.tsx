import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';
import { useState, ChangeEvent, FormEvent, InvalidEvent } from 'react';
import { useTodos } from '../context/ContextTodos';

export function Form() {
  const { handleAddTodo } = useTodos()
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    const {value} = event.target
    setNewTask(value)
  }

  function handleInputSubmit(event: FormEvent){
    event.preventDefault()
    handleAddTodo(newTask)
    setNewTask('')
  }

  function onInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo não pode permanecer vazio.')
  }

  return(
    <form className={styles.form} onSubmit={handleInputSubmit}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={handleInputChange}
        onInvalid={onInvalid}
        required
      />
      <button
        type='submit'>
          Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
