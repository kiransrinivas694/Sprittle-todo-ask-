import {Component} from 'react'

import {ListItem, Content, SubmitAnswer, Submit} from './styledComponents'

class StudentActivityItem extends Component {
  state = {answer: '', isSubmit: false}

  onAnswerChange = event => {
    this.setState({answer: event.target.value})
  }

  onSubmitAnswer = () => {
    const {details, username} = this.props
    const {firstNumber, secondNumber, option} = details
    const {answer} = this.state

    const answerDetails = {
      username,
      firstNumber,
      secondNumber,
      option,
      answer,
    }

    const answersList = JSON.parse(localStorage.getItem('answersList'))
    if (answersList === null) {
      localStorage.setItem('answersList', JSON.stringify([answerDetails]))
      this.setState({isSubmit: true})
    } else {
      console.log(answersList)
      const newList = [...answersList, answerDetails]
      console.log(newList)
      localStorage.setItem('answersList', JSON.stringify(newList))
      this.setState({isSubmit: true})
    }
  }

  render() {
    const {details} = this.props
    const {firstNumber, secondNumber, option} = details
    const {isSubmit} = this.state
    return (
      <ListItem>
        <Content>
          {firstNumber} {option} {secondNumber} = ?
        </Content>
        <SubmitAnswer
          type="number"
          placeholder="Enter a valid number"
          onChange={this.onAnswerChange}
        />

        <Submit type="button" onClick={this.onSubmitAnswer}>
          {isSubmit ? 'Submit Success' : 'Submit'}
        </Submit>
      </ListItem>
    )
  }
}

export default StudentActivityItem
