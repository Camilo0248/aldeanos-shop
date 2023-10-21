import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

const App = () => {
  const [texto, setTexto] = useState("");
  const [cantidadReserva, setCantidadReserva] = useState({
    producto1: 0,
    producto2: 0,
    producto3: 0,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.imagen}
        source={require("./Minecraft-aldeanos.jpg")}
      />
      <Text style={styles.titulo}>Aldeano's Shop</Text>
      <Text style={styles.subtitulo}>Steven's Shop</Text>
      <Text style={styles.texto}>¿Qué deseas?</Text>

      {/* Sección de Producto 1 */}
      <View style={styles.producto}>
        <Image
          style={styles.productoImagen}
          source={require("./doritos.jpg")}
        />
        <Text style={styles.productoNombre}>Doritos</Text>
        <Text style={styles.productoCantidad}>
          Cantidad: {cantidadReserva.producto1}
        </Text>
        <View style={styles.productoBotones}>
          <Button
            title="agregar"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto1: cantidadReserva.producto1 + 1,
              })
            }
          />
          <Button
            title="quitar"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto1:
                  cantidadReserva.producto1 > 0
                    ? cantidadReserva.producto1 - 1
                    : 0,
              })
            }
          />
        </View>
      </View>
      {/* Fin de Sección de Producto 1 */}

      {/* Sección de Producto 2 */}
      <View style={styles.producto}>
        <Image
          style={styles.productoImagen}
          source={require("./detodito.jpg")} // Cambia esto a la imagen del producto 2
        />
        <Text style={styles.productoNombre}>Detoditos</Text>
        <Text style={styles.productoCantidad}>
          Cantidad: {cantidadReserva.producto2}
        </Text>
        <View style={styles.productoBotones}>
          <Button
            title="agrega"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto2: cantidadReserva.producto2 + 1,
              })
            }
          />
          <Button
            title="quitar"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto2:
                  cantidadReserva.producto2 > 0
                    ? cantidadReserva.producto2 - 1
                    : 0,
              })
            }
          />
        </View>
      </View>
      {/* Fin de Sección de Producto 2 */}

      {/* Sección de Producto 3 */}
      <View style={styles.producto}>
        <Image
          style={styles.productoImagen}
          source={require("./cocacola.jpg")} // Cambia esto a la imagen del producto 3
        />
        <Text style={styles.productoNombre}>Cocacola</Text>
        <Text style={styles.productoCantidad}>
          Cantidad: {cantidadReserva.producto3}
        </Text>
        <View style={styles.productoBotones}>
          <Button
            title="agregar"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto3: cantidadReserva.producto3 + 1,
              })
            }
          />
          <Button
            title="quitar"
            onPress={() =>
              setCantidadReserva({
                ...cantidadReserva,
                producto3:
                  cantidadReserva.producto3 > 0
                    ? cantidadReserva.producto3 - 1
                    : 0,
              })
            }
          />
        </View>
      </View>
      {/* Fin de Sección de Producto 3 */}

      <Button
        title="Reservar hoy"
        onPress={() => setTexto("Reserva realizada")}
      />
      
      {/* Sección de Botones en línea horizontal */}
      <View style={styles.botones}>
        <Button
          title="Buscar"
          onPress={() => setTexto("Buscando")}
        />
        <Button
          title="Inicio"
          onPress={() => setTexto("Inicio")}
        />
        <Button
          title="Inventario"
          onPress={() => setTexto("Inventario")}
        />
      </View>
      {/* Fin de Sección de Botones pendiente a agregar funcionalidades pinzon */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: 400,
    height: 300,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
  },
  texto: {
    fontSize: 16,
    margin: 70,
  },
  botones: {
    flexDirection: "row",
    marginTop: 20,
  },
  producto: {
    alignItems: "center",
    marginTop: 20,
  },
  productoImagen: {
    width: 200,
    height: 150,
  },
  productoNombre: {
    fontSize: 20,
    marginTop: 10,
  },
  productoCantidad: {
    fontSize: 16,
    marginTop: 5,
  },
  productoBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 10,
  },
});

export default App;
