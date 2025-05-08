import type Trip from "@/src/features/trips/domain/model/Trip";
import type {TripsStore} from "@/src/features/trips/domain/model/TripsStore";

const FAKE_TRIPS_FOR_PROFILE: Trip[] = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/lastminute-contenthub/image/upload/w_100/h_100/v1/DAM/PPC/Countries/Italy/shutterstock_233002423.jpg",
    destination: "Milan, Italy",
    startDate: "2023-11-01",
    endDate: "2023-11-07",
    amountOfTravellers: 2,
    nights: 6,
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/lastminute-contenthub/image/upload/w_100/h_100/v1/DAM/Photos/Destinations/Europe/UK/London/eyeem-23764952-52264234.jpg",
    destination: "London, UK",
    startDate: "2023-12-15",
    endDate: "2023-12-25",
    amountOfTravellers: 4,
    nights: 10,
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/lastminute-contenthub/image/upload/w_100/h_100/v1/DAM/PPC/Countries/Germany/shutterstock_314150234.jpg",
    destination: "Berlin, Germany",
    startDate: "2024-01-10",
    endDate: "2024-01-15",
    amountOfTravellers: 1,
    nights: 5,
  },
]

const loadTrips = async (
    tripsStore: TripsStore
): Promise<void> => {
  const trips = tripsStore.getState().trips;

  if (trips.length) {
    return;
  }

  // load it into the store
  tripsStore.setState({
    trips: FAKE_TRIPS_FOR_PROFILE
  })
}

export default loadTrips;

