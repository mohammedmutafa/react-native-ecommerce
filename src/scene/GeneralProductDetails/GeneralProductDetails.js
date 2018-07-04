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
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    rounded
                    width={50}
                    height={50}
                    containerStyle={{ marginHorizontal: 25 }}
                    source={{ uri: "data:image/jpeg;base64,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" }}
                    //onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text style={[followButtonTextstyle, { color: Color.dark }]}>1234567890</Text>
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
