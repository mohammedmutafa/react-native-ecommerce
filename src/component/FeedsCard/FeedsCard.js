
import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';
import Fonts from '../../styles/Fonts'

const {
    container,
    imageViewContainerStyle,
    imageViewStyle,
    titleTextStyle,
    dateTextStyle,
    productDescriptionTextStyle,
    titleContainerStyle
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

    onCardPress = () => {
        const {
            ownerID,
            price,
            time,
            title,
            thumbnailURL,
            productDescription,
            navigation,
            selectedLocation
        } = this.props;

        navigation.navigate('GeneralProductDetails',
            {
                time: time,
                ownerID: ownerID,
                price: price,
                title: title,
                productDescription: productDescription,
                thumbnailURL: thumbnailURL,
                selectedLocation: selectedLocation
            })

    }

    renderImageView = () => {
        const {
            price,
            thumbnailURL
        } = this.props;

        return (
            <TouchableOpacity
                style={imageViewContainerStyle}
                onPress={this.onCardPress}
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
        );
    }

    renderTitleContainer = () => {
        const {
            title,
            time
        } = this.props;

        return (
            <View style={titleContainerStyle}>
                <Text
                    style={titleTextStyle}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <View style={{ flex: 2 }}>
                    <Text
                        style={dateTextStyle}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    >{time}
                    </Text>
                </View>
            </View>
        );
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
                {this.renderTitleContainer()}
                {this.renderImageView()}
                {/*<Text
                    style={productDescriptionTextStyle}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                >
                    {title}
                </Text>*/}
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
