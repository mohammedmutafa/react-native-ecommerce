import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateAd from './CreateAd';

class CreateAdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            selectedLocation: [],
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
            productDescription: text
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
            selectedLocation
        });
    }

    render() {
        const {
            selectedCategory,
            selectedSubCategory,
            isCreateAdSpecificationModalViewVisible,
            isProductConditionModalViewVisible,
            isSelectLocationModalViewVisible,
            isProductDescriptionModalViewVisible,
            isProductCategoryModalViewVisible,

            selectedProductCondition,
            productPrice,
            selectedLocation,
            createAdStatus,
            productTitle,
            productDescription
        } = this.state;

        const { navigation } = this.props;

        return (
            <CreateAd
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                updateProductDetails={this.updateProductDetails}
                isProductCategoryModalViewVisible={isProductCategoryModalViewVisible}
                changeStateOfProductCategoryModalView={this.changeStateOfProductCategoryModalView}

                isProductConditionModalViewVisible={isProductConditionModalViewVisible}
                changeStateOfProductConditionModalView={this.changeStateOfProductConditionModalView}
                isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                changeStateOfSelectLocationModalView={this.changeStateOfSelectLocationModalView}
                isProductDescriptionModalViewVisible={isProductDescriptionModalViewVisible}
                changeStateOfproductDescriptionModalView={this.changeStateOfproductDescriptionModalView}

                selectedProductCondition={selectedProductCondition}
                setProductConditionUsed={this.setProductConditionUsed}
                setProductConditionNew={this.setProductConditionNew}
                productPrice={productPrice}
                onProductPriceInput={this.onProductPriceInput}
                selectedLocation={selectedLocation}
                updateSelectedLocations={this.updateSelectedLocations}
                createAdStatusDone={this.createAdStatusDone}
                createAdStatus={createAdStatus}
                productTitle={productTitle}
                setProductTitle={this.setProductTitle}
                productDescription={productDescription}
                setProductDescription={this.setProductDescription}
                navigation={navigation}
            />
        );
    }
}

CreateAdContainer.propTypes = {
    navigation: PropTypes.object
}

export default CreateAdContainer;
