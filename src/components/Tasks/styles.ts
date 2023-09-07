import styled from 'styled-components'

export const TasksWrapper = styled.div`
  width: 46rem;
  margin: 0 auto 1rem;
  display: flex;
  padding: 1rem;
  height: 5rem;
  justify-content: space-between;

  background-color: ${(props) => props.theme['--gray-500']};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['--gray-400']};

  p {
    display: flex;
    align-items: center;
    justify-content: left;
    color: ${(props) => props.theme['--gray-200']};
  }

  .completedText {
    text-decoration: line-through;
    color: ${(props) => props.theme['--gray-300']};
  }
`

const BaseButton = styled.button`
  display: flex;
  align-items: start;
  border: 0;
  background-color: transparent;
`

export const CheckButton = styled(BaseButton)`
  padding-right: 1rem;

  .completedButton {
    border-radius: 50px;
    color: ${(props) => props.theme['--gray-100']};
    padding: 0.125rem;
    background-color: ${(props) => props.theme['--purple-dark']};

    transition: 0.25s background-color;
    &:hover {
      background-color: ${(props) => props.theme['--purple']};
      cursor: pointer;
    }
  }

  .uncompletedButton {
    border-radius: 50px;
    color: ${(props) => props.theme['--blue']};

    transition: 0.5s color;
    &:hover {
      color: ${(props) => props.theme['--blue-dark']};
      cursor: pointer;
    }
  }
`

export const DeleteButton = styled(BaseButton)`
  color: ${(props) => props.theme['--gray-300']};
  padding-left: 1rem;

  transition: 0.25s color;
  &:hover {
    color: ${(props) => props.theme['--danger']};
    cursor: pointer;
  }
`
