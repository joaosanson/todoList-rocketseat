import styled from 'styled-components'

export const InfoTasksWrapper = styled.div`
  width: 46rem;
  margin: 5rem auto 1.5rem;
  display: flex;
  justify-content: space-between;
`
const BaseInfoTask = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;

  p {
    display: flex;
  }

  span {
    display: flex;
    color: ${(props) => props.theme['--gray-100']};
    background-color: ${(props) => props.theme['--gray-400']};
    margin-left: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    border-radius: 50px;
  }
`

export const CreatedTasks = styled(BaseInfoTask)`
  p {
    color: ${(props) => props.theme['--blue']};
  }
`

export const ConcludedTasks = styled(BaseInfoTask)`
  p {
    color: ${(props) => props.theme['--purple']};
  }
  .concludedFromTotal {
    width: 4rem;
    font-weight: bold;
    .de {
      margin-left: 0rem;

      font-weight: 300;
    }
  }
`
