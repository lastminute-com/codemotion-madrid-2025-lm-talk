import tripsStore from "@/features/trips/domain/state/tripsStore";
// TODO remove data dependency on our domain
import FakeTripsRepository from "@/features/trips/data/repository/FakeTripsRepository";

const loadTrips = async (): Promise<void> => {
    // TODO we shouldn't be instantiating the repository here
    const repository  = new FakeTripsRepository()

    // fetch user profile
    const trips = await repository.getTrips()

    // load it into the store
    tripsStore.setState({
        trips
    })
}

export default loadTrips;
