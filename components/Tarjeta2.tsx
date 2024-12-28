import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {

    const [visible, setvisible] = useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={() => setvisible(true)}>
      <Text style={styles.txtNombre}>{props.datos.name.first} {props.datos.name.last}</Text>
      <Modal visible={ visible } >

        <View style={styles.modal}>
        <Text style={styles.txtNombre}>{props.datos.name.first} {props.datos.name.last}</Text>
        <Image source={{uri: props.datos.images.main}} style={styles.img}/>
        <Button title='CERRAR' onPress={() => setvisible(false)}/>
        </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtNombre:{
        fontSize:30
    },
    container:{
        backgroundColor: '#0f118a',
        margin:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        backgroundColor: '#27bcd3',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width: 150,
        height:300,
        resizeMode:'contain',
        display:'flex',
        justifyContent:'center'
    }
})