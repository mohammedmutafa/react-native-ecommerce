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

const { MainCategory } = Categories;

class GeneralProductDetails extends Component {

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
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}>This is a demo title for the product descriptions.</Animatable.Text>
                    <Animatable.Text style={styles.dateTextStyle} animation="fadeInLeft" delay={200}>25th December, 2018</Animatable.Text>
                </View>
            </View >
        );
    }

    renderProductTitle = () => {
        return (
            <Text style={styles.priceTextStyle}>₹ 20,000</Text>
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
                    color="#DAA520"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    renderPhotoViewer = () => {
        const { isPhotoViewerVisible, hidePhotoViewer } = this.props;
        return <PhotoViewer
            isPhotoViewerVisible={isPhotoViewerVisible}
            hidePhotoViewer={hidePhotoViewer}
            photoIndex={4} //TODO Pass index as per click event on gallery
            dataSource={[
                //  { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
                { source: { uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_phones.jpg?alt=media&token=edce8750-9cdf-4ce0-8650-530eba310ed1' } },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
            ]}
        />
    }

    keyExtractor = (item, index) => index;

    renderPhotoCard = ({ item }) => {
        const { photoCardStyle, imageRowStyle } = styles;
        const { showPhotoViewer } = this.props;

        return (
            <TouchableOpacity onPress={showPhotoViewer} style={photoCardStyle}>
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
