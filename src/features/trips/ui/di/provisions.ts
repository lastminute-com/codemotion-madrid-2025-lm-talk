import withDependenciesHOC from "@/src/core/ui/di/withDependenciesHOC";
import keys from "@/src/features/trips/domain/di/keys";
import TTripsListView from "@/src/features/trips/ui/TripsListView";

export const TripsListView = withDependenciesHOC(
  TTripsListView,
  {
    loadTrips: keys.loadTrips,
    tripsStore: keys.tripsStore
  },
);
