import React from "react";
import container from "@/src/core/domain/di/container";
import {TripListViewKey} from "@/src/features/trips/ui/di/keys";

const TripsScreen = ()=> {
  const TripsListView = container.get(TripListViewKey);
  return (<TripsListView />);
}

export default TripsScreen;
