import styled from 'styled-components'

export const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -1.6875rem;

  input {
    background-color: ${(props) => props.theme['--gray-500']};
    width: 39.875rem;
    height: 3.375rem;
    padding: 1rem;
    color: ${(props) => props.theme['--gray-100']};

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['--gray-700']};

    &:focus-within {
      outline: 0;
      border: 1px solid ${(props) => props.theme['--purple']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 5.75rem;
    height: 3.25rem;
    font-weight: 600;

    background-color: ${(props) => props.theme['--blue-dark']};
    color: ${(props) => props.theme['--gray-100']};

    border-radius: 8px;
    border: 0;
  }
`
