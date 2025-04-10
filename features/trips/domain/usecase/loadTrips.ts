import tripsStore from "@/features/trips/domain/state/tripsStore";
// TODO remove data dependency on our domain
import FakeTripsRepository from "@/features/trips/data/repository/FakeTripsRepository";
// TODO check if we can afford dependency on a different module or not
import profileStore from "@/features/user/domain/state/profileStore";
import loadUser from "@/features/user/domain/usecase/loadUser";

const loadTrips = async (): Promise<void> => {
  // load and get user profile to get its trips
  // TODO is it ok to call this usecase and store here?
  await loadUser()
  const profile = profileStore.getState().loggedUser
  // if no profile, nothing to do here
  if(!profile) {
    return
  }

  // TODO we shouldn't be instantiating the repository here
  const repository  = new FakeTripsRepository()

  // fetch user profile
  const trips = await repository.getTripsFor(profile!)

  // load it into the store
  tripsStore.setState({
    trips
  })
}

export default loadTrips;
