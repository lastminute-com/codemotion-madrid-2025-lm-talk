import type Profile from "@/src/features/user/domain/model/Profile";
import type { ProfileStore } from "@/src/features/user/domain/model/ProfileStore";
const FAKE_USER_PROFILE: Profile = {
  id: 123,
  username: "Ale Weichandt",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
}

export type LoadUser = () => Promise<void>;

const loadUserFactory = (
    profileStore: ProfileStore,
): LoadUser =>
  async function loadUser(): Promise<void> {
    const user = profileStore.getState().loggedUser;

    if (user) {
      return;
    }

    // load it into the store
    profileStore.setState({
      loggedUser: FAKE_USER_PROFILE
    })
  }

export default loadUserFactory;
