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
import * as Animatable from 'react-native-animatable';

class GeneralProductDetailsPage extends Component {

    renderImageView = () => {
        const { containerStyle, semiTransparentViewStyle } = styles;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/fashion.jpg?alt=media&token=3426181c-22fa-43f1-aac3-177b20676bb5' }}
                    style={styles.slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={styles.textContainerStyle}>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={styles.priceTextStyle} animation="fadeInLeft" delay={200}>₹ 20,000</Animatable.Text>
                    <Animatable.Text style={styles.dateTextStyle} animation="fadeInLeft" delay={200}>25th December, 2018</Animatable.Text>
                </View>
            </View >
        );
    }

    renderProductTitle = () => {
        return (
            <Text style={styles.titleTextStyle}>This is a demo title for the product descriptions.</Text>
        );
    }

    renderProductDescription = () => {
        return (
            <Text style={styles.decsriptionTextStyle}>When numberOfLines is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.

            This can be one of the following values:

            head - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
            middle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
            tail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
            clip - Lines are not drawn past the edge of the text container.</Text>
        );
    }

    renderPhotoViewDivider = () => {
        const { photoViewerDividerStyle, photoViewerDividerContainerStyle, photoViewDividerTextstyle } = styles;
        return (
            <View style={photoViewerDividerContainerStyle}>
                <Text style={photoViewDividerTextstyle}>Photos </Text>
                <View style={photoViewerDividerStyle} />
            </View>
        );
    }

    renderFloatingShareButton = () => {
        const { floatingShareButtonStyle, floatingButtonContainerStyle } = styles;

        return (
            <View style={floatingShareButtonStyle}>
                <Icon
                    raised
                    name="phone"
                    type="simple-line-icon"
                    color="#DAA520"
                    containerStyle={floatingButtonContainerStyle}
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
                    {this.renderProductTitle()}
                    <Text style={styles.boldSeparator}>______</Text>
                    {this.renderProductDescription()}
                    {this.renderPhotoViewDivider()}
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
    },
    titleTextStyle: {
        // color: '#00',
        fontSize: 18,
        fontStyle: 'italic',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    decsriptionTextStyle: {
        // color: '#00',
        fontSize: 16,
        //fontStyle: 'italic',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        bottom: 5,
        // textAlign: 'justify' //The value 'justify' is only supported on iOS and fallbacks to left on Android.
    },
    boldSeparator: {
        color: '#DAA520',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 25
    },
    floatingButtonContainerStyle: {
        backgroundColor: '#2a2a2a',
        borderWidth: 0.5,
        borderColor: '#DAA520'
    },
    semiTransparentViewStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: window.width,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    },
    priceTextStyle: {
        color: '#FFFFFF',
        fontSize: 30
    },
    dateTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        paddingBottom: 10
    },
    textContainerStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: window.width,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    photoViewerDividerContainerStyle: {
        flexDirection: 'row',
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoViewerDividerStyle: {
        height: 1,
        backgroundColor: '#DAA520',
        flex: 1,
        marginTop: 5
    },
    photoViewDividerTextstyle: {
        color: '#DAA520',
        fontStyle: 'italic',
        fontSize: 20
    }
});

export default GeneralProductDetailsPage;
