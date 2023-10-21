import React from "react";
import { StyleSheet, View, Text } from "react-native";
import App from "./HomePage"; // Asegúrate de que la ruta sea correcta

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Open up HomePage.js to start working on your app!</Text>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
