import {Component} from 'react'

import StudentActivityItem from '../StudentActivityItem'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Separator,
  NullContainer,
  Activities,
  Calculator,
  Input,
  Select,
  Option,
  GetButton,
  Logout,
  HeadingActivities,
} from './styledComponents'

class Student extends Component {
  state = {
    firstNumber: '',
    secondNumber: '',
    option: '+',
    answer: '',
    isPresent: false,
  }

  onLogout = () => {
    localStorage.removeItem('isLogin')
    const {history} = this.props
    history.replace('/')
  }

  onFirstNumberChange = event => {
    this.setState({firstNumber: event.target.value})
  }

  onSecondNumberChange = event => {
    this.setState({secondNumber: event.target.value})
  }

  onOptionChange = event => {
    this.setState({option: event.target.value})
  }

  onGetAnswerClick = () => {
    const {firstNumber, secondNumber, option} = this.state
    console.log(option)
    if (option === '+') {
      this.setState({
        answer: parseInt(firstNumber) + parseInt(secondNumber),
        isPresent: true,
      })
    } else if (option === '-') {
      this.setState({
        answer: parseInt(firstNumber) - parseInt(secondNumber),
        isPresent: true,
      })
    } else if (option === 'x') {
      this.setState({
        answer: parseInt(firstNumber) * parseInt(secondNumber),
        isPresent: true,
      })
    } else {
      this.setState({
        answer: Math.floor(parseInt(firstNumber) / parseInt(secondNumber)),
        isPresent: true,
      })
    }
  }

  getActivitiesList = activitiesPosted => {
    const userDetails = localStorage.getItem('currentUser')

    return (
      <Activities>
        {activitiesPosted.map(each => (
          <StudentActivityItem
            details={each}
            key={each.id}
            username={userDetails}
          />
        ))}
      </Activities>
    )
  }

  render() {
    const activitiesPosted = JSON.parse(localStorage.getItem('activities'))
    const {firstNumber, secondNumber, option, answer, isPresent} = this.state
    return (
      <MainContainer>
        <ContentContainer>
          <Logout type="button" onClick={this.onLogout}>
            Logout
          </Logout>
          <Heading>Welcome Student</Heading>
          <Separator />
          <Heading>Use Calculator To Complete Activities</Heading>
          <Calculator>
            <Input
              type="number"
              min="0"
              max="9"
              placeholder="Enter number from 0 to 9"
              onChange={this.onFirstNumberChange}
              value={firstNumber}
            />
            <Select value={option} onChange={this.onOptionChange}>
              <Option value="+">+</Option>
              <Option value="-">-</Option>
              <Option value="x">x</Option>
              <Option value="÷">÷</Option>
            </Select>
            <Input
              type="number"
              min="0"
              max="9"
              placeholder="Enter number from 0 to 9"
              onChange={this.onSecondNumberChange}
              value={secondNumber}
            />
          </Calculator>
          <GetButton type="button" onClick={this.onGetAnswerClick}>
            Get Answer
          </GetButton>
          {isPresent ? <Heading>Answer : {answer}</Heading> : null}
          <HeadingActivities>Activities</HeadingActivities>
          {activitiesPosted === null || activitiesPosted.length === 0 ? (
            <NullContainer>
              <Heading>No Activities Posted</Heading>
            </NullContainer>
          ) : (
            this.getActivitiesList(activitiesPosted)
          )}
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default Student
