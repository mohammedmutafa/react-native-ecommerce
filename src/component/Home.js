import React, { Component } from 'react';
import {
    AppRegistry, Text, View, Image, Alert,
    FlatList, StyleSheet, Dimensions, ScrollView,
    TouchableOpacity, Button, ToolbarAndroid, Platform
} from 'react-native';
import Swiper from 'react-native-swiper';
import { SearchBar } from 'react-native-elements'

export default class Home extends Component {
    renderSwiper = () => {
        const { sliderContainerStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
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
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/photographyBanner.png?alt=media&token=d86028a6-fbaa-4398-960b-20a4b1afa952' }}
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
                {this.renderSearchBar()}
            </View >
        );
    }

    renderSearchBar = () => {
        return (
            <SearchBar
                containerStyle={styles.searchbarContainerStyle}
                inputStyle={styles.searchBarStyle}
                lightTheme={true}
                round={true}
                noIcon={true}
                onChangeText={null}
                onClearText={null}
                placeholderTextColor="#C7C7CD"
                placeholder='Search for the Product...'
            />
        );
    }

    render() {
        const { sliderContainerStyle, containerStyle } = styles;

        return (
            <View >
                {this.renderSwiper()}
            </View>
        );
    }
}

const window = Dimensions.get('window');
const categoryContainerHeight = (160 / 768) * window.height;


const styles = StyleSheet.create({
    mainConatinerStyle: {

    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden', // for hide the not important parts from circle
        height: window.width / 1.7,
        justifyContent: 'center',
        alignItems: 'center'

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
    },
    searchbarContainerStyle: {
        width: window.width - 65,
        height: (50 / 768) * window.height,
        padding: 25,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            },
        })
    },
    searchBarStyle: {
        backgroundColor: '#FFFFFF',
        width: window.width - 75
    }
});
