import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import TripListItem from "@/src/features/trips/ui/TripListItem";
import LoadingLayout from "@/src/core/ui/LoadingLayout";
/**
 * All injections should come from index files
 */
import type {UseBoundStore} from "zustand/react";
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/trips/domain/di/keys";
import type {LoadTrips} from "@/src/features/trips/domain/usecase/loadTrips";
import type TripsStore from "@/src/features/trips/domain/model/TripsStore";

type UseTripsStore = UseBoundStore<TripsStore>

const TripsListView = () => {
  const loadTrips = slContainer.get<LoadTrips>(keys.loadTrips);
  const tripsStore = slContainer.get<UseTripsStore>(keys.tripsStore);
  const trips = tripsStore(s => s.trips)

  useEffect(() => {
    loadTrips()
  }, []);

  return (
    <LoadingLayout isLoading={trips.length === 0}>
      <View style={styles.container}>
        <Text style={styles.title}>My trips</Text>
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TripListItem item={item} />
          )}
        />
      </View>
    </LoadingLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    alignSelf: 'center'
  }
})

export default TripsListView;
