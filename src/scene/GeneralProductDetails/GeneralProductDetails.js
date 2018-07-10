import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';

import Categories from '../../styles/Categories';
import { PhotoViewer } from '../../component/PhotoViewer';
import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles, { STICKY_HEADER_HEIGHT, SLIDER_HEIGHT } from './styles';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';

const { MainCategory } = Categories;

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
                    source={{ uri: item.thumbnail }}
                    style={imageRowStyle}
                />
            </TouchableOpacity >
        );
    }

    renderPhotoList = () => {
        return (
            <View style={imageViewFlatListContainerStyle}>
                <FlatList
                    data={MainCategory}
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
        const {
            phoneNumber,
            profileImageURL,
            firstName,
            lastName
        } = this.props.sellerData;

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    rounded
                    width={50}
                    height={50}
                    containerStyle={{ marginHorizontal: 25 }}
                    source={{ uri: profileImageURL }}//onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[followButtonTextstyle, { color: Color.dark, marginBottom: 5 }]}>{firstName + ' ' + lastName}</Text>
                    <Text style={[followButtonTextstyle, { color: Color.dark, fontSize: 14 }]}>{phoneNumber}</Text>
                </View>

            </View>
        );
    }

    renderFollowButton = () => {
        return (
            <View style={followButtonContainerStyle}>
                <Text style={followButtonTextstyle}>PROFILE</Text>
                <Text style={{ fontSize: 18, color: Color.placeholderWhite }}>|</Text>
                <Text style={followButtonTextstyle}>CONTACT</Text>
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
    locationTextStyle
} = styles;

export default GeneralProductDetails;
