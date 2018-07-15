import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';

import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles, { STICKY_HEADER_HEIGHT, SLIDER_HEIGHT } from './styles';
import Color from '../../styles/Color';
import { screenWidth } from '../../utilities/ScreenSize';
import Fonts from '../../styles/Fonts';
const cardwidth = screenWidth * 0.8;

class UpdateAdPhotos extends Component {

    renderImageView = () => {
        // const { thumbnailURL, time, title } = this.props;

        return (
            <View style={containerStyle}>
                <Image
                    source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_cars.jpg?alt=media&token=475bad74-d9d4-437e-bf61-992667d5c8d3'
                    }}
                    style={slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={textContainerStyle}>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}>{'iPhoneX'}</Animatable.Text>
                    <Animatable.Text style={dateTextStyle} animation="fadeInLeft" delay={200}>{'2018'}</Animatable.Text>
                </View>
                <Icon
                    name="ios-camera-outline"
                    type="ionicon"
                    color={Color.lightBlueWhite}
                    underlayColor="transparent"
                    containerStyle={{ bottom: 0, right: 0, position: 'absolute', backgroundColor: Color.semiTransparentDarkOverlay, paddingHorizontal: 15, paddingVertical: 10 }}
                    onPress={() => console.log('hello')}
                />
            </View >
        );
    }

    renderFloatingShareButton = () => {
        return (
            <View style={floatingShareButtonStyle}>
                <Icon
                    raised
                    name="md-close"
                    type="ionicon"
                    color={Color.golden}
                    underlayColor="transparent"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    renderForeground = () => {
        return (
            <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.renderImageView()}
            </View>
        );
    }

    renderActivityIndicator = () => {

        return (
            <Modal
                visible={false}
                transparent={true}
                animationType="none"
                onRequestClose={() => null}
            >
                <CustomActivityIndicator />
            </Modal>
        );
    }

    renderUploadImageCard = () => {
        return (
            <TouchableOpacity
                style={carouselCardStyle}
            >
                <Icon
                    name="photo"
                    type="font-awesome"
                    color={Color.lightDark}
                    underlayColor="transparent"
                    size={80}
                    // containerStyle={{ backgroundColor: Color.semiTransparentDarkOverlay, padding: 10 }}
                    onPress={() => console.log('hello')}
                />
                <Text style={{ color: Color.dark, fontFamily: Fonts.CharterBT }}>Upload Image</Text>

            </TouchableOpacity>
        );
    }

    renderImageBackground = () => {
        return (
            <ImageBackground
                resizeMode="cover"
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_hotels.jpg?alt=media&token=a9f71dbe-ae30-41ea-8838-07042ce7a920'
                }} style={carouselCardStyle}
            >
                <Icon
                    name="delete-forever"
                    type="material-community"
                    color={Color.lightBlueWhite}
                    underlayColor="transparent"
                    containerStyle={{ top: 0, right: 0, position: 'absolute', backgroundColor: Color.semiTransparentDarkOverlay, padding: 10 }}
                    onPress={() => console.log('hello')}
                />
            </ImageBackground>
        );
    }

    _renderCarouselItem = ({ item, index }) => {
        return this.renderImageBackground();
    }

    renderPhotoViewDivider = (title) => {
        return (
            <View style={photoViewerDividerContainerStyle}>
                <Text style={photoViewDividerTextstyle}>{title}   </Text>
                <View style={photoViewerDividerStyle} />
            </View>
        );
    }

    render() {
        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    // bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor="#FFFFFF"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={this.renderForeground}
                >
                    {this.renderPhotoViewDivider('Gallery')}
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={[{ a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }, { f: 1 }, { g: 1 }]}
                        renderItem={this._renderCarouselItem}
                        sliderWidth={screenWidth}
                        itemWidth={cardwidth}
                    />

                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
                {/*this.renderActivityIndicator()*/}
            </View >
        );
    }
}

const {
    mainConatinerStyle,
    floatingShareButtonStyle,
    containerStyle,
    slide1,
    titleTextStyle,
    floatingButtonContainerStyle,
    semiTransparentViewStyle,
    dateTextStyle,
    textContainerStyle,
    photoViewerDividerContainerStyle,
    photoViewerDividerStyle,
    photoViewDividerTextstyle,
    carouselCardStyle
} = styles;

UpdateAdPhotos.propTypes = {
    navigation: PropTypes.object,
    thumbnailURL: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.number,
    location: PropTypes.string,
    ownerID: PropTypes.string,
    isPhotoViewerVisible: PropTypes.bool,
    hidePhotoViewer: PropTypes.func,
    clickedPhotoIndex: PropTypes.number,
    photoViewerDataSource: PropTypes.array,
    onPressSellerAvatar: PropTypes.func,
    sellerData: PropTypes.object,
    showPhotoViewer: PropTypes.func
};

export default UpdateAdPhotos;
