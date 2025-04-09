import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {useEffect} from "react";
import tripsStore from "@/features/trips/domain/state/tripsStore";
import loadTrips from "@/features/trips/domain/usecase/loadTrips";
import TripListItem from "@/features/trips/ui/TripListItem";

const TripsListView = () => {
  const trips = tripsStore(s => s.trips)

  useEffect(() => {
    loadTrips()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My trips</Text>
      <FlatList
          data={trips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TripListItem item={item} />
          )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
