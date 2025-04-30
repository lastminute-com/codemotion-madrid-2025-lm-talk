/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/trips/domain/di/keys";
import tripsStore from "@/src/features/trips/data/state/tripsStore";

diContainer.set(keys.tripsStore, tripsStore);
