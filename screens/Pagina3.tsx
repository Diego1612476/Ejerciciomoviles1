import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina3() {

    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)

    useEffect(() => {
      if(edad < 0){
        setedad(0)
      }
    
    }, [edad])
    

    function usuario(){
        Alert.alert('Mensaje', nombre + 'tiene '+ edad + 'anios')
    }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>FORMULARIO</Text>
      <TextInput
        style={styles.input}
        placeholder='INGRESAR NOMBRE'
        onChangeText={(texto) => setnombre(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingresar edad'
        keyboardType='numeric'
        onChangeText={(texto) => setedad(+texto) }
        
      />

      <Button title='Aceptar' onPress={() => usuario()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        backgroundColor: '#6666',
        fontSize:25,
        height:50,
        width:'85%',
        margin:10
    }
})