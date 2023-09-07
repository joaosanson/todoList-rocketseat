import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 140%;
}

body {
  background-color: ${(props) => props.theme['--gray-600']};
}

body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 16px;
}
`
