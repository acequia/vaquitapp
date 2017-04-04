// The login screen with email and password fields. Trigger login on submit
import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class LoginScreen extends Component {
  // Focus a field by reference
  focusField = (field) => {
    this.refs[field].focus()
  }

  render() {
    return (
      <View>
        <TextInput
          ref="email"
          placeholder="Enter your email"
          autoFocus
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={ false }
          onSubmitEditing={ () => this.focusField('password') }
        />

        <TextInput
          ref="password"
          placeholder="Enter your password"
          secureTextEntry
          returnKeyType="send"
          autoCapitalize="none"
          autoCorrect={ false }
        />
      </View>
    )
  }
}
