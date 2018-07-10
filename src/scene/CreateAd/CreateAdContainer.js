import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';

import CreateAd from './CreateAd';

import {
    userCollectionRef,
    postCollectionRef,
    getPostStorageLocation
} from '../../utilities/DBReferences';

class CreateAdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImageSource: null,
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            selectedLocation: '',
            selectedProductCondition: '',
            productPrice: 0,
            productTitle: undefined,
            productDescription: undefined,

            isProductConditionModalViewVisible: false,
            isSelectLocationModalViewVisible: false,
            isProductDescriptionModalViewVisible: false,
            isProductCategoryModalViewVisible: false,

            createAdStatus: true,
            //FireStore
            isFirestoreDataUpdating: false,
            //Add server timestamps later to track when an update was received by the server
        };
    }

    changeStateOfProductConditionModalView = () => {
        this.setState({
            isProductConditionModalViewVisible: !this.state.isProductConditionModalViewVisible
        });
    }

    changeStateOfproductDescriptionModalView = () => {
        this.setState({
            isProductDescriptionModalViewVisible: !this.state.isProductDescriptionModalViewVisible
        });
    }

    changeStateOfSelectLocationModalView = () => {
        this.setState({
            isSelectLocationModalViewVisible: !this.state.isSelectLocationModalViewVisible
        });
    }

    changeStateOfProductCategoryModalView = () => {
        this.setState({
            isProductCategoryModalViewVisible: !this.state.isProductCategoryModalViewVisible
        });
    }

    createAdStatusDone = () => {
        this.setState({
            createAdStatus: false
        });
    }

    setProductConditionNew = () => {
        this.setState({
            selectedProductCondition: 'New',
            isProductConditionModalViewVisible: false
        });
    }

    setProductConditionUsed = () => {
        this.setState({
            selectedProductCondition: 'Used',
            isProductConditionModalViewVisible: false
        });
    }

    onProductPriceInput = (value) => {
        this.setState({
            productPrice: parseInt(value, 10)
        });
    }

    setProductTitle = (text) => {
        this.setState({
            productTitle: text
        })
    }

    setProductDescription = (text) => {
        this.setState({
            productDescription: text,
            isProductDescriptionModalViewVisible: false
        });
    }

    updateProductDetails = (key, value) => {
        switch (key) {
            case 'selectedCategory':
                this.setState({
                    selectedCategory: value[0],
                    selectedSubCategory: value[1]
                });
        }
    }

    updateSelectedLocations = (selectedLocation) => {
        this.setState({
            selectedLocation: selectedLocation,
            isSelectLocationModalViewVisible: false
        });
    }

    //Image Picker Implementation
    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 600,
            maxHeight: 600,
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
            }
        });
    }

    //FireStore Implementation
    updateAdInFireStore = () => {
        const { userID } = this.props;
        const {
            selectedImageSource,
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            selectedProductCondition,
            productPrice,
            productTitle,
            productDescription
        } = this.state;

        this.setState({
            isFirestoreDataUpdating: true
        });

        //TODO: check is any value is missing before updating

        /**
         * Important: Unlike "push IDs" in the Firebase Realtime Database, 
         * Cloud Firestore auto-generated IDs do not provide any automatic ordering. 
         * If you want to be able to order your documents by creation date, you should store a timestamp as a field in the documents.
         */

        const imageSourceURI = selectedImageSource.uri;
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        const userRef = userCollectionRef.doc(`${userID}`);
        const newPostRef = postCollectionRef.doc();
        const newPostId = newPostRef.id;

        const metadata = {
            contentType: 'image/jpeg'
        }

        let data = {
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            selectedProductCondition,
            productPrice,
            productTitle,
            productDescription,
            ownerID: userID,
            updatedAt: timestamp
        };

        const updateFunction = async (transaction) => {
            const [userDoc] = await Promise.all([
                transaction.get(userRef)
            ]);
            /**
             * First create new post & get post ID before updating the user profile
             * Update user data with newly created post
             * To update some fields of a document without overwriting the entire document, use the update() method:
             * If you use set(), it will delete old data and add new one.
             */
            if (userDoc.exists) {
                transaction.set(newPostRef, data);
                transaction.update(userRef, { newPost: newPostRef });
            }
        }

        // run the transaction
        firebase.firestore()
            .runTransaction(updateFunction)
            .then((result) => {
                const postStorageRef = getPostStorageLocation(userID, newPostId, 0);

                firebase.storage()
                    .ref(postStorageRef)
                    .putFile(imageSourceURI, metadata)
                    .on('state_changed', (snapshot) => {
                        //Current upload state
                        let imageData = {
                            coverImageURL: snapshot.downloadURL
                        };
                        /**
                         * To update some fields of a document without overwriting the entire document, use the update() method:
                         * If you use set(), it will delete old data and add new one.
                         */
                        newPostRef.get()
                            .then((doc) => {
                                if (!doc.exists) {
                                    userRef.set(imageData).then(() => {
                                        //Creating new set of data
                                        this.setState({
                                            isFirestoreDataUpdating: false
                                        });
                                    }).catch((error) => {
                                        this.setState({
                                            isFirestoreDataUpdating: false
                                        });
                                    });
                                } else {
                                    newPostRef.update(imageData).then(() => {
                                        //updating current set of data
                                        this.setState({
                                            isFirestoreDataUpdating: false
                                        });
                                    }).catch((error) => {
                                        this.setState({
                                            isFirestoreDataUpdating: false
                                        });
                                    });
                                }
                            }).catch((err) => {
                                this.setState({
                                    isFirestoreDataUpdating: false
                                });
                            });
                        //TODO: check if updating failed
                    }, (err) => {
                        this.setState({
                            isFirestoreDataUpdating: false
                        });
                    }, (uploadedFile) => {
                        this.setState({
                            isFirestoreDataUpdating: false
                        });
                    });
            })
            .catch((error) => {
                this.setState({
                    isFirestoreDataUpdating: false
                });
            });
    }

    render() {
        const {
            selectedCategory,
            selectedSubCategory,
            isProductConditionModalViewVisible,
            isSelectLocationModalViewVisible,
            isProductDescriptionModalViewVisible,
            isProductCategoryModalViewVisible,
            selectedProductCondition,
            productPrice,
            selectedLocation,
            createAdStatus,
            productTitle,
            productDescription,
            selectedImageSource,
            isFirestoreDataUpdating
        } = this.state;

        const { navigation } = this.props;

        return (
            <CreateAd
                selectedImageSource={selectedImageSource}
                selectPhotoTapped={this.selectPhotoTapped}

                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                updateProductDetails={this.updateProductDetails}
                isProductCategoryModalViewVisible={isProductCategoryModalViewVisible}
                changeStateOfProductCategoryModalView={this.changeStateOfProductCategoryModalView}

                selectedProductCondition={selectedProductCondition}
                isProductConditionModalViewVisible={isProductConditionModalViewVisible}
                changeStateOfProductConditionModalView={this.changeStateOfProductConditionModalView}
                setProductConditionUsed={this.setProductConditionUsed}
                setProductConditionNew={this.setProductConditionNew}

                productPrice={productPrice}
                onProductPriceInput={this.onProductPriceInput}

                selectedLocation={selectedLocation}
                isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                changeStateOfSelectLocationModalView={this.changeStateOfSelectLocationModalView}
                updateSelectedLocations={this.updateSelectedLocations}

                createAdStatus={createAdStatus}
                productTitle={productTitle}
                setProductTitle={this.setProductTitle}

                productDescription={productDescription}
                changeStateOfproductDescriptionModalView={this.changeStateOfproductDescriptionModalView}
                isProductDescriptionModalViewVisible={isProductDescriptionModalViewVisible}
                setProductDescription={this.setProductDescription}

                createAdStatusDone={this.createAdStatusDone}

                navigation={navigation}

                //FireStore
                updateAdInFireStore={this.updateAdInFireStore}
                isFirestoreDataUpdating={isFirestoreDataUpdating}
            />
        );
    }
}

CreateAdContainer.propTypes = {
    navigation: PropTypes.object,

    //FireStore
    userID: PropTypes.string
}

export default CreateAdContainer;
