import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import UpdateAdDetails from './UpdateAdDetails';
import { postCollectionRef } from '../../utilities/DBReferences';

class UpdateAdDetailsContainer extends Component {
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

    componentWillMount() {
        const { postItem } = this.props;

        if (postItem) {
            const {
                image_0,
                productDescription,
                productPrice,
                productTitle,
                selectedLocation,
                selectedProductCondition,
                selectedCategory,
                selectedSubCategory
            } = postItem;

            this.setState({
                selectedImageSource: image_0,
                productDescription,
                productPrice,
                productTitle,
                selectedLocation,
                selectedProductCondition,
                selectedCategory,
                selectedSubCategory
            });
        }
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

    //UpdateExistingPost
    updateExistingPost = () => {
        const { postID } = this.props;
        const {
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

        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const postRef = postCollectionRef.doc(`${postID}`);

        let data = {
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            selectedProductCondition,
            productPrice,
            productTitle,
            productDescription,
            updatedAt: timestamp
        };

        //TODO: check is any value is missing before updating

        /**
         * Important: Unlike "push IDs" in the Firebase Realtime Database, 
         * Cloud Firestore auto-generated IDs do not provide any automatic ordering. 
         * If you want to be able to order your documents by creation date, you should store a timestamp as a field in the documents.
         */

        postRef.get()
            .then((doc) => {
                if (doc.exists) {
                    postRef.update(data).then(() => {
                        //updating current set of data
                        this.setState({
                            isFirestoreDataUpdating: false
                        });
                    }).catch((error) => {
                        //
                        this.setState({
                            isFirestoreDataUpdating: false
                        });
                    });
                }
            }).catch((err) => {
                //
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
            <UpdateAdDetails
                selectedImageSource={selectedImageSource}

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
                updateAdInFireStore={this.updateExistingPost}
                isFirestoreDataUpdating={isFirestoreDataUpdating}
            />
        );
    }
}

UpdateAdDetailsContainer.propTypes = {
    navigation: PropTypes.object,

    //FireStore
    userID: PropTypes.string
}

export default UpdateAdDetailsContainer;
