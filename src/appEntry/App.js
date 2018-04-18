import React from 'react';
import { View } from 'react-native';
import { StackNavigator, DrawerNavigator, } from 'react-navigation';

import Home from '../scene/Home';
import GeneralProductDetails from '../scene/GeneralProductDetails';
import CreateAd from '../scene/CreateAd';
import SearchListing from '../scene/SearchListing';
import ProfilePublic from '../scene/ProfilePublic';
import Drawer from '../scene/Drawer';

const StackNavigation = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: (props) => ({
            header: null,
            //title: "Demo",
            //headerTintColor: 'red' //https://reactnavigation.org/docs/navigators/stack check this for styles
        })
    },
    GeneralProductDetails: {
        screen: GeneralProductDetails,
        navigationOptions: (props) => ({
            headerTitleStyle: {
                /*  */
            },
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "Product Description",
        })
    },
    CreateAd: {
        screen: CreateAd,
        navigationOptions: (props) => ({
            header: null
        })
    },
    SearchListing: {
        screen: SearchListing,
        navigationOptions: (props) => ({
            headerTitleStyle: {
                /*  */
            },
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "Product List",
        })
    },
    ProfilePublic: {
        screen: ProfilePublic,
        navigationOptions: (props) => ({
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "Profile"
        })
    }
});


const NavigationDrawer = DrawerNavigator(
    {
        Main: { screen: StackNavigation }
    },
    {
        contentComponent: props => <Drawer{...props} />
        // drawerWidth: 200
    }
);

export default NavigationDrawer;
