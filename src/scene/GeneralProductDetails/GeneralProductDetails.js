import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Avatar } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';

import { PhotoViewer } from '../../component/PhotoViewer';
import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles, { STICKY_HEADER_HEIGHT, SLIDER_HEIGHT } from './styles';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';

class GeneralProductDetails extends Component {

    renderImageView = () => {
        const { thumbnailURL, time, title } = this.props;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: thumbnailURL }}
                    style={slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={textContainerStyle}>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}>{title}</Animatable.Text>
                    <Animatable.Text style={dateTextStyle} animation="fadeInLeft" delay={200}>{time}</Animatable.Text>
                </View>
            </View >
        );
    }

    renderProductTitle = () => {
        const { price } = this.props;
        return (
            <Text style={priceTextStyle}>{`₹ ${numberWithCommas(price)}`}</Text>
        );
    }

    renderLocation = () => {
        const { location } = this.props;

        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 25, marginBottom: 5, alignContent: 'center' }}>
                <Icon
                    name="ios-pin-outline"
                    type="ionicon"
                    color={Color.golden}
                    underlayColor="transparent"
                />
                <Text style={locationTextStyle}>{location}</Text>
            </View>
        );
    }

    renderProductDescription = () => {
        const { details } = this.props;

        return (
            <Text style={decsriptionTextStyle}>{details}</Text>
        );
    }

    renderPhotoViewDivider = (title) => {
        return (
            <View style={photoViewerDividerContainerStyle}>
                <Text style={photoViewDividerTextstyle}>{title}   </Text>
                <View style={photoViewerDividerStyle} />
            </View>
        );
    }

    renderFloatingShareButton = () => {
        return (
            <View style={floatingShareButtonStyle}>
                <Icon
                    raised
                    name="md-share"
                    type="ionicon"
                    color={Color.golden}
                    underlayColor="transparent"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    renderPhotoViewer = () => {
        const {
            isPhotoViewerVisible,
            hidePhotoViewer,
            clickedPhotoIndex,
            photoViewerDataSource
        } = this.props;

        return (
            <PhotoViewer
                isPhotoViewerVisible={isPhotoViewerVisible}
                hidePhotoViewer={hidePhotoViewer}
                photoIndex={clickedPhotoIndex}
                dataSource={photoViewerDataSource}
            />
        );
    }

    keyExtractor = (item, index) => index.toString();

    renderPhotoCard = ({ item, index }) => {
        const { showPhotoViewer } = this.props;

        return (
            <TouchableOpacity onPress={() => showPhotoViewer(index)} style={photoCardStyle}>
                <Image
                    source={{ uri: item.url }}
                    style={imageRowStyle}
                />
            </TouchableOpacity >
        );
    }

    renderPhotoList = () => {
        const { imageDataSource } = this.props;

        if (imageDataSource.length < 1) {
            return (
                <View style={[photoCardStyle, { marginHorizontal: 25, justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={imageNotAvailableTextStyle}>Not Available</Text>
                </View >
            );
        }

        return (
            <View style={imageViewFlatListContainerStyle}>
                <FlatList
                    data={imageDataSource}
                    renderItem={this.renderPhotoCard}
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
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

    renderProfileHeader = () => {
        const { onPressSellerAvatar, sellerData } = this.props;
        const {
            phoneNumber,
            profileImageURL,
            firstName,
            lastName
        } = sellerData;
        const sellerFirstName = firstName ? firstName : '';
        const sellerLastName = lastName ? lastName : '';
        const sellerPhoneNumber = phoneNumber ? phoneNumber : '';

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    rounded
                    width={50}
                    height={50}
                    containerStyle={{ marginHorizontal: 25 }}
                    source={{ uri: profileImageURL }}
                    activeOpacity={0.7}
                    onPress={onPressSellerAvatar}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[followButtonTextstyle, { color: Color.dark, marginBottom: 5 }]}>{sellerFirstName + ' ' + sellerLastName}</Text>
                    <Text style={[followButtonTextstyle, { color: Color.lightDark, fontSize: 14 }]}>{sellerPhoneNumber}</Text>
                </View>
            </View>
        );
    }

    renderFollowButton = () => {
        const { onPressSellerAvatar } = this.props;

        return (
            <View style={followButtonContainerStyle}>
                <TouchableOpacity style={{ flex: 1 }} onPress={onPressSellerAvatar}>
                    <Text style={followButtonTextstyle}>PROFILE</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: Color.placeholderWhite }}>|</Text>
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={followButtonTextstyle}>CONTACT</Text>
                </TouchableOpacity>
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
                    <Animatable.View animation="slideInUp" delay={200}>
                        {this.renderProductTitle()}
                        <Text style={boldSeparator}>______</Text>
                        {this.renderLocation()}
                        {this.renderProductDescription()}
                        {this.renderPhotoViewDivider('Photos')}
                        {this.renderPhotoList()}
                        {this.renderPhotoViewer()}
                        {this.renderPhotoViewDivider('Seller')}
                        {this.renderProfileHeader()}
                        {this.renderFollowButton()}
                    </Animatable.View>
                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
                {this.renderActivityIndicator()}
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
    decsriptionTextStyle,
    boldSeparator,
    floatingButtonContainerStyle,
    semiTransparentViewStyle,
    priceTextStyle,
    dateTextStyle,
    textContainerStyle,
    photoViewerDividerContainerStyle,
    photoViewerDividerStyle,
    photoViewDividerTextstyle,
    photoCardStyle,
    imageRowStyle,
    imageViewFlatListContainerStyle,
    followButtonContainerStyle,
    followButtonTextstyle,
    locationTextStyle,
    imageNotAvailableTextStyle
} = styles;

GeneralProductDetails.propTypes = {
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
    imageDataSource: PropTypes.array,
    onPressSellerAvatar: PropTypes.func,
    sellerData: PropTypes.object,
    showPhotoViewer: PropTypes.func
};

export default GeneralProductDetails;
