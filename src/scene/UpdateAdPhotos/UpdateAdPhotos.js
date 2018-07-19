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
import { PhotoViewer } from '../../component/PhotoViewer';

import styles from './styles';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

class UpdateAdPhotos extends Component {

    keyExtractor = (item, index) => index.toString();

    renderImageView = () => {
        const {
            selectPhotoTapped,
            coverImageURL,
            productTitle,
            updatedAt
        } = this.props;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: coverImageURL }}
                    style={slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={textContainerStyle}>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}>{productTitle}</Animatable.Text>
                    <Animatable.Text style={dateTextStyle} animation="fadeInLeft" delay={200}>{updatedAt}</Animatable.Text>
                </View>
                <Icon
                    name="ios-camera-outline"
                    type="ionicon"
                    color={Color.lightBlueWhite}
                    underlayColor="transparent"
                    containerStyle={{ bottom: 0, right: 0, position: 'absolute', backgroundColor: Color.semiTransparentDarkOverlay, paddingHorizontal: 15, paddingVertical: 10 }}
                    onPress={() => selectPhotoTapped(0)}//Index 0: Cover Image
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
            isFibaseStorageInProgress,
            fileIndexForCurrentFirebaseStorageProgress
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
                        containerStyle={{
                            top: 0,
                            right: 0,
                            position: 'absolute',
                            backgroundColor: Color.semiTransparentDarkOverlay,
                            padding: 10
                        }}
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
                    isFibaseStorageInProgress && (fileIndexForCurrentFirebaseStorageProgress === item.index) ?
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
                {
                    isFibaseStorageInProgress && (fileIndexForCurrentFirebaseStorageProgress === item.index) ?
                        <View /> :
                        <Text style={{ color: Color.dark, fontFamily: Fonts.CharterBT }}>Upload Image</Text>
                }
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

    renderPreviewButton = () => {
        const { showPhotoViewer } = this.props;

        return (
            <View style={previewButtonContainer}>
                <TouchableOpacity
                    style={previewButtonStyle}
                    onPress={showPhotoViewer}
                >
                    <Icon
                        name="ios-images-outline"
                        type="ionicon"
                        size={30}
                        underlayColor="transparent"
                        color={Color.dark}
                    //onPress={selectPhotoTapped}
                    />
                    <Text
                        style={{
                            color: Color.dark,
                            marginHorizontal: 10,
                            fontFamily: Fonts.DancingScriptOT,
                            fontSize: 20
                        }}
                    >
                        Preview
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderPhotoViewer = () => {
        const {
            isPhotoViewerVisible,
            hidePhotoViewer,
            imageDataSource
        } = this.props;

        let modifiedDS = [];

        for (let obj of imageDataSource) {
            if (obj.url) {
                let modifiedObj = { source: { uri: obj.url } }
                modifiedDS.push(modifiedObj)
            }
        }

        return (
            <PhotoViewer
                isPhotoViewerVisible={isPhotoViewerVisible}
                hidePhotoViewer={hidePhotoViewer}
                dataSource={modifiedDS}
            />
        );
    }

    render() {
        return (
            <View style={mainConatinerStyle}>
                {this.renderImageView()}
                {this.renderPhotoViewDivider('Gallery')}
                {this.renderPhotoList()}
                {this.renderPreviewButton()}
                {this.renderPhotoViewer()}
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
    carouselCardStyle,
    previewButtonContainer,
    previewButtonStyle
} = styles;

UpdateAdPhotos.propTypes = {
    navigation: PropTypes.object,
    showActivityIndicator: PropTypes.bool,
    isFibaseStorageInProgress: PropTypes.bool,
    fileIndexForCurrentFirebaseStorageProgress: PropTypes.number,
    imageDataSource: PropTypes.array,
    selectPhotoTapped: PropTypes.func,
    deleteImageFromStorage: PropTypes.func,
    showPhotoViewer: PropTypes.func,
    hidePhotoViewer: PropTypes.func,
    isPhotoViewerVisible: PropTypes.bool,
    coverImageURL: PropTypes.string,
    productTitle: PropTypes.string,
    updatedAt: PropTypes.string
};

export default UpdateAdPhotos;
