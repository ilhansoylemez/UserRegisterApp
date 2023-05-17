import React from "react";
import { SafeAreaView, Text,StyleSheet } from "react-native";
import Button from "../Components/Button";
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    const GoToMemberSign = (props) =>{
        navigation.navigate('Üye Kaydı');
    }
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.header}>Söylemez Software</Text>
            <Button text="Üye Kaydı Oluştur" onPress={GoToMemberSign}/>
        </SafeAreaView>

    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    header:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        textAlign:'center'
    }

});

export default Welcome;