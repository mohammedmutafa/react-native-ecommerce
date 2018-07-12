import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

class ProfilePublic extends Component {

    keyExtractor = (item, index) => index.toString();

    renderItemCard = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image
                    source={{ uri: item.coverImageURL }}
                    style={gridViewCardStyle}
                />
            </TouchableOpacity >
        );
    }

    renderPublishedPostList = () => {
        const { sellerAdsList, isFetchingAdsDataFromFirestore } = this.props;

        if (isFetchingAdsDataFromFirestore) {
            return (
                <ActivityIndicator
                    size="small"
                    color={Color.golden}
                    style={activityIndicatorStyle}
                />
            );
        }

        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ alignSelf: 'flex-start', marginTop: 10, backgroundColor: colors.lightBlueWhite }}
                data={sellerAdsList}
                renderItem={this.renderItemCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                numColumns={3}
            />
        );
    }

    renderProfileHeader = () => {
        const { profileImageURL } = this.props.sellerData;

        return (
            <Avatar
                rounded
                width={100}
                height={100}
                containerStyle={avatarStyle}
                source={{ uri: profileImageURL }}
                //onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
        );
    }

    renderUserBasicInfo = () => {
        const { sellerData } = this.props;
        const {
            firstName,
            lastName,
            address
        } = sellerData;
        const sellerFirstName = firstName ? firstName : '';
        const sellerLastName = lastName ? lastName : '';

        return (
            <View style={{ flexDirection: 'column', backgroundColor: colors.lightBlueWhite }}>
                <Text style={nameTextStyle}>{sellerFirstName + ' ' + sellerLastName}</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                    <Icon
                        name="ios-pin-outline"
                        type="ionicon"
                        color={Color.golden}
                        underlayColor="transparent"
                    />
                    <Text style={addressTextStyle}>{address}</Text>
                </View>
            </View>
        );
    }

    renderProfileStatInfo = () => {
        const { sellerAdsList } = this.props;
        const postCount = sellerAdsList ? sellerAdsList.length : 0;

        return (
            <View style={profileStatInfoStyle}>
                <View style={profileStatTextContainerStyle}>
                    <Text style={profileStatCountTextStyle}>{postCount}</Text>
                    <Text style={profileStatTitleTextStyle}>Posts</Text>
                </View>
                <View style={profileStatTextContainerStyle}>
                    <Text style={profileStatCountTextStyle}>22.1K</Text>
                    <Text style={profileStatTitleTextStyle}>Followers</Text>
                </View>
                <View style={profileStatTextContainerStyle}>
                    <Text style={profileStatCountTextStyle}>536</Text>
                    <Text style={profileStatTitleTextStyle}>Following</Text>
                </View>
            </View>
        );
    }

    renderFollowButton = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={followButtonTextstyle}>FOLLOW</Text>
                <Text style={{ fontSize: 18, color: Color.placeholderWhite, fontFamily: Fonts.CharterBT }}>|</Text>
                <Text style={followButtonTextstyle}>CONTACT</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={conatinerStyle}
            >
                {this.renderProfileHeader()}
                {this.renderUserBasicInfo()}
                {this.renderProfileStatInfo()}
                {this.renderFollowButton()}
                {this.renderPublishedPostList()}
            </ScrollView>
        );
    }
}

const {
    conatinerStyle,
    avatarStyle,
    nameTextStyle,
    addressTextStyle,
    gridViewCardStyle,
    profileStatInfoStyle,
    profileStatTextContainerStyle,
    profileStatCountTextStyle,
    profileStatTitleTextStyle,
    followButtonTextstyle,
    activityIndicatorStyle
} = styles;

ProfilePublic.propTypes = {
    navigation: PropTypes.object,
    sellerAdsList: PropTypes.array,
    isFetchingAdsDataFromFirestore: PropTypes.bool,
    sellerData: PropTypes.object
};

export default ProfilePublic;
