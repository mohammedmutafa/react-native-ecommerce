import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';

import UpdateAdPhotos from './UpdateAdPhotos';

class UpdateAdPhotosContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showActivityIndicator: false,
            isFibaseStorageInProgress: false,
            fileIndexForCurrentFirebaseStorageProgress: undefined,
            //Firestore
            image_0: undefined,
            image_1: undefined,
            image_2: undefined,
            image_3: undefined,
            image_4: undefined,
            image_5: undefined,
            image_6: undefined,
            image_7: undefined
        };
    }

    componentWillMount() {
        // const { postID } = this.props;
        const postID = '6UWAII7uurjI0dZpzjSY';

        this.setState({
            showActivityIndicator: true
        });

        const postRef = firebase.firestore().collection('posts').doc(`${postID}`);

        postRef.get()
            .then((doc) => {
                const {
                    coverImageURL,
                    image_1,
                    image_2,
                    image_3,
                    image_4,
                    image_5,
                    image_6,
                    image_7
                } = doc.data();

                this.setState({
                    showActivityIndicator: false,
                    image_0: coverImageURL,
                    image_1,
                    image_2,
                    image_3,
                    image_4,
                    image_5,
                    image_6,
                    image_7
                });
            }).catch((err) => {
                this.setState({
                    showActivityIndicator: false
                });
            });
    }

    //Image Picker Implementation
    selectPhotoTapped = (index) => {
        const options = {
            quality: 1.0,
            maxWidth: 800,
            maxHeight: 800,
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
                // let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.updatePostImageGallery(response.uri, index);
            }
        });
    }

    updatePostImageGallery = (selectedImageSource, index) => {
        // const { postID, ownerID } = this.props;
        const postID = '6UWAII7uurjI0dZpzjSY';
        const ownerID = '+917829366565';

        const postRef = firebase.firestore().collection('posts').doc(`${postID}`);
        const fileName = `image_${index}`;

        const metadata = {
            contentType: 'image/jpeg'
        }

        this.setState({
            isFibaseStorageInProgress: true,
            fileIndexForCurrentFirebaseStorageProgress: index
        });

        firebase.storage()
            .ref('/images/' + ownerID + `/${postID}/` + fileName)
            .putFile(selectedImageSource, metadata)
            .on('state_changed', (snapshot) => {
                //Current upload state
                let data = {
                    [fileName]: snapshot.downloadURL
                };
                this.setState({
                    [fileName]: snapshot.downloadURL
                });
                /**
                 * To update some fields of a document without overwriting the entire document, use the update() method:
                 * If you use set(), it will delete old data and add new one.
                 */
                postRef.get()
                    .then((doc) => {
                        if (doc.exists) {
                            postRef.update(data).then(() => {
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
                this.setState({
                    isFibaseStorageInProgress: false
                });
            }, (uploadedFile) => {
                //Success
                //unsubscribe();
                this.setState({
                    isFibaseStorageInProgress: false
                });
            });
    }

    deleteImageFromStorage = (index) => {
        const postID = '6UWAII7uurjI0dZpzjSY';
        const ownerID = '+917829366565';

        const postRef = firebase.firestore().collection('posts').doc(`${postID}`);
        const fileName = `image_${index}`;

        this.setState({
            isFibaseStorageInProgress: true,
            fileIndexForCurrentFirebaseStorageProgress: index
        });

        firebase.storage()
            .ref('/images/' + ownerID + `/${postID}/` + fileName).
            delete().then(() => {
                // File deleted successfully
                this.setState({
                    isFibaseStorageInProgress: false,
                    [fileName]: undefined
                });
                //Update FireStore
                let dataToDelete = {
                    [fileName]: null
                };

                postRef.get()
                    .then((doc) => {
                        if (doc.exists) {
                            postRef.update(dataToDelete).then(() => {
                                //updating current set of data
                            }).catch((error) => {
                                //
                            });
                        }
                    }).catch((err) => {
                        //
                    });

            }).catch(function (error) {
                // Uh-oh, an error occurred!
                this.setState({
                    isFibaseStorageInProgress: false
                });
            });
    }

    render() {
        const {
            showActivityIndicator,
            isFibaseStorageInProgress,
            fileIndexForCurrentFirebaseStorageProgress,
            image_0,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            image_6,
            image_7
        } = this.state;

        const imageDataSource = [
            // { url: image_0, index: 0 },
            { url: image_1, index: 1 },
            { url: image_2, index: 2 },
            { url: image_3, index: 3 },
            { url: image_4, index: 4 },
            { url: image_5, index: 5 },
            { url: image_6, index: 6 },
            { url: image_7, index: 7 }
        ];

        return (
            <UpdateAdPhotos
                selectPhotoTapped={this.selectPhotoTapped}
                deleteImageFromStorage={this.deleteImageFromStorage}
                fileIndexForCurrentFirebaseStorageProgress={fileIndexForCurrentFirebaseStorageProgress}
                //FireStore
                imageDataSource={imageDataSource}
                coverImageURL={image_0}
                showActivityIndicator={showActivityIndicator}
                isFibaseStorageInProgress={isFibaseStorageInProgress}
            />
        );
    }
}

UpdateAdPhotosContainer.propTypes = {
    navigation: PropTypes.object,
    postID: PropTypes.string
};

export default UpdateAdPhotosContainer;
