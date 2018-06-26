import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';

import Categories from '../../styles/Categories';
import { PhotoViewer } from '../../component/PhotoViewer';
import styles, { STICKY_HEADER_HEIGHT, SLIDER_HEIGHT } from './styles';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';

const { MainCategory } = Categories;

class GeneralProductDetails extends Component {

    renderImageView = () => {
        const { containerStyle, semiTransparentViewStyle } = styles;
        const { thumbnailURL, time } = this.props;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: thumbnailURL }}
                    style={styles.slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={styles.textContainerStyle}>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}>This is a demo title for the product descriptions.</Animatable.Text>
                    <Animatable.Text style={styles.dateTextStyle} animation="fadeInLeft" delay={200}>{time}</Animatable.Text>
                </View>
            </View >
        );
    }

    renderProductTitle = () => {
        const { price } = this.props;
        return (
            <Text style={styles.priceTextStyle}>{`₹ ${numberWithCommas(price)}`}</Text>
        );
    }

    renderProductDescription = () => {
        const { details } = this.props;

        return (
            <Text style={styles.decsriptionTextStyle}>{details}</Text>
        );
    }

    renderPhotoViewDivider = () => {
        const { photoViewerDividerStyle, photoViewerDividerContainerStyle, photoViewDividerTextstyle } = styles;
        return (
            <View style={photoViewerDividerContainerStyle}>
                <Text style={photoViewDividerTextstyle}>Photos   </Text>
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
                    color={Color.golden}
                    underlayColor="transparent"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    renderPhotoViewer = () => {
        const { isPhotoViewerVisible, hidePhotoViewer, clickedPhotoIndex, photoViewerDataSource } = this.props;
        return <PhotoViewer
            isPhotoViewerVisible={isPhotoViewerVisible}
            hidePhotoViewer={hidePhotoViewer}
            photoIndex={clickedPhotoIndex}
            dataSource={photoViewerDataSource}
        />
    }

    keyExtractor = (item, index) => index.toString();

    renderPhotoCard = ({ item, index }) => {
        const { photoCardStyle, imageRowStyle } = styles;
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
            <View style={styles.imageViewFlatListContainerStyle}>
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
                    <Animatable.View animation="slideInUp" delay={200}>
                        {this.renderProductTitle()}
                        <Text style={styles.boldSeparator}>______</Text>
                        {this.renderProductDescription()}
                        {this.renderPhotoViewDivider()}
                        {this.renderPhotoList()}
                        {this.renderPhotoViewer()}
                    </Animatable.View>
                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
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
    imageViewFlatListContainerStyle
} = styles;

export default GeneralProductDetails;
