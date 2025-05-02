/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/trips/domain/di/keys";
import withDependencies from "@/src/core/domain/di/withDependencies";
import loadTripsFactory from "@/src/features/trips/domain/usecase/loadTripsFactory";

const loadTrips = withDependencies(loadTripsFactory, keys.tripsStore);
/**
 * We need to define the interface of our use case for DI purpose.
 */
export type LoadTrips = typeof loadTrips;

diContainer.set(keys.loadTrips, loadTrips);
