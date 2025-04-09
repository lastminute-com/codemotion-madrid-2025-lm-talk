import FakeTripsRepository from "@/features/trips/data/repository/FakeTripsRepository";
import tripsStore from "@/features/trips/domain/state/tripsStore";

const loadTrips = async (): Promise<void> => {
    const repository  = new FakeTripsRepository()

    // fetch user profile
    const trips = await repository.getTrips()

    // load it into the store
    tripsStore.setState({
        trips
    })
}

export default loadTrips;
