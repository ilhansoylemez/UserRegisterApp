import React, { useState } from 'react'
import { SafeAreaView, Text,Alert } from 'react-native'
import Input from '../Components/Input'
import Button from '../Components/Button/Button';
import { useNavigation } from '@react-navigation/native';
const MemberSign = () => {
    const navigation = useNavigation();
    const [userName, SetUserName] = useState('');
    const [userSurName, SetuserSurName] = useState('');
    const [userAge, SetUserAge] = useState('');
    const [userEmail, SetuserEmail] = useState('');
    const [userCity, SetuserCity] = useState('');
    function handleSubmit() {
        if (!userName ||
            !userSurName ||
            !userAge ||
            !userEmail ||
            !userCity) {
            Alert.alert('Söylemez Software', 'Alanlar boş bırakılamaz!!')
            return;
            }
        const User = {
            userName,
            userSurName,
            userAge,
            userEmail,
            userCity
        };
        navigation.navigate('Üye Bilgileri',{User});
        console.log(User);
    }

    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeHolder="Üyenin ismini giriniz..." onChangeText={SetUserName} />
            <Input label="Üye Soyad" placeHolder="Üyenin Soyadını giriniz..." onChangeText={SetuserSurName} />
            <Input label="Üye Yaş" placeHolder="Üyenin Yaşını giriniz..." onChangeText={SetUserAge} />
            <Input label="Üye E-Posta" placeHolder="Üyenin E-posta adresini giriniz..." onChangeText={SetuserEmail} />
            <Input label="Üye Memleketi" placeHolder="Üyenin memleketini giriniz..." onChangeText={SetuserCity} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;  