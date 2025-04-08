import FakeUserRepository from "@/features/user/data/repository/FakeUserRepository";
import profileStore from "@/features/user/domain/state/profileStore";

const loadUser = async (): Promise<void> => {
  const repository  = new FakeUserRepository()

  // fetch user profile
  const profile = await repository.getCurrentProfile()

  // load it into the store
  profileStore.setState({
    loggedUser: profile
  })
}

export default loadUser;
