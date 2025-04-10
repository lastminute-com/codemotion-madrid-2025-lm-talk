import profileStore from "@/features/user/domain/state/profileStore";
// TODO remove data dependency on our domain
import FakeUserRepository from "@/features/user/data/repository/FakeUserRepository";

const loadUser = async (): Promise<void> => {
  // TODO we shouldn't be instantiating the repository here
  const repository  = new FakeUserRepository()

  // fetch user profile
  const profile = await repository.getCurrentProfile()

  // load it into the store
  profileStore.setState({
    loggedUser: profile
  })
}

export default loadUser;
