import React, { Component } from 'react'
import { Text } from 'react-native'

import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: null
    }

    this.saveToken = this.saveToken.bind(this)
  }

  saveToken(token) {
    this.setState({ token })
  }

  render() {
    const { token } = this.state

    if (token !== null) {
      return <DashboardScreen token={ token } />
    }

    return <LoginScreen onTokenReceived={ this.saveToken } />
  }
}
