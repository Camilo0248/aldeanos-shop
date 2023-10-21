import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

const App = () => {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={require("./assets/Minecraft-aldeanos.jpg")} {/* Asegúrate de especificar la ruta correcta */}
      />
      <Text style={styles.titulo}>Aldeano's Shop</Text>
      <Text style={styles.subtitulo}>Steven's Shop</Text>
      <Text style={styles.texto}>¿Qué deseas?</Text>
      <Button
        title="Reservar hoy"
        onPress={() => setTexto("Reserva realizada")}
      />
      <View style={styles.botones}>
        <Button
          title="Buscar"
          icon={require("./assets/icono-buscar.png")} {/* Asegúrate de especificar la ruta correcta */}
          onPress={() => setTexto("Buscando")}
        />
        <Button
          title="Inicio"
          icon={require("./assets/icono-inicio.png")} {/* Asegúrate de especificar la ruta correcta */}
          onPress={() => setTexto("Inicio")}
        />
        <Button
          title="Inventario"
          icon={require("./assets/icono-inventario.png")} {/* Asegúrate de especificar la ruta correcta */}
          onPress={() => setTexto("Inventario")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: 200,
    height: 200,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 18,
  },
  texto: {
    fontSize: 16,
    margin: 10,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
  },
});

export default App;
//-----------------------------------------------------------------------------------------------------------
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
