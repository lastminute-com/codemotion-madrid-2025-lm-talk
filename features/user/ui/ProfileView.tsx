import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})

export default ProfileView
