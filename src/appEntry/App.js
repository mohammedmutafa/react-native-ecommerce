import React from 'react';
import { View } from 'react-native';
import { StackNavigator, DrawerNavigator, } from 'react-navigation';

import Home from '../scene/Home';
import GeneralProductDetailsPage from '../container/GeneralProductDetailsPage';
import CreateAdPage from '../container/CreateAd';
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
        screen: GeneralProductDetailsPage,
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
        screen: CreateAdPage,
        navigationOptions: (props) => ({
            headerTitleStyle: {
                /*  */
            },
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "CREATE YOUR AD",
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
            header: null
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
