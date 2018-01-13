import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const list = [
    {
        title: 'Mobiles',
        icon: 'phone-android'
    },
    {
        title: 'Electronics & Appliances',
        icon: 'devices-other'
    },
    {
        title: 'Properties',
        icon: 'location-city'
    },
    {
        title: 'Bikes',
        icon: 'motorcycle'
    },
    {
        title: 'Adventure & Holiday Packages',
        icon: 'landscape'
    },
    {
        title: 'Hotels',
        icon: 'hotel'
    },
    {
        title: 'Furniture',
        icon: 'weekend'
    },
    {
        title: 'Jobs',
        icon: 'business-center'
    },
    {
        title: 'Services',
        icon: 'spa'
    },
    {
        title: 'Pets',
        icon: 'pets'
    },
    {
        title: 'Books, Sports & Hobbies',
        icon: 'school'
    },
    {
        title: 'Fashion',
        icon: 'local-mall'
    },
    ,
    {
        title: 'Flight & Bus Tickets',
        icon: 'flight-takeoff'
    }
]

class CreateAdSpecificationModalView extends Component {

    render() {
        const { mainConatinerStyle, scrollViewConatinerStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={scrollViewConatinerStyle}
                >
                    <List>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    leftIcon={{ name: item.icon }}
                                />
                            ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        padding: 25,
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    scrollViewConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    floatingMenuButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    noteContainerStyle: {
        backgroundColor: 'transparent',
        marginBottom: 15
    }
});

export default CreateAdSpecificationModalView;
