import {Component} from 'react'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Form,
  Label,
  Select,
  Option,
  Input,
  SignupButton,
} from './styledComponents'

class SignUp extends Component {
  state = {
    role: 'Master',
    username: '',
    password: '',
    errorMsg: '',
    isPresent: false,
  }

  onSignupChange = event => {
    this.setState({role: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {username, role, password} = this.state

    const userDetails = {username, role, password}
    const list = [userDetails]
    const usersList = localStorage.getItem('users')
    const parsedList = JSON.parse(usersList)
    const {history} = this.props

    if (usersList === null) {
      localStorage.setItem('users', JSON.stringify(list))
      history.replace('/')
    } else {
      const isUsernamePresent = parsedList.filter(
        each => each.username === userDetails.username,
      )
      console.log(isUsernamePresent)
      if (isUsernamePresent.length === 1) {
        this.setState({errorMsg: 'username already exists', isPresent: true})
      } else {
        const newList = [...parsedList, userDetails]
        localStorage.setItem('users', JSON.stringify(newList))

        history.replace('/')
      }
    }
  }

  render() {
    const {role, errorMsg, isPresent} = this.state

    return (
      <MainContainer>
        <ContentContainer>
          <Heading>You Tell , I Do</Heading>
          <Form onSubmit={this.onSubmit}>
            <Label htmlFor="select">Sign Up As</Label>
            <Select value={role} id="select" onChange={this.onSignupChange}>
              <Option value="Master">Master</Option>
              <Option value="Student">Student</Option>
            </Select>
            <Label>Username</Label>
            <Input type="text" onChange={this.onUsernameChange} />
            <Label>Password</Label>
            <Input type="password" onChange={this.onPasswordChange} />
            <SignupButton type="submit">Sign Up</SignupButton>
            {isPresent ? <Heading>{errorMsg}</Heading> : null}
          </Form>
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default SignUp
