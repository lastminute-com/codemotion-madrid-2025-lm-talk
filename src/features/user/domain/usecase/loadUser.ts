import type Profile from "@/src/features/user/domain/model/Profile";
import type ProfileStore from "@/src/features/user/domain/model/ProfileStore";
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/user/domain/di/keys";

const FAKE_USER_PROFILE: Profile = {
  id: 123,
  username: "Ale Weichandt",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
}

async function loadUser(): Promise<void> {
  /**
   * Use service locator to get data implementation of our ProfileStore type definition.
   * This implies now the slContainer is a direct dependency of this module.
   *
   * keys.profileStore must be provided before loadUser
   */
  const profileStore = slContainer.get<ProfileStore>(keys.profileStore);

  const user = profileStore.getState().loggedUser;
  if (user) {
    return;
  }

  // load it into the store
  profileStore.setState({
    loggedUser: FAKE_USER_PROFILE
  })
}

export default loadUser;

/**
 * We need to define the interface of our use case for DI purpose.
 */
export type LoadUser = typeof loadUser;
