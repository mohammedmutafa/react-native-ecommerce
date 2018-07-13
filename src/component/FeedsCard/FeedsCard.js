
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
    semiTransparentViewStyle,
    categoryTextStyle,
    dateBoxStyle,
    priceBoxStyle,
    dateTextStyle,
    titleTextStyle,
    priceSymbolTextStyle,
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
            });
    }

    renderHeader = () => {
        const {
            //time,
            formatedDay,
            formatedMonth,
            formatedYear
        } = this.props;

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', paddingLeft: 25, }}>
                    <Text style={categoryTextStyle}></Text>
                    <Text style={{ color: '#FFFFFF' }}></Text>
                </View>

                <View style={dateBoxStyle}>
                    <Text style={dateTextStyle}>{formatedMonth}</Text>
                    <Text style={[dateTextStyle, { fontWeight: 'bold' }]}>{formatedDay}</Text>
                    <Text style={dateTextStyle}>{formatedYear}</Text>
                </View>
            </View >
        );
    }

    renderMiddleView = () => {
        const {
            price,
        } = this.props;

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={priceSymbolTextStyle}>{`₹`}</Text>

                <View style={priceBoxStyle}>
                    <Text style={priceTextStyle}>{`${numberWithCommas(price)}`}</Text>
                </View>
            </View >
        );
    }

    renderFooter = () => {
        const {
            title,
            selectedLocation
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingHorizontal: 25, }}>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={titleTextStyle}
                    >
                        {title}
                    </Text>
                    <Text style={{ color: '#FFFFFF' }}>__</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
                        <Icon
                            name="ios-pin-outline"
                            type="ionicon"
                            color={Color.placeholderWhite}
                            underlayColor="transparent"
                        />
                        <Text style={addressTextStyle}>{selectedLocation}</Text>
                    </View>
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
                    <View style={semiTransparentViewStyle} />
                    {this.renderHeader()}
                    {this.renderMiddleView()}
                    {this.renderFooter()}
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

FeedsCard.propTypes = {
    time: PropTypes.string,
    formatedDay: PropTypes.string,
    formatedMonth: PropTypes.string,
    formatedYear: PropTypes.string,
    ownerID: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    thumbnailURL: PropTypes.string,
    navigation: PropTypes.object
};
