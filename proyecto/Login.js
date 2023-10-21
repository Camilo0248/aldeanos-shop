import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const fondoImage = require('./Minecraft-aldeanos.jpg'); // Importa la imagen de fondo local

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, puedes enviar una solicitud a un servidor para verificar las credenciales.
    // Si las credenciales son válidas, puedes navegar a la pantalla principal de la aplicación.
    // De lo contrario, puedes mostrar un mensaje de error.
  };

  handleForgotPassword = () => {
    // Aquí puedes implementar la lógica para enviar un correo electrónico de recuperación de contraseña
  };

  render() {
    return (
      <ImageBackground source={fondoImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text>Usuario:</Text>
          <TextInput
            placeholder="Ingresa tu usuario"
            onChangeText={(text) => this.setState({ username: text })}
            style={styles.input}
          />

          <Text>Contraseña:</Text>
          <TextInput
            placeholder="Ingresa tu contraseña"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
            style={styles.input}
          />

          <Button title="Iniciar sesión" onPress={this.handleLogin} />

          <TouchableOpacity onPress={this.handleForgotPassword}>
            <Text>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Login;
