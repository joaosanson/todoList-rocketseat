// import styles from './App.module.css';
import './global.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'
import { TodosProvider } from './context/ContextTodos'

function App() {
  return (
    <TodosProvider>
      <Header />
      <Form />
      <List />
    </TodosProvider>
  )
}

export default App
