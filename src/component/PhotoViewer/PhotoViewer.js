import React from 'react';
import {
    Image, View, Modal, Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';
import { Icon } from 'react-native-elements';

import styles from './styles';

const {
    container,
    navigationBar
} = styles;

export class PhotoViewer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: props.dataSource
        }
    }

    get galleryCount() {
        const { index, images } = this.state;
        const { hidePhotoViewer } = this.props;

        return (
            <View style={navigationBar}>
                <Icon
                    name='close'
                    type='evilIcons'
                    color='#FFFFFF'
                    underlayColor='#FFFFFF'
                    onPress={hidePhotoViewer}
                />
                <Text
                    style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>
                    {index + 1} / {images.length}
                </Text>
            </View>
        );
    }

    onChangeImage = (index) => {
        this.setState({ index });
    }

    render() {
        const { isPhotoViewerVisible, dataSource, photoIndex } = this.props;

        return (
            <Modal visible={isPhotoViewerVisible}>
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    onPageSelected={this.onChangeImage}
                    initialPage={photoIndex}
                    images={dataSource}
                />
                {this.galleryCount}
            </Modal>
        );
    }
}

PhotoViewer.propTypes = {
    isPhotoViewerVisible: PropTypes.bool,
    dataSource: PropTypes.array,
    hidePhotoViewer: PropTypes.func,
    photoIndex: PropTypes.number
};