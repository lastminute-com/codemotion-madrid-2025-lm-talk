import React, {useEffect} from 'react'
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native'

import loadUser from "@/src/features/user/domain/usecase/loadUser";
import profileStore from "@/src/features/user/domain/state/profileStore";
import LoadingLayout from "@/src/core/ui/LoadingLayout";

const ProfileView = () => {
  const loggedUser = profileStore(s => s.loggedUser)

  useEffect(() => {
    loadUser()
  }, []);

  return (
    <LoadingLayout isLoading={!loggedUser}>
      <View style={styles.container}>
        <Image style={styles.avatar} src={loggedUser?.avatarUrl} />
        <Text style={styles.title}>{loggedUser?.username}</Text>
      </View>
    </LoadingLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

export default ProfileView
