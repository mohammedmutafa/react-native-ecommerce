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
        alignSelf: 'center',
        //marginTop: 100,
        width: window.width,
        overflow: 'hidden', // for hide the not important parts from circle
        //margin: 10,
        height: window.width / 1.7,
    },
    sliderContainerStyle: {
        borderRadius: window.width, // border borderRadius same as width and height
        width: window.width * 2,
        height: window.width * 2,
        marginLeft: -(window.width / 2),// reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden', // hide not important part of image

    },
    wrapper: {
    },
    slide1: {
        height: window.width / 1.7,// same width and height for the container
        width: window.width,
        position: 'absolute', // position it in circle
        bottom: 0, // position it in circle
        marginLeft: window.width / 2, // center it in main view same value as marginLeft for circle but positive
        backgroundColor: '#9DD6EB',
    }
});
