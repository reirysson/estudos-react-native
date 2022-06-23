import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

function Routes() {
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: '#2CCBB9',
                drawerActiveTintColor: '#FFF',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar link',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="MyLinks"
                component={MyLinks}
            />
        </Drawer.Navigator>
    )
}

export default Routes;