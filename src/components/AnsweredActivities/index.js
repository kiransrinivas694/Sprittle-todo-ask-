import {ListItem, Question, Name, Answer} from './styledComponents'

const ActivitiesAnswered = props => {
  const {details} = props
  const {firstNumber, secondNumber, option, answer, username} = details

  return (
    <ListItem>
      <Question>
        {firstNumber} {option} {secondNumber} = ?
      </Question>

      <Name>{username}</Name>
      <Answer>{answer}</Answer>
    </ListItem>
  )
}

export default ActivitiesAnswered
