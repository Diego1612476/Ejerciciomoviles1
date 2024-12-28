import { Alert, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any ) {

  function detalles(item: any){
    Alert.alert(item.name, item.description + '\nAtributos: '+ item.atributos)
  }


  return (
    <TouchableOpacity style={styles.container} onPress={() => detalles(props.informacion)}>
      <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
      <view style={styles.fila}>
      <Image 
      source={{uri: props.informacion.image}}
      style={styles.img}
      />

      <text style={styles.txtDescripcion}>{props.informacion.description}</text>
      </view>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color: '#c9cfde',
        fontWeight:'bold'
    },
    img:{
        height:150,
        width:150,
        resizeMode: 'contain'
    },
    container:{
        backgroundColor:'#666',
        margin:2,
        borderRadius: 20
    },
    fila:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    txtDescripcion:{
      color:'white',
      width: '50%',
      fontSize: 15,
      textAlign: 'justify'
    }
})