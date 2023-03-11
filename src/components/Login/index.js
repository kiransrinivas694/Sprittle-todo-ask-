import {Component} from 'react'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Form,
  Label,
  Input,
  Submit,
  ErrorMsg,
  StyledLink,
} from './styledComponents'

class Login extends Component {
  state = {loginUsername: '', loginPassword: '', errorMsg: '', status: false}

  onUsernameChange = event => {
    this.setState({loginUsername: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({loginPassword: event.target.value})
  }

  onLogin = event => {
    event.preventDefault()
    const {loginPassword, loginUsername} = this.state
    const usersList = localStorage.getItem('users')
    const parsedList = JSON.parse(usersList)

    if (parsedList === null) {
      this.setState({errorMsg: 'Invalid Username', status: true})
    } else {
      const result = parsedList.filter(each => each.username === loginUsername)
      if (result.length === 0) {
        this.setState({errorMsg: 'Invalid Username', status: true})
      } else {
        const {history} = this.props
        if (result[0].password === loginPassword) {
          if (result[0].role === 'Master') {
            localStorage.setItem('isLogin', true)
            localStorage.setItem('currentUser', loginUsername)
            history.replace('/master')
          } else {
            localStorage.setItem('isLogin', true)
            localStorage.setItem('currentUser', loginUsername)
            history.replace('/student')
          }
        } else {
          this.setState({errorMsg: 'Invalid Password', status: true})
        }
      }
    }
  }

  render() {
    const {loginPassword, loginUsername, errorMsg, status} = this.state

    return (
      <MainContainer>
        <ContentContainer>
          <Form onSubmit={this.onLogin}>
            <Heading>Login</Heading>
            <Label>Username</Label>
            <Input
              type="text"
              onChange={this.onUsernameChange}
              value={loginUsername}
            />
            <Label>Password</Label>
            <Input
              type="password"
              onChange={this.onPasswordChange}
              value={loginPassword}
            />
            <Submit type="submit">Submit</Submit>
            {status && <ErrorMsg>{errorMsg}</ErrorMsg>}
            <StyledLink to="/register">
              New user ? Click here to sign up !
            </StyledLink>
          </Form>
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default Login
