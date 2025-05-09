import type {StoreApi} from "zustand/vanilla";
import type TripsState from "@/src/features/trips/domain/model/TripsState";

export type TripsStore = StoreApi<TripsState>
