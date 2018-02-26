import React from 'react';
import {
    Image, View, Modal, Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

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

        return (
            <View style={navigationBar}>
                <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>Close</Text>
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
        const { isPhotoViewerVisible, dataSource } = this.props;

        return (
            <Modal visible={isPhotoViewerVisible}>
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    onPageSelected={this.onChangeImage}
                    initialPage={0}
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
    hidePhotoViewer: PropTypes.func
};
