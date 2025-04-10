import {ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import tripsStore from "@/features/trips/domain/state/tripsStore";
import loadTrips from "@/features/trips/domain/usecase/loadTrips";
import TripListItem from "@/features/trips/ui/TripListItem";

const TripsListView = () => {
  const trips = tripsStore(s => s.trips)

  useEffect(() => {
    loadTrips()
  }, []);

  return trips.length > 0 ? (
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
  ) : <ActivityIndicator size="large" />
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
