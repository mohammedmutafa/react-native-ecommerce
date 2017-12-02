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
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/travelBanner.png?alt=media&token=9cb6ab5e-229e-4308-b7a0-5835936e1635' }}
                        style={styles.slide1}
                    />
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/fashion.jpg?alt=media&token=3426181c-22fa-43f1-aac3-177b20676bb5' }}
                        style={styles.slide1}
                    />
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/bikesBanner.png?alt=media&token=1bc56821-8262-4bfe-b67d-2a6129ec87d3' }}
                        style={styles.slide1}
                    />
                    <Image
                        //Flag URL: https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/nepal.png?alt=media&token=aa5bcfc5-8a6a-4b69-92c8-2d208b2fc2b9
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/basketBanner.png?alt=media&token=adeb788e-66df-448f-959d-db20b07f423c' }}
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
        backgroundColor: '#FFFFFF',
    }
});
