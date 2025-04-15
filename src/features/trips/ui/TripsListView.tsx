import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import TripListItem from "@/src/features/trips/ui/TripListItem";
import LoadingLayout from "@/src/core/ui/LoadingLayout";
/**
 * All injections should come from index files
 */
// TODO Now UI depends on Data (which is not good, but also not bad)
import { tripsStore } from "@/src/features/trips/data/provisions";
import { loadTrips } from "@/src/features/trips/ui/provisions";

const TripsListView = () => {
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
