import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';
import { useState, ChangeEvent, FormEvent, InvalidEvent } from 'react';

export function Form() {
  const [tasks, setTasks] = useState([''])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')

    const {value} = event.target
    setNewTask(value)
  }

  function handleInputSubmit(event: FormEvent){
    event.preventDefault()
    setTasks((prevState) => ([
      ...prevState,
      newTask]))
    setNewTask('')
    console.log(tasks)
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
        type='submit'>Criar <span><PlusCircle size={20} /></span></button>
    </form>
  )
}