
import React, { Component } from 'react';
import {
    Image,
    View,
    Modal,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

import styles from './styles';
import colors from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';

const {
    conatinerStyle,
    swipeCardStyle,
    swiperStyle,
    boldSeparator,
    descriptionCardStyle
} = styles;

export class CreateAdsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderSwiper = () => {
        return (
            <View style={swiperStyle} >
                <Swiper  activeDotColor={Color.lightWhite}>
                    {this.renderSwipeCardsTitle()}
                    {this.renderSwiperCardCategory()}
                    {this.renderSwiperCardCondition()}
                    {this.renderSwiperCardLocation()}
                </Swiper>
            </View>
        );
    }

    renderSwiperCardLocation = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: colors.lightWhite }}>Location</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: colors.lightWhite }}>Kathmandu</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCondition = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: colors.lightWhite }}>Product Condition</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: colors.lightWhite }}>New</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCategory = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: colors.lightWhite }}>Category</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: colors.lightWhite }}>Phone/Samsung</Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsDescription = () => {
        return (
            <Animatable.View style={descriptionCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: colors.lightWhite }}>Description</Text>
                <Text style={{ textAlign: 'justify', marginTop: 10, alignSelf: 'center', fontSize: 14, color: colors.lightWhite }}>
                    'MacBook Air is powered by fifth-generation Intel Core i5 and i7 processors.
                    This ultra-efficient architecture was designed to use less power and still deliver high performance.
                    Which means not only can you do whatever you want — you can keep doing it for longer than before.
                    In addition, the Intel HD Graphics 6000 processor offers advanced performance you’ll particularly notice with games and other graphics-intensive tasks.MacBook Air supports ultra-fast 802.11ac Wi‑Fi. When connected to an 802.11ac base station — including AirPort Extreme and AirPort Time Capsule — wireless performance is up to three times faster than 802.11n Wi-Fi.2 And your Wi-Fi range improves as well. With Bluetooth technology, you can connect MacBook Air to Bluetooth-enabled devices like speakers and headphones.
                    Even without all the wires, you’re totally connected.'
                </Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsTitle = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: colors.lightWhite }}>Title</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: colors.lightWhite }}>
                    HIGH-QUALITY DRONE GREAT FOR BEGINNERS: Equipped with REAL-TIME WI-FI transmission and HD camera. Wonderful choice for starting their journey with drone flying. It’s made of premium materials and comes at a fantastic value.'
                </Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <Text style={{ color: colors.dark, alignSelf: 'center', fontSize: 35, fontWeight: 'bold', marginVertical: 10 }}>
                    {`₹ ${numberWithCommas(80000)}`}
                </Text>
                <Text style={boldSeparator}>______</Text>
                {this.renderSwiper()}
                {this.renderSwipeCardsDescription()}
            </View>

        );
    }
}

CreateAdsCard.propTypes = {

};
