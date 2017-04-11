// Dashboard for users to control their bots, see stats, etc.
import React, { Component } from 'react'
import { View, Text } from 'react-native'

const DashboardScreen = ({ token }) => {
  return (
    <View>
      <Text>{ token }</Text>
    </View>
  )
}

export default DashboardScreen
