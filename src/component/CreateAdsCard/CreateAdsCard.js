
import React, { Component } from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

import styles from './styles';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

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
                <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Fonts.CharterBT, fontWeight: 'bold', color: Color.lightWhite }}>Location</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{selectedLocation}</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCondition = () => {
        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Fonts.CharterBT, fontWeight: 'bold', color: Color.lightWhite }}>Condition</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{this.props.selectedProductCondition}</Text>
            </Animatable.View>
        );
    }

    renderSwiperCardCategory = () => {
        const {
            selectedCategory,
            selectedSubCategory
        } = this.props;

        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Fonts.CharterBT, fontWeight: 'bold', color: Color.lightWhite }}>Category</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{selectedCategory ? (selectedCategory + '/' + selectedSubCategory) : ''}</Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsDescription = () => {
        const { productDescription } = this.props;

        return (
            <Animatable.View style={descriptionCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Fonts.CharterBT, fontWeight: 'bold', color: Color.lightWhite }}>Description</Text>
                <Text style={{ textAlign: 'justify', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{productDescription}</Text>
            </Animatable.View>
        );
    }

    renderSwipeCardsTitle = () => {
        const { productTitle } = this.props;

        return (
            <Animatable.View style={swipeCardStyle} animation="zoomIn" delay={200}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Fonts.CharterBT, fontWeight: 'bold', color: Color.lightWhite }}>Title</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 14, color: Color.lightWhite }}>{productTitle}</Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <Text style={{ color: Color.dark, fontFamily: Fonts.CharterBT, alignSelf: 'center', fontSize: 35, fontWeight: 'bold', marginVertical: 10 }}>
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
    selectedLocation: PropTypes.string,
    productTitle: PropTypes.string,
    productPrice: PropTypes.number,
    productDescription: PropTypes.string,
    selectedCategory: PropTypes.string,
    selectedSubCategory: PropTypes.string,
    selectedProductCondition: PropTypes.string
};
