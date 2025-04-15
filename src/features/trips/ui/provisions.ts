/**
 * Provides a place to define all your provisions from this module.
 */
import { tripsStore } from "@/src/features/trips/data/provisions";
import { loadTripsFactory } from "@/src/features/trips/domain/provisions";

/**
 * We can create composed provisions here as well.
 */
export const loadTrips = loadTripsFactory(tripsStore)
