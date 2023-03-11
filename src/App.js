import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Master from './components/Master'
import Student from './components/Student'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route exact path="/master" component={Master} />
        <Route exact path="/student" component={Student} />
      </Switch>
    )
  }
}

export default App
