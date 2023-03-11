import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ActivityItem from '../ActivityItem'

import AnsweredActivities from '../AnsweredActivities'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Separator,
  Form,
  Input,
  Select,
  Option,
  Activity,
  AddActivity,
  NullContainer,
  Activities,
  Logout,
  Head,
  Headings,
  ActivitiesAnswered,
} from './styledComponents'

class Master extends Component {
  state = {option: '+', firstNumber: '', secondNumber: '', posted: true}

  onLogout = () => {
    localStorage.removeItem('isLogin')
    const {history} = this.props
    history.replace('/')
  }

  onOptionChange = event => {
    this.setState({option: event.target.value})
  }

  onFirstNumberChange = event => {
    this.setState({firstNumber: event.target.value})
  }

  onSecondNumberChange = event => {
    this.setState({secondNumber: event.target.value})
  }

  onPostActivity = event => {
    event.preventDefault()
    const {firstNumber, secondNumber, option} = this.state

    const activityDetails = {
      id: uuidv4(),
      firstNumber,
      secondNumber,
      option,
    }

    const activitiesList = localStorage.getItem('activities')
    const parsedList = JSON.parse(activitiesList)

    console.log(parsedList)
    if (parsedList === null) {
      const newList = [activityDetails]
      localStorage.setItem('activities', JSON.stringify(newList))
      this.setState({firstNumber: '', secondNumber: ''})
    } else {
      const newList = [...parsedList, activityDetails]
      localStorage.setItem('activities', JSON.stringify(newList))
      this.setState({firstNumber: '', secondNumber: ''})
    }
  }

  onDeleteActivity = id => {
    const activities = JSON.parse(localStorage.getItem('activities'))
    const filteredActivities = activities.filter(each => each.id !== id)
    localStorage.setItem('activities', JSON.stringify(filteredActivities))
    this.setState({posted: true})
  }

  getActivitiesList = activitiesPosted => (
    <Activities>
      {activitiesPosted.map(each => (
        <ActivityItem
          details={each}
          key={each.id}
          onDeleteActivity={this.onDeleteActivity}
        />
      ))}
    </Activities>
  )

  getActivitiesAnswered = activitiesAnswered => (
    <>
      <Head>
        <Headings>Activity</Headings>
        <Headings>Answered By</Headings>
        <Headings>Answer</Headings>
      </Head>
      <ActivitiesAnswered>
        {activitiesAnswered.map(each => (
          <AnsweredActivities details={each} key={each.username} />
        ))}
      </ActivitiesAnswered>
    </>
  )

  render() {
    const {option, firstNumber, secondNumber} = this.state

    const activitiesPosted = JSON.parse(localStorage.getItem('activities'))
    const activitiesAnswered = JSON.parse(localStorage.getItem('answersList'))
    return (
      <MainContainer>
        <ContentContainer>
          <Logout type="button" onClick={this.onLogout}>
            Logout
          </Logout>
          <Heading>Welcome Master</Heading>
          <Separator />
          <Heading>Post Your Activity</Heading>
          <Form onSubmit={this.onPostActivity}>
            <Activity>
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
            </Activity>
            <AddActivity type="submit">Post Activity</AddActivity>
          </Form>
          <Heading>Posted Activities</Heading>
          {activitiesPosted === null || activitiesPosted.length === 0 ? (
            <NullContainer>
              <Heading>No Activities Posted</Heading>
            </NullContainer>
          ) : (
            this.getActivitiesList(activitiesPosted)
          )}
          <Heading>Activities Answered</Heading>
          {activitiesAnswered === null || activitiesPosted.length === 0 ? (
            <NullContainer>
              <Heading>No Activities Answered</Heading>
            </NullContainer>
          ) : (
            this.getActivitiesAnswered(activitiesAnswered)
          )}
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default Master
