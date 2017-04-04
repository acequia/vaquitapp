import React, { Component } from 'react'
import { Text } from 'react-native'

import LoginScreen from './screens/LoginScreen'

export default class App extends Component {
  loggedIn() {
    return false
  }

  render() {
    if (this.loggedIn()) {
      return <Text>logged in!</Text>
    } else {
      return <LoginScreen />
    }
  }
}
