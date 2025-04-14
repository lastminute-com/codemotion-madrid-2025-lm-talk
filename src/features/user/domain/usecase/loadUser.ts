// TODO remove data dependency on our domain
import profileStore from "@/src/features/user/data/state/profileStore";
import type Profile from "@/src/features/user/domain/model/Profile";

const FAKE_USER_PROFILE: Profile = {
  id: 123,
  username: "Ale Weichandt",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
}

const loadUser = async (): Promise<void> => {
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
