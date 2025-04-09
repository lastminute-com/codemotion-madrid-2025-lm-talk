import {FlatList, StyleSheet, Text, View} from "react-native";
import {useEffect} from "react";
import tripsStore from "@/features/trips/domain/state/tripsStore";
import loadTrips from "@/features/trips/domain/usecase/loadTrips";

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
            <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
              <Text>{item.destination}</Text>
              <Text>{item.startDate}</Text>
            </View>
          )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})

export default TripsListView;
