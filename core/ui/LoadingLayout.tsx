import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

type Props = React.PropsWithChildren<{
  isLoading: boolean
}>
const LoadingLayout: React.FC<Props> = ({ isLoading, children }) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F2007D" />
    </View>
  ) : (
    <>{children}</>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingLayout
