import type TripsState from "@/src/features/trips/domain/model/TripsState";

export type TripsStore = {
    setState: (state: Partial<TripsState>) => void;
    getState: () => TripsState;
}
