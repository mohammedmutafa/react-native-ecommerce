import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';

import { BackButton } from '../../component/BackButton';
import styles from './styles';
import Color from '../../styles/Color';

const { conatinerStyle } = styles;

class Drawer extends Component {

    constructor(props) {
        super(props);

        this.unsubscribe = null;

        this.state = {
            user: undefined,
            userExistInDB: false
        };
    }

    componentDidMount() {
        //More Details: https://firebase.google.com/docs/auth/web/manage-users
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = user.phoneNumber
                //Keep doc id as string.
                let userRef = firebase.firestore().collection('users').doc(`${userID}`);
                /**
                 * Check if user already logged In with phone number and completed the sign-up form.
                 */
                userRef.get().then((doc) => {
                    if (!doc.exists) {
                        this.setState({
                            user: user.toJSON(),
                            userExistInDB: false
                        });
                    } else {
                        this.setState({
                            user: user.toJSON(),
                            userExistInDB: true
                        });
                    }
                }).catch((err) => {
                    this.setState({
                        userExistInDB: undefined //if undefined then some error in fetching data
                    });
                });
            }
        });
    }

    onPressRow = (key) => {
        const { navigation } = this.props;
        const { user } = this.state;

        switch (key) {
            case 'Logout':
                //TODO: Use redux to trigger signout in Home Container
                firebase.auth().signOut().then((result) =>
                    this.setState({
                        user: undefined
                    })
                ).catch((error) =>
                    console.log(error)
                );
                break;
            case 'Profile':
                if (user) {
                    navigation.navigate('UserProfile', {
                        userID: user.phoneNumber
                    });
                }
                break;
            case 'Ads':
                if (user) {
                    navigation.navigate('EditUserAd', {
                        userID: user.phoneNumber
                    });
                }
                break;
        }
    }

    renderRow = (title) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    marginTop: 20
                }}
                onPress={() => this.onPressRow(title)}
            >
                <Text style={{ fontSize: 18, color: Color.lightWhite, fontStyle: 'italic' }}>{title}</Text>
                <Icon
                    underlayColor="transparent"
                    name="chevron-right"
                    type="evilicon"
                    color={Color.golden}
                    size={40}
                //onPress={this.onPressRow(title)}
                />
            </TouchableOpacity>
        );
    }

    toggleDrawer = () => {
        this.props.navigation.navigate('DrawerClose');
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <BackButton
                    style={{ right: 20, marginTop: 20 }}
                    iconName="ios-close-circle-outline"
                    iconType="ionicon"
                    iconColor={Color.lightWhite}
                    onPress={this.toggleDrawer}
                />
                <View style={{ marginTop: 100 }}>
                    {this.renderRow('Profile')}
                    {this.renderRow('Ads')}
                    {this.renderRow('Settings')}
                    {this.renderRow('About')}
                    {this.renderRow('Logout')}
                </View>
            </View>
        );
    }
}

Drawer.propTypes = {
    navigation: PropTypes.object
};

export default Drawer;
