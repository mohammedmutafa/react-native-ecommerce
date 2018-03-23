import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    Platform,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import styles from './styles';
import colors from '../../styles/Color';
import { screenHeight, screenWidth } from '../../utilities/ScreenSize';
import Categories from '../../styles/Categories';
import { BackButton } from '../../component/BackButton';

const { MainCategory } = Categories;

class ProfilePublic extends Component {

    keyExtractor = (item, index) => index;

    renderItemCard = ({ item }) => {
        return (
            <TouchableOpacity >
                <Image
                    source={{ uri: item.thumbnail }}
                    style={gridViewCardStyle}
                />
            </TouchableOpacity >
        );
    }

    renderPublishedPostList = () => {
        return (
            <ScrollView>
                <FlatList
                    style={{ alignSelf: 'center', marginTop: 15 }}
                    data={MainCategory}
                    renderItem={this.renderItemCard}
                    // removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    numColumns={3}
                />
            </ScrollView>

        );
    }

    renderProfileHeader = () => {
        return (
            <View style={triangleDown}>
                <View style={circleContainer}>
                    <View style={circle} >
                        <Avatar
                            rounded
                            width={100}
                            height={100}
                            containerStyle={avatarStyle}
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                </View>
            </View>
        );
    }

    renderUserBasicInfo = () => {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={nameTextStyle}>Dipak Katwal</Text>
                <Text style={addressTextStyle}>Kathmandu, Nepal</Text>
            </View>
        );
    }

    renderSocialButtons = () => {
        return (
            <View style={socialButtonsContainer}>
                <Icon
                    raised
                    name='call'
                    type='material'
                    color={colors.lightWhite}
                    containerStyle={iconContainerStyle}
                    onPress={() => console.log('hello')} />
                <Icon
                    raised
                    name='sc-facebook'
                    type='evilicon'
                    color={colors.lightWhite}
                    containerStyle={iconContainerStyle}
                    onPress={() => console.log('hello')} />
                <Icon
                    raised
                    name='logo-instagram'
                    type='ionicon'
                    color={colors.lightWhite}
                    containerStyle={iconContainerStyle}
                    onPress={() => console.log('hello')} />
                <Icon
                    raised
                    name='email'
                    type='zocial'
                    color={colors.lightWhite}
                    containerStyle={iconContainerStyle}
                    onPress={() => console.log('hello')} />
            </View>
        );
    }

    render() {
        return (
            <ParallaxScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                backgroundColor="#FFFFFF"
                parallaxHeaderHeight={SLIDER_HEIGHT}
                renderForeground={() => (
                    <View
                        style={{
                            height: SLIDER_HEIGHT,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <BackButton
                            style={{ left: 20 }}
                            onPress={() => this.props.navigation.goBack()} />
                        {this.renderProfileHeader()}
                        {this.renderUserBasicInfo()}
                        {this.renderSocialButtons()}
                    </View>
                )}
            >
                {this.renderPublishedPostList()}
            </ParallaxScrollView>
        );
    }
}

const {
    triangleDown,
    circle,
    circleContainer,
    conatinerStyle,
    avatarStyle,
    nameTextStyle,
    addressTextStyle,
    socialButtonsContainer,
    iconContainerStyle,
    gridViewCardStyle
} = styles;

ProfilePublic.propTypes = {
    navigation: PropTypes.object
};

const window = Dimensions.get('window');
const SLIDER_HEIGHT = window.width / 1.2;

export default ProfilePublic;
