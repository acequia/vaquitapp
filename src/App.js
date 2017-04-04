import React, { Component } from 'react'
import { Text } from 'react-native'

import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'

export default class App extends Component {
  loggedIn() {
    return false
  }

  render() {
    if (this.loggedIn()) {
      return <DashboardScreen />
    } else {
      return <LoginScreen />
    }
  }
}
