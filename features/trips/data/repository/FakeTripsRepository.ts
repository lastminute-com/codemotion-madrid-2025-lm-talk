import type Trip from "@/features/trips/domain/model/Trip";

class FakeTripsRepository {
    getTrips(): Promise<Trip[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            id: 1,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
                            destination: "Paris, France",
                            startDate: "2023-11-01",
                            endDate: "2023-11-07",
                            amountOfTravellers: 2,
                            nights: 6,
                        },
                        {
                            id: 2,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tokyo_Tower_and_surrounding_area.jpg",
                            destination: "Tokyo, Japan",
                            startDate: "2023-12-15",
                            endDate: "2023-12-25",
                            amountOfTravellers: 4,
                            nights: 10,
                        },
                        {
                            id: 3,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
                            destination: "New York, USA",
                            startDate: "2024-01-10",
                            endDate: "2024-01-15",
                            amountOfTravellers: 1,
                            nights: 5,
                        },
                    ]
                );
            }, 1000);
        });
    }
}

export default FakeTripsRepository;
