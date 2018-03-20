import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

import Categories from '../../styles/Categories';

const { MainCategory } = Categories;

class ProfilePublic extends Component {

    keyExtractor = (item, index) => index;

    renderItemCard = ({ item }) => {
        return (
            <TouchableOpacity >
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/travelBanner.png?alt=media&token=9cb6ab5e-229e-4308-b7a0-5835936e1635' }}
                    style={
                        gridViewCardStyle
                    }
                />
            </TouchableOpacity >
        );
    }

    renderPublishedPostList = () => {
        return (
            <FlatList
                style={{ alignSelf: 'center', marginTop: 15 }}
                data={MainCategory}
                renderItem={this.renderItemCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                numColumns={3}
            />
        );
    }

    render() {
        return (
            <View style={conatinerStyle}>
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

                <Text style={nameTextStyle}>Dipak Katwal</Text>
                <Text style={addressTextStyle}>Kathmandu, Nepal</Text>

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
                <View style={dividerStyle} />

                {this.renderPublishedPostList()}
            </View>
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
    dividerStyle,
    gridViewCardStyle
} = styles;

ProfilePublic.propTypes = {

};

export default ProfilePublic;
