/**
 * Provides a place to define all your provisions from this module.
 */
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/trips/domain/di/keys";
import loadTrips from "@/src/features/trips/domain/usecase/loadTrips";

slContainer.set(keys.loadTrips, loadTrips);
