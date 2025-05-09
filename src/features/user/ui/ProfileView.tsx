import React, {useEffect} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import LoadingLayout from "@/src/core/ui/LoadingLayout";
import type {UseBoundStore} from "zustand/react";
import type {LoadUser} from "@/src/features/user/domain/usecase/loadUserFactory";
import type {ProfileStore} from "@/src/features/user/domain/model/ProfileStore";

type ProfileStoreHook = UseBoundStore<ProfileStore>

type Props = {
  store: ProfileStoreHook
  load: LoadUser
}

const ProfileView: React.FC<Props> = ({
  store,
  load,
}) => {
  const loggedUser = store(s => s.loggedUser)

  useEffect(() => {
    load()
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
