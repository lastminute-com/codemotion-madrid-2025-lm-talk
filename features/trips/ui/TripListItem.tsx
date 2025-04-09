import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import type Trip from "@/features/trips/domain/model/Trip";

type Props = {
    item: Trip
}

const TripsListItem = ({ item }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.destination}</Text>
                <Text>{`${item.startDate} - ${item.endDate}`}</Text>
                <Text>{`${item.amountOfTravellers} travellers`}</Text>
                <Text>{`${item.nights} nights`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        gap: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    }
})

export default TripsListItem;
