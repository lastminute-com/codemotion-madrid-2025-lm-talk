import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import type {UseBoundStore} from "zustand/react";
import type {TripsStore} from "@/src/features/trips/domain/model/TripsStore";
import type {LoadTrips} from "@/src/features/trips/domain/usecase/loadTripsFactory";
import TripListItem from "@/src/features/trips/ui/TripListItem";
import LoadingLayout from "@/src/core/ui/LoadingLayout";

type TripsStoreHook = UseBoundStore<TripsStore>

type Props = {
  store: TripsStoreHook
  load: LoadTrips
}

const TripsListView: React.FC<Props> = ({
  store,
  load,
}) => {
  const trips = store(s => s.trips)

  useEffect(() => {
    load()
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
