import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/ionicons';


import Pesanan from './screens/pesanan-saya'
import Batal from './screens/pembatalan'
import More from './screens/lainnya'
import Stack from './screens/stack'


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Beranda" component={Stack} options={{
          headerShown: false,
          tabBarIcon: () => (<Icon name={'home-outline'} size={28} />)
        }}
        />
        <Tab.Screen name="Pesanan Saya" component={Pesanan} options={{
          headerShown: false,
          tabBarIcon: () => (<Icon name={'cart-outline'} size={28} />)
        }}
        />
        <Tab.Screen name="Pembatalan" component={Batal} options={{
          headerShown: false,
          tabBarIcon: () => (<Icon name={'close-circle-outline'} size={28} />)
        }}
        />
        <Tab.Screen name="Lainnya" component={More} options={{
          headerShown: false,
          tabBarIcon: () => (<Icon name={'menu-outline'} size={28} />)
        }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  )
}