/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/trips/domain/di/keys";
import loadTrips from "@/src/features/trips/domain/usecase/loadTrips";

diContainer.set(keys.loadTrips, loadTrips);
