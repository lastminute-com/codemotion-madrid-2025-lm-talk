/**
 * Provides a place to define all your provisions from this module.
 */
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/trips/domain/di/keys";
import tripsStore from "@/src/features/trips/data/state/tripsStore";

slContainer.set(keys.tripsStore, tripsStore);
