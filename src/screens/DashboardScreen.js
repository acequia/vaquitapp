// Dashboard for users to control their bots, see stats, etc.
import React, { Component } from 'react'
import { View, Text } from 'react-native'

const DashboardScreen = ({ login }) => {
  return (
    <View>
      <Text>Bienvenidx { login }!</Text>
    </View>
  )
}

export default DashboardScreen
