import React from 'react';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

import Home from '../scene/Home';
import GeneralProductDetails from '../scene/GeneralProductDetails';
import CreateAd from '../scene/CreateAd';
import SearchListing from '../scene/SearchListing';
import ProfilePublic from '../scene/ProfilePublic';
import UserProfile from '../scene/UserProfile';
import Drawer from '../scene/Drawer';
import Fonts from '../styles/Fonts';

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
                fontFamily: Fonts.CharterBT
            },
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "Product Description",
            drawerLockMode: 'locked-closed'
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
            drawerLockMode: 'locked-closed'
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
            title: "Profile",
            drawerLockMode: 'locked-closed'
        })
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: (props) => ({
            headerStyle: {
                backgroundColor: '#2a2a2a',
                elevation: 0 //Only for Android
            },
            headerTintColor: '#FFFFFF',
            title: "Edit Profile",
            drawerLockMode: 'locked-closed'
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
