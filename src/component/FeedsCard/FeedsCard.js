
import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';

const {
    container,
    imageBackgroundStyle,
    priceBoxStyle,
    titleTextStyle,
    priceTextStyle,
    addressTextStyle
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
            selectedLocation,
            imageDataSource
        } = this.props;

        navigation.navigate('GeneralProductDetails',
            {
                time: time,
                ownerID: ownerID,
                price: price,
                title: title,
                productDescription: productDescription,
                thumbnailURL: thumbnailURL,
                selectedLocation: selectedLocation,
                imageDataSource: imageDataSource
            });
    }

    renderHeader = () => {
        const { price } = this.props;

        return (
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', right: 0, bottom: 0 }}
            >
                <View style={priceBoxStyle}>
                    <Text style={priceTextStyle}>{'₹ ' + `${numberWithCommas(price)}`}</Text>
                </View>
            </View >
        );
    }

    renderMiddleView = () => {
        return <View />
    }

    renderFooter = () => {
        const {
            title,
            time,
            selectedLocation
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', paddingVertical: 5, flex: 1 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingHorizontal: 25, }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <Icon
                            name="ios-pin-outline"
                            type="ionicon"
                            size={18}
                            color={Color.lightDark}
                            underlayColor="transparent"
                        />
                        <Text style={addressTextStyle}>{selectedLocation}</Text>
                        <Text style={addressTextStyle}>| </Text>
                        <Icon
                            name="ios-time-outline"
                            type="ionicon"
                            size={18}
                            color={Color.lightDark}
                            underlayColor="transparent"
                        />
                        <Text style={addressTextStyle}>{time}</Text>
                    </View>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={titleTextStyle}
                    >
                        {title}
                    </Text>

                </View>
            </View >
        );
    }

    render() {
        const {
            thumbnailURL
        } = this.props;

        return (
            <TouchableOpacity
                style={container}
                onPress={this.onCardPress}
            >
                <ImageBackground
                    resizeMode="cover"
                    source={{ uri: thumbnailURL }}
                    style={imageBackgroundStyle}
                >
                    {this.renderHeader()}
                    {this.renderMiddleView()}
                </ImageBackground>
                {this.renderFooter()}
            </TouchableOpacity>
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
    imageDataSource: PropTypes.array,
    navigation: PropTypes.object
};
