import React from 'react';
import { View, Text } from 'react-native';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="Giriş" component={Welcome} />
        <Stack.Screen name="Üye Kaydı" component={MemberSign}  />
        <Stack.Screen name="Üye Bilgileri" component={MemberResult}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;