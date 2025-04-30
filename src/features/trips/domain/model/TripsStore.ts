import type {StoreApi} from "zustand/vanilla";
import type TripsState from "@/src/features/trips/domain/model/TripsState";

/**
 * Default to work with Zustand's vanilla store definition.
 * This is not tied to react.
 */
type TripsStore = StoreApi<TripsState>

export default TripsStore;
