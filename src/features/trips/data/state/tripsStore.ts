import { createWithEqualityFn } from "zustand/traditional";
import {shallow} from "zustand/vanilla/shallow";
import type TripsState from "@/src/features/trips/domain/model/TripsState";

export const initialState: TripsState = {
  trips: []
}

const tripsStore = createWithEqualityFn<TripsState>()(
  () => initialState,
  shallow,
)

export default tripsStore;
