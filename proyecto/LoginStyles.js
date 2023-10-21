import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen al tamaño de la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente para que la información sea legible
    padding: 20,
    borderRadius: 10,
  },
  // Agrega más estilos según tus necesidades
  // ...
});

export default styles;
