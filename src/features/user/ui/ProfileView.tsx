import React, {useEffect} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import type {UseBoundStore} from "zustand/react";
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/user/domain/di/keys";
import type {LoadUser} from "@/src/features/user/domain/usecase/loadUser";
import type ProfileStore from "@/src/features/user/domain/model/ProfileStore";
import LoadingLayout from "@/src/core/ui/LoadingLayout";

/**
 * We cast the store to use a hook to simplify the example.
 * Maybe creating a different provision for the store hook is not a bad idea.
 */
type UseProfileStore = UseBoundStore<ProfileStore>

const ProfileView = () => {
  const loadUser = slContainer.get<LoadUser>(keys.loadUser);
  const profileStore = slContainer.get<UseProfileStore>(keys.profileStore);
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
