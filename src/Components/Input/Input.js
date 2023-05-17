import React from 'react'
import { View,TextInput,Text } from 'react-native'
import Styles from './Input.style'
const Input = ({ label,placeHolder,onChangeText }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>{label}</Text>
            <View style={Styles.innerContainer}>
                <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input;