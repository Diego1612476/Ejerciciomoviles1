import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina4Screen() {
   
    const [kelvin, setKelvin] = useState('')
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    const Convertidor = () => {
        const valorKelvin = parseFloat(kelvin);    
        if  (valorKelvin < 0) {
          Alert.alert( 'ingresa un número mayor a 0.');
          return;
        }    
        const valorCelsius = valorKelvin - 273.15;
        const valorFahrenheit = valorCelsius * (9 / 5) + 32;   
    setCelsius(valorCelsius.toFixed(2));
    setFahrenheit(valorFahrenheit.toFixed(2));
      };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Convertir grados</Text>
    <TextInput
      style={styles.input}
      placeholder="Ingresa los grados Kelvin"
      keyboardType="numeric"
      value={kelvin}
      onChangeText={setKelvin}
    />
    <Button title="Convertir" onPress={Convertidor} />
    {celsius !== '' && fahrenheit !== '' && (
      <View style={styles.results}>
           <Text style={styles.resultText}>Celsius: {celsius}°C</Text>
           <Text style={styles.resultText}>Fahrenheit: {fahrenheit}°F</Text>
      </View>
    )}
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      results: {
        marginTop: 20,
        alignItems: 'center',
      },
      resultText: {
        fontSize: 18,
      },
})