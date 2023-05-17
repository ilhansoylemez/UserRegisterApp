import React from 'react'
import { View, SafeAreaView,Text,StyleSheet } from 'react-native'


const MemberResult = ({route}) => {
    const user = route.params.User;
    return (
        <SafeAreaView style={style.container}>
            <View>
             <Text style={style.text}>Ad: {user.userName} </Text>
             <Text style={style.text}>Soayd: {user.userSurName}</Text>
             <Text style={style.text}>Yaş: {user.userAge}</Text>
             <Text style={style.text}>E-Posta: {user.userEmail}</Text>
             <Text style={style.text}>Memleket: {user.userCity}</Text>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
});

export default MemberResult;