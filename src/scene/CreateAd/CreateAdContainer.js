import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import CreateAd from './CreateAd';

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

            createAdStatus: true
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
            maxWidth: 1000,
            maxHeight: 1000,
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
            selectedImageSource
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
            />
        );
    }
}

CreateAdContainer.propTypes = {
    navigation: PropTypes.object
}

export default CreateAdContainer;
