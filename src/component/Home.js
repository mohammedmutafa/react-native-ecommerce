import React, { Component } from 'react';
import {
    AppRegistry, Text, View, Image, Alert,
    FlatList, StyleSheet, Dimensions, ScrollView,
    TouchableOpacity, Button, ToolbarAndroid, Modal
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Home extends Component {
    renderSwiper = () => {
        const { sliderContainerStyle, containerStyle } = styles;

        return (
            <View style={sliderContainerStyle}>
                <Swiper style={styles.wrapper} autoplay={true}>
                    <Image
                        source={{ uri: 'http://carzonemumbai.com/images/ddfb1335c2d0966fb79e964d02948d7e20130816_141807.jpg' }}
                        style={styles.slide1}
                    />
                    <Image
                        source={{ uri: 'http://st.motortrend.com/uploads/sites/10/2015/11/2016-hyundai-elantra-sport-sedan-angular-front2.png' }}
                        style={styles.slide1}
                    />
                    <Image
                        source={{ uri: 'http://gomotorplace.com/wp-content/uploads/2016/12/Ford-Fiestav.jpg' }}
                        style={styles.slide1}
                    />
                </Swiper>
            </View>
        );
    }

    render() {
        const { sliderContainerStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                {this.renderSwiper()}
            </View>
        );
    }

}

const window = Dimensions.get('window');
const categoryContainerHeight = (160 / 768) * window.height;


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    sliderContainerStyle: {
        height: (350 / 768) * window.height
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
});
