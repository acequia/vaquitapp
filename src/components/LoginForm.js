// The login form, with controlled email and password inputs.
import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  // Focus a field by reference
  focusField = (field) => {
    this.refs[field].focus()
  }

  // Submits current credentials state to parent callback
  submitForm = () => {
    const { email, password } = this.state

    this.props.onSubmit(email, password)
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
