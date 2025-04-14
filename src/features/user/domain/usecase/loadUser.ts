import type Profile from "@/src/features/user/domain/model/Profile";
import type { ProfileStore } from "@/src/features/user/domain/model/ProfileStore";
const FAKE_USER_PROFILE: Profile = {
  id: 123,
  username: "Ale Weichandt",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
}

const loadUser = async (
    profileStore: ProfileStore,
): Promise<void> => {
  // TODO we shouldn't be instantiating the store here (and the other uses too)
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
