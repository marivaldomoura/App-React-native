import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logins() {
    return (
        <View >
            <Image source={require('./../Assets/img/image13.png')} />
            <View style={styles.container}>
                <Text style={styles.textosejabemvindo}>Bem Vindo ao CodeBox</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },
    textosejabemvindo: {
        fontSize: '32',
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
})