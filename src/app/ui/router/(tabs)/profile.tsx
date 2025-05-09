import React from "react";
import container from "@/src/core/domain/di/container";
import {ProfileViewKey} from "@/src/features/user/ui/di/keys";

const ProfileScreen = () => {
  const ProfileView = container.get(ProfileViewKey)
  return (
    <ProfileView />
  )
}

export default ProfileScreen
