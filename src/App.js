import React, { Component } from 'react'
import { Text } from 'react-native'
import jwtDecode from 'jwt-decode'

import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: null,
      loginData: null
    }

    this.saveToken = this.saveToken.bind(this)
  }

  saveToken(token) {
    this.setState({ token, loginData: jwtDecode(token) })
  }

  render() {
    const { token, loginData } = this.state

    if (token !== null) {
      return <DashboardScreen login={ loginData.email } />
    }

    return <LoginScreen onTokenReceived={ this.saveToken } />
  }
}
