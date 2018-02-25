import React from 'react';
import {
    Image, View, Modal,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

import styles from './styles';

const {
    container,
    floatingButton,
    floatingMenuButtonTop,
    floatingMenuButtonEnd,
    iconStyle
} = styles;

export const PhotoViewer = ({ visible, dataSource }) => {
    return (
        <Modal visible={true}>
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={[
                    //  { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
                    { source: { uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_phones.jpg?alt=media&token=edce8750-9cdf-4ce0-8650-530eba310ed1' } },
                    { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                    { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                    { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                ]}
            />
        </Modal>
    );
};

PhotoViewer.propTypes = {
    visible: PropTypes.bool,
    dataSource: PropTypes.array
};
