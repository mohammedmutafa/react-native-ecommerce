import { StackNavigator } from 'react-navigation';

import Home from '../container/Home';
import GeneralProductDetailsPage from '../container/GeneralProductDetailsPage';
import CreateAdPage from '../container/CreateAd';
import SearchListing from '../scene/SearchListing';
import ProfilePublic from '../scene/ProfilePublic';

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

export default StackNavigation;
