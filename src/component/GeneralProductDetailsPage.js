import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    Modal,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class GeneralProductDetailsPage extends Component {

    renderImageView = () => {
        const { containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/travelBanner.png?alt=media&token=9cb6ab5e-229e-4308-b7a0-5835936e1635' }}
                    style={styles.slide1}
                />
            </View >
        );
    }

    renderFloatingShareButton = () => {

        return (
            <View style={styles.floatingShareButtonStyle}>
                <Icon
                    raised
                    name="phone-call"
                    type="feather"
                    color="#2a2a2a"
                    onPress={null}
                />
            </View>
        );
    }

    render() {
        const { mainConatinerStyle } = styles;

        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor="#FFFFFF"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={() => (
                        <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {this.renderImageView()}
                        </View>
                    )}
                >
                    {/*this.renserLoginWithPhoneModalView()*/}
                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
            </View >
        );
    }
}

const window = Dimensions.get('window');

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    floatingShareButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden', // for hide the not important parts from circle
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'

    },
    slide1: {
        height: SLIDER_HEIGHT,// same width and height for the container
        width: window.width,
        position: 'absolute', // position it in circle
        bottom: 0, // position it in circle
        marginLeft: window.width / 2, // center it in main view same value as marginLeft for circle but positive
        backgroundColor: '#FFFFFF'
    }
});

export default GeneralProductDetailsPage;