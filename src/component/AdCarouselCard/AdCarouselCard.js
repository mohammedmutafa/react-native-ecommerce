
import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';

const {
    container,
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

export class AdCarouselCard extends Component {

    constructor(props) {
        super(props);
    }

    renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', paddingLeft: 25, }}>
                    <Text style={categoryTextStyle}>Technology</Text>
                    <Text style={{ color: '#FFFFFF' }}>__</Text>
                </View>

                <View style={dateBoxStyle}>
                    <Text style={dateTextStyle}>Mar</Text>
                    <Text style={[dateTextStyle, { fontWeight: 'bold' }]}>20</Text>
                    <Text style={dateTextStyle}>2018</Text>
                </View>
            </View >
        );
    }

    renderMiddleView = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={priceSymbolTextStyle}>{`₹`}</Text>

                <View style={priceBoxStyle}>
                    <Text style={priceTextStyle}>25,000</Text>
                </View>
            </View >
        );
    }

    renderFooter = () => {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 25, }}>
                    <Text style={titleTextStyle}>Brand New iPhoneX</Text>
                    <Text style={{ color: '#FFFFFF' }}>__</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
                        <Icon
                            name="ios-pin-outline"
                            type="ionicon"
                            color={Color.placeholderWhite}
                            underlayColor="transparent"
                        />
                        <Text style={addressTextStyle}>Kathmandu</Text>
                    </View>
                </View>
            </View >
        );
    }

    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_hotels.jpg?alt=media&token=a9f71dbe-ae30-41ea-8838-07042ce7a920'
                }} style={container}
            >
                <View style={semiTransparentViewStyle} />

                {this.renderHeader()}
                {this.renderMiddleView()}
                {this.renderFooter()}
            </ImageBackground>
        );
    }
}

AdCarouselCard.propTypes = {

};
