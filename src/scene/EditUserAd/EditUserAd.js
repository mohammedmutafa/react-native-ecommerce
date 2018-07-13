import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';

import { AdCarouselCard } from '../../component/AdCarouselCard';

/* eslint-disable */
const goldenGradientBackground = require('../../../assets/images/background_golden_gradient.jpg');
/* eslint-enable */

import styles from './styles';

import {
    screenWidth
} from '../../utilities/ScreenSize';
const cardwidth = screenWidth * 0.8;
const cardHeight = cardwidth * 1.3;

class EditUserAd extends Component {

    _renderCarouselItem({ item, index }) {
        return (
            <AdCarouselCard />
        );
    }

    render() {
        return (
            <ImageBackground
                style={conatinerStyle}
                source={goldenGradientBackground}
            >
                <View style={{ height: cardHeight, marginVertical: 10 }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={[{ a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }]}
                        renderItem={this._renderCarouselItem}
                        sliderWidth={screenWidth}
                        itemWidth={cardwidth}
                    />
                </View>

                <Animatable.View animation="slideInUp" delay={200} style={{ paddingHorizontal: 25, marginTop: 25, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={descriptionTextStyle}
                        numberOfLines={8}
                    >A React  A React component for displaying text which supports nesting, styling, and touch handling. In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of e component for displaying text which supports nesting, styling, and touch handling. In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines
                    </Text>
                </Animatable.View>
            </ImageBackground>
        );
    }
}

const {
    conatinerStyle,
    descriptionTextStyle
} = styles;

EditUserAd.propTypes = {

};

export default EditUserAd;
