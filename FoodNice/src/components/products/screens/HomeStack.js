import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Home';
import Detail from './Detail';
import Filter from './Filter';
import ProductDetail from './ProductDetail'
import Order from './Payments';

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Order" component={Order} />
  
      </Stack.Navigator>
    )
}

export default HomeStack

