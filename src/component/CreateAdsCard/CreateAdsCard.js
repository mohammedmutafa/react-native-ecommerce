
import React, { Component } from 'react';
import {
    Image,
    View,
    Modal,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

import styles from './styles';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';
import districts from '../../utilities/districts';

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

    getSelectedLocationString = () => {
        const { selectedLocation } = this.props;
        let location = '';

        for (let value of selectedLocation) {
            let obj = districts.find((item) => { return item.id == value });

            location = location + obj.name + ', ';
        }
        return location;
    }

    renderSwiperView = () => {
        return (
            <Swiper style={Platform.OS === 'ios' ? null : swiperStyle} autoplay={true} activeDotColor={Color.lightWhite}>
                {this.renderSwipeCardsTitle()}
                {this.renderSwiperCardCategory()}
                {this.renderSwiperCardCondition()}
                {this.renderSwiperCardLocation()}
            </Swiper>
        );
    }

    renderSwiper = () => {
        if (Platform.OS === 'ios') {
            return (
                <View style={swiperStyle} >
                    {this.renderSwiperView()}
                </View>
            );
        }

        return this.renderSwiperView();
    }

    renderSwiperCardLocation = () => {
        const { selectedLocation } = this.props;
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: Color.lightWhite }}>Location</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{this.getSelectedLocationString()}</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCondition = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: Color.lightWhite }}>Condition</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{this.props.selectedProductCondition}</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCategory = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: Color.lightWhite }}>Category</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>Phone/Samsung</Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsDescription = () => {
        const { productDescription } = this.props;

        return (
            <Animatable.View style={descriptionCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: Color.lightWhite }}>Description</Text>
                <Text style={{ textAlign: 'justify', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{productDescription}</Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsTitle = () => {
        const { productTitle } = this.props;

        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: Color.lightWhite }}>Title</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{productTitle}</Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <Text style={{ color: Color.dark, alignSelf: 'center', fontSize: 35, fontWeight: 'bold', marginVertical: 10 }}>
                    {`₹ ${numberWithCommas(this.props.productPrice)}`}
                </Text>
                <Text style={boldSeparator}>______</Text>
                {this.renderSwiper()}
                {this.renderSwipeCardsDescription()}
            </View>

        );
    }
}

CreateAdsCard.propTypes = {
    productTitle: PropTypes.string,
    productDescription: PropTypes.string
};
