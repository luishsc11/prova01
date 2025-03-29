import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FlatListScreen from './scroll/FlatListScreen';
import FormScreen from './scroll/FormScreen';
import SectionListScreen from './scroll/SectionListScreen';
const Tab = createBottomTabNavigator();


export default function App() {
    return (
      
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Lista') {
                            iconName = focused
                                ? 'list'
                                : 'list-outline';
                        } else if (route.name === 'Secao') {
                            iconName = focused
                                ? 'bookmarks'
                                : 'bookmarks-outline';
                        } else if (route.name === 'Formulario') {
                            iconName = focused
                                ? 'document'
                                : 'document-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Lista" component={FlatListScreen} />
                <Tab.Screen name="Secao" component={SectionListScreen} />
                <Tab.Screen name="Formulario" component={FormScreen} />
            </Tab.Navigator>
    );
}
