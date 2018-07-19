import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';
import Color from '../../styles/Color';

class EditUserAd extends Component {

    keyExtractor = (item, index) => index.toString();

    renderItemCard = ({ item }) => {
        const { onPressAdsCard, onPressUpdatePhotos, onPressEditAdDetails } = this.props;
        const coverImageURL = item ? item.image_0 : undefined;

        return (
            <View
                style={listCardStyle}
            >
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: Color.dark }}>
                    <TouchableOpacity
                        onPress={() => onPressEditAdDetails(item)}
                        style={{
                            flex: 1, justifyContent: 'center', alignItems: 'center',
                            borderWidth: 1, borderColor: Color.golden
                        }}
                    >
                        <Icon
                            name="pencil"
                            type="evilicon"
                            size={30}
                            underlayColor="transparent"
                            color={Color.golden}
                        //onPress={() => onPressEditAdDetails(item)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPressUpdatePhotos(item)}
                        style={{
                            flex: 1, justifyContent: 'center', alignItems: 'center',
                            borderWidth: 1, borderLeftColor: Color.golden,
                            borderRightColor: Color.golden,
                        }}
                    >
                        <Icon
                            name="ios-images-outline"
                            type="ionicon"
                            size={30}
                            underlayColor="transparent"
                            color={Color.golden}
                        //onPress={selectPhotoTapped}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1, justifyContent: 'center', alignItems: 'center',
                            borderWidth: 1, borderColor: Color.golden
                        }}
                    >
                        <Icon
                            name="trash"
                            type="evilicon"
                            size={35}
                            underlayColor="transparent"
                            color={Color.golden}
                        //onPress={selectPhotoTapped}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ flex: 4 }}
                    onPress={() => onPressAdsCard(item)}
                >
                    <Image
                        source={{ uri: coverImageURL }}
                        style={listCardImageStyle}
                    />
                </TouchableOpacity>

            </View >
        );
    }

    renderPublishedPostList = () => {
        const { sellerAdsList } = this.props;

        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ alignSelf: 'center', marginTop: 10, backgroundColor: colors.lightBlueWhite }}
                data={sellerAdsList}
                renderItem={this.renderItemCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
            />
        );
    }

    renderActivityIndicator = () => {
        return (
            <ActivityIndicator
                size="large"
                color={Color.golden}
                style={activityIndicatorStyle}
            />
        );
    }

    render() {
        const { isFetchingAdsDataFromFirestore } = this.props;

        return (
            <View
                showsVerticalScrollIndicator={false}
                style={conatinerStyle}
            >
                {isFetchingAdsDataFromFirestore ? this.renderActivityIndicator() : this.renderPublishedPostList()}
            </View>
        );
    }
}

const {
    conatinerStyle,
    activityIndicatorStyle,
    listCardStyle,
    listCardImageStyle
} = styles;

EditUserAd.propTypes = {
    navigation: PropTypes.object,
    sellerAdsList: PropTypes.array,
    onPressAdsCard: PropTypes.func,
    onPressUpdatePhotos: PropTypes.func,
    isFetchingAdsDataFromFirestore: PropTypes.bool
};

export default EditUserAd;
