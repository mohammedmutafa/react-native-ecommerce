import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles from './styles';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

class UpdateAdPhotos extends Component {

    keyExtractor = (item, index) => index.toString();

    renderImageView = () => {
        const { selectPhotoTapped, coverImageURL } = this.props;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: coverImageURL }}
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
                    onPress={selectPhotoTapped}
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

    renderActivityIndicator = () => {
        const { showActivityIndicator } = this.props;

        return (
            <Modal
                visible={showActivityIndicator}
                transparent={true}
                animationType="none"
                onRequestClose={() => null}
            >
                <CustomActivityIndicator />
            </Modal>
        );
    }

    renderPhotoCard = ({ item }) => {
        const {
            selectPhotoTapped,
            deleteImageFromStorage,
            isFibaseStorageInProgress
        } = this.props;

        if (item.url) {
            return (
                <ImageBackground
                    resizeMode="cover"
                    source={{
                        uri: item.url
                    }} style={carouselCardStyle}
                >
                    <Icon
                        name="delete-forever"
                        type="material-community"
                        color={Color.lightBlueWhite}
                        underlayColor="transparent"
                        containerStyle={{ top: 0, right: 0, position: 'absolute', backgroundColor: Color.semiTransparentDarkOverlay, padding: 10 }}
                        onPress={() => deleteImageFromStorage(item.index)}
                    />
                </ImageBackground>
            );
        }

        return (
            <TouchableOpacity
                style={carouselCardStyle}
                onPress={() => selectPhotoTapped(item.index)}
            >
                {
                    isFibaseStorageInProgress ?
                        <ActivityIndicator
                            size="small"
                            color={Color.golden}
                        /> :
                        <Icon
                            name="photo"
                            type="font-awesome"
                            color={Color.lightDark}
                            underlayColor="transparent"
                            size={50}
                        />
                }
                {isFibaseStorageInProgress ? <View /> : <Text style={{ color: Color.dark, fontFamily: Fonts.CharterBT }}>Upload Image</Text>}
            </TouchableOpacity>
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

    renderPhotoList = () => {
        const { imageDataSource } = this.props;

        return (
            <View style={{ marginHorizontal: 25 }}>
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

    render() {
        return (
            <View style={mainConatinerStyle}>
                {this.renderImageView()}
                {this.renderPhotoViewDivider('Gallery')}
                {this.renderPhotoList()}
                {/*this.renderFloatingShareButton()*/}
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
    showActivityIndicator: PropTypes.bool,
    isFibaseStorageInProgress: PropTypes.bool,
    imageDataSource: PropTypes.array,
    selectPhotoTapped: PropTypes.func,
    deleteImageFromStorage: PropTypes.func,
    coverImageURL: PropTypes.string
};

export default UpdateAdPhotos;
