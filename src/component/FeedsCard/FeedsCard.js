
import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';
import Fonts from '../../styles/Fonts'

const {
    container,
    avatarContainer,
    profileConatiner,
    imageViewContainerStyle,
    imageViewStyle,
    nameTextStyle,
    productTitleTextStyle,
    detailContainerStyle
} = styles;

export class FeedsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarked: false
        }
    }

    onPressBookmarkButton = () => {
        this.setState({ bookmarked: !this.state.bookmarked });
    }

    render() {
        const {
            ownerID,
            title,
            productDescription,
            price,
            time,
            selectedLocation,
            thumbnailURL,
            navigation
        } = this.props;
        const { bookmarked } = this.state;

        return (
            <View style={container}>
                <View style={detailContainerStyle}>
                    <View style={avatarContainer}>
                        <View style={profileConatiner}>
                            <Avatar
                                small
                                rounded
                                source={{ uri: thumbnailURL }}
                                onPress={() => navigation.navigate('ProfilePublic')}
                                activeOpacity={0.7}
                            />
                            <Text
                                style={nameTextStyle}
                                ellipsizeMode="tail"
                                numberOfLines={1}
                            >
                                {ownerID}
                            </Text>
                        </View>
                        <Text
                            style={{ alignSelf: 'flex-end', color: colors.lightDark, fontSize: 10 }}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >{time}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={imageViewContainerStyle}
                    onPress={() => navigation.navigate('GeneralProductDetails',
                        {
                            time: time,
                            ownerID: ownerID,
                            price: price,
                            title: title,
                            productDescription: productDescription,
                            thumbnailURL: thumbnailURL,
                            selectedLocation: selectedLocation
                        })}
                >
                    <Image
                        source={{ uri: thumbnailURL }}
                        style={imageViewStyle}
                    />
                    {/*<Icon
                        underlayColor="transparent"
                        name={bookmarked ? 'heart' : 'heart-outlined'}
                        type="entypo"
                        color={bookmarked ? colors.red : colors.lightDark}
                        containerStyle={{ position: 'absolute', alignSelf: 'flex-end', padding: 10 }}
                        onPress={this.onPressBookmarkButton}
                    />*/}
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', bottom: 0, padding: 10, backgroundColor: 'rgba(60, 60, 60, 0.4)' }}>
                        <Text
                            style={{ color: colors.lightWhite, fontSize: 18, fontFamily: Fonts.CharterBT }}
                        >
                            {`₹ ${numberWithCommas(price)}`}
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text
                    style={productTitleTextStyle}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </View>

        );
    }
}

FeedsCard.propTypes = {
    time: PropTypes.string,
    ownerID: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    thumbnailURL: PropTypes.string,
    navigation: PropTypes.object
};
