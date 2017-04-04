// The login screen with email and password fields in a controlled form.
// Triggers login on submit.
import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class LoginScreen extends Component {
  constructor(params) {
    super(params)

    this.state = {
      email: '',
      password: ''
    }
  }

  // Focus a field by reference
  focusField = (field) => {
    this.refs[field].focus()
  }

  // Submit current credentials from state
  submitForm = () => {
    const { email, password } = this.state

    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
  }

  render() {
    const { email, password } = this.state

    return (
      <View>
        <TextInput
          ref="email"
          value={ email }
          placeholder="Enter your email"
          autoFocus
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={ false }
          onChangeText={ (value) => this.setState({ email: value }) }
          onSubmitEditing={ () => this.focusField('password') }
        />

        <TextInput
          ref="password"
          value={ password }
          placeholder="Enter your password"
          secureTextEntry
          returnKeyType="send"
          autoCapitalize="none"
          autoCorrect={ false }
          onChangeText={ (value) => this.setState({ password: value }) }
          onSubmitEditing={ () => this.submitForm() }
        />
      </View>
    )
  }
}
