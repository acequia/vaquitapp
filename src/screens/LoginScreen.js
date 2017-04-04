// The login screen. Triggers a POST on form submit.
import React, { Component } from 'react'

import LoginForm from '../components/LoginForm'

export default class LoginScreen extends Component {
  // Submit current credentials from the form
  async postCredentials(email, password) {
    const credentials = JSON.stringify({
      auth: {
        email,
        password
      }
    })

    // Hardcoded URL for now
    try {
      let response = await fetch('http://vaquita.mauriciopasquier.com.ar/user_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: credentials
      })

      let responseJson = await response.json()

      // TODO Save the token and claims
      console.log(responseJson)
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return <LoginForm onSubmit={ this.postCredentials } />
  }
}
