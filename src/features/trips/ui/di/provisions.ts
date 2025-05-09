import container from '@/src/core/domain/di/container'
import bindDependenciesHOC from "@/src/core/ui/di/bindDependenciesHOC";
import {LoadTripsKey, TripsStoreKey} from "@/src/features/trips/domain/di/keys";
import {TripListViewKey} from "@/src/features/trips/ui/di/keys";
import TripsListView from "@/src/features/trips/ui/TripsListView";

container.bind(TripListViewKey).toDynamicValue(() => bindDependenciesHOC(TripsListView, {
  store: TripsStoreKey,
  load: LoadTripsKey,
}))
