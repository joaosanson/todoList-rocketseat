import { ThemeProvider } from 'styled-components/'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask/index'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputTask />
      <GlobalStyle />
    </ThemeProvider>
  )
}
