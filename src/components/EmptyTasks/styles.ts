import styled from 'styled-components'

export const EmptyTasksContainer = styled.div`
  display: flex;
  width: 46rem;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  border-top: 1px solid ${(props) => props.theme['--gray-400']};
  border-radius: 8px;

  img {
    width: 4rem;
    padding-bottom: 1rem;
  }

  .boldText {
    font-weight: 600;
    color: ${(props) => props.theme['--gray-300']};
  }

  .normalText {
    color: ${(props) => props.theme['--gray-300']};
  }
`
