import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';

import UserProfile from './UserProfile';

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedImageSource: null,
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            address: '',

            isSelectGenderModalViewVisible: false,
            createAdStatus: true,
            isUserDataUpdating: false,
            //FireStore
            profileImageURL: undefined
        };
    }

    componentWillMount() {
        const { userID } = this.props;

        this.setState({
            isUserDataUpdating: true
        });

        let userRef = firebase.firestore().collection('users').doc(`${userID}`);

        userRef.get()
            .then((doc) => {
                const { firstName, lastName, gender, address, email, profileImageURL } = doc.data();

                this.setState({
                    isUserDataUpdating: false,
                    firstName,
                    lastName,
                    gender,
                    email,
                    address,
                    profileImageURL
                });
            }).catch((err) => {
                this.setState({
                    isUserDataUpdating: false
                });
            });
    }

    changeStateOfSelectGenderModalView = () => {
        this.setState({
            isSelectGenderModalViewVisible: !this.state.isSelectGenderModalViewVisible
        });
    }

    createAdStatusDone = () => {
        this.setState({
            createAdStatus: false
        });
    }

    setGenderMale = () => {
        this.setState({
            gender: 'Male',
            isSelectGenderModalViewVisible: false
        });
    }

    setGenderFemale = () => {
        this.setState({
            gender: 'Female',
            isSelectGenderModalViewVisible: false
        });
    }

    setGenderOther = () => {
        this.setState({
            gender: 'Other',
            isSelectGenderModalViewVisible: false
        });
    }

    onFirstNameInput = (firstName) => {
        this.setState({
            firstName
        });
    }

    onLastNameInput = (lastName) => {
        this.setState({
            lastName
        })
    }

    onAddressInput = (address) => {
        this.setState({ address });
    }

    onEmailInput = (email) => {
        this.setState({ email });
    }

    //Image Picker Implementation
    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    selectedImageSource: source
                });

                this.updateProfileImage(response.uri);
            }
        });
    }

    getUserDocRef = () => {
        const { userID } = this.props;

        return firebase.firestore().collection('users').doc(`${userID}`);
    }

    updateProfileImage = (selectedImageSource) => {
        const { userID } = this.props;

        let userRef = this.getUserDocRef();

        const metadata = {
            contentType: 'image/jpeg'
        }

        firebase.storage()
            .ref('/images/' + userID + `/${userID}_image_profile`)
            .putFile(selectedImageSource, metadata)
            .on('state_changed', (snapshot) => {
                //Current upload state
                let data = {
                    profileImageURL: snapshot.downloadURL
                };
                /**
                 * To update some fields of a document without overwriting the entire document, use the update() method:
                 * If you use set(), it will delete old data and add new one.
                 */
                userRef.get()
                    .then((doc) => {
                        if (!doc.exists) {
                            userRef.set(data).then(() => {
                                //Creating new set of data
                            }).catch((error) => {

                            });
                        } else {
                            userRef.update(data).then(() => {
                                //updating current set of data
                            }).catch((error) => {
                                //
                            });
                        }

                    }).catch((err) => {
                        //
                    });

                //TODO: check if updating failed

            }, (err) => {
                //Error
                //unsubscribe();
            }, (uploadedFile) => {
                //Success
                //unsubscribe();
            });
    }

    updateUserInfo = () => {
        const { userID } = this.props;
        const { firstName, lastName, gender, email, address } = this.state;

        this.setState({
            isUserDataUpdating: true
        });

        let userRef = this.getUserDocRef();

        let data = {
            phoneNumber: `${userID}`,
            firstName,
            lastName,
            gender,
            email,
            address
        };
        /**
         * To update some fields of a document without overwriting the entire document, use the update() method:
         * If you use set(), it will delete old data and add new one.
         */
        userRef.get()
            .then((doc) => {
                if (!doc.exists) {
                    userRef.set(data).then(() => {
                        //Creating new set of data
                    }).catch((error) => {

                    });
                } else {
                    userRef.update(data).then(() => {
                        //updating current set of data
                    }).catch((error) => {
                        //
                    });
                }

                this.setState({
                    isUserDataUpdating: false
                });

            }).catch((err) => {
                this.setState({
                    isUserDataUpdating: false
                });
            });

        //TODO: check if updating failed
    }

    render() {
        const {
            selectedImageSource,
            firstName,
            lastName,
            gender,
            email,
            address,
            isSelectGenderModalViewVisible,
            isUserDataUpdating,
            profileImageURL
        } = this.state;

        const { navigation } = this.props;

        return (
            <UserProfile
                selectedImageSource={selectedImageSource}
                selectPhotoTapped={this.selectPhotoTapped}

                firstName={firstName}
                onFirstNameInput={this.onFirstNameInput}

                lastName={lastName}
                onLastNameInput={this.onLastNameInput}

                gender={gender}
                setGenderFemale={this.setGenderFemale}
                setGenderMale={this.setGenderMale}
                setGenderOther={this.setGenderOther}
                isSelectGenderModalViewVisible={isSelectGenderModalViewVisible}
                changeStateOfSelectGenderModalView={this.changeStateOfSelectGenderModalView}

                email={email}
                onEmailInput={this.onEmailInput}

                address={address}
                onAddressInput={this.onAddressInput}

                //createAdStatusDone={this.createAdStatusDone}
                navigation={navigation}

                //FireStore
                isUserDataUpdating={isUserDataUpdating}
                updateUserInfo={this.updateUserInfo}
                profileImageURL={profileImageURL}
            />
        );
    }
}

UserProfileContainer.propTypes = {
    navigation: PropTypes.object,
    userID: PropTypes.string
};

export default UserProfileContainer;
