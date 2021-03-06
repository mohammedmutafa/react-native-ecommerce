
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

import styles from './styles';
import colors from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';

const {
    container,
    avatarContainer,
    profileConatiner,
    imageViewContainerStyle,
    imageViewStyle,
    nameTextStyle,
    productTitleTextStyle,
    detailContainerStyle
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

    render() {
        const { name, title, price, time, imageURL, thumbnailURL, navigation } = this.props;
        const { bookmarked } = this.state;

        return (
            <View style={container}>
                <View style={detailContainerStyle}>
                    <View style={avatarContainer}>
                        <View style={profileConatiner}>
                            <Avatar
                                small
                                rounded
                                source={{ uri: thumbnailURL }}
                                onPress={() => navigation.navigate('ProfilePublic')}
                                activeOpacity={0.7}
                            />
                            <Text
                                style={nameTextStyle}
                                ellipsizeMode='tail'
                                numberOfLines={1}
                            >
                                {name}
                            </Text>
                        </View>
                        <Text
                            style={{ alignSelf: 'flex-end', color: colors.lightDark, fontSize: 10 }}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                        >{time}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={imageViewContainerStyle}
                    onPress={() => navigation.navigate('GeneralProductDetails',
                        {
                            time: this.props.time,
                            name: this.props.name,
                            price: this.props.price,
                            title: this.props.title,
                            thumbnailURL: this.props.thumbnailURL
                        })}
                >
                    <Image
                        source={{ uri: imageURL }}
                        style={imageViewStyle}
                    />
                    <Icon
                        underlayColor='transparent'
                        name={bookmarked ? 'heart' : 'heart-outlined'}
                        type="entypo"
                        color={bookmarked ? colors.red : colors.lightDark}
                        containerStyle={{ position: 'absolute', alignSelf: 'flex-end', padding: 10 }}
                        onPress={this.onPressBookmarkButton}
                    />
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', bottom: 0, padding: 10, backgroundColor: 'rgba(60, 60, 60, 0.4)' }}>
                        <Text
                            style={{ color: colors.lightWhite, fontSize: 18 }}
                        >
                            {`₹ ${numberWithCommas(price)}`}
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text
                    style={productTitleTextStyle}
                    ellipsizeMode='tail'
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </View>

        );
    }
}

FeedsCard.propTypes = {
    time: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    thumbnailURL: PropTypes.string,
    navigation: PropTypes.object
};
