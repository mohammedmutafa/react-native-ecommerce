import React, { Component } from 'react';

import CreateAd from './CreateAd';

class CreateAdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            selectedLocation: [],
            selectedProductCondition: 'New',
            productPrice: 0,
            productTitle: undefined,
            isCreateAdSpecificationModalViewVisible: false,
            isSelectLocationModalViewVisible: false,
            productDescription: undefined, //TODO fix it on text change 
            isProductDescriptionModalViewVisible: false,
            createAdStatus: true
        };
    }

    changeStateOfCreateAdSpecificationModalView = () => {
        this.setState({
            isCreateAdSpecificationModalViewVisible: !this.state.isCreateAdSpecificationModalViewVisible
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

    createAdStatusDone = () => {
        this.setState({
            createAdStatus: false
        });
    }

    setProductConditionNew = () => {
        this.setState({
            selectedProductCondition: 'New'
        });
    }

    setProductConditionUsed = () => {
        this.setState({
            selectedProductCondition: 'Used'
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

    updateProductDetails = (key, value) => {
        switch (key) {
            case 'selectedCategory':
                this.setState({
                    selectedCategory: value[0],
                    selectedSubCategory: value[1]
                });
        }
    }

    updateSelectedLocations = selectedLocation => {
        this.setState({
            selectedLocation
        });
    }

    render() {
        const {
            selectedCategory,
            selectedSubCategory,
            isCreateAdSpecificationModalViewVisible,
            isSelectLocationModalViewVisible,
            isProductDescriptionModalViewVisible,
            selectedProductCondition,
            productPrice,
            selectedLocation,
            createAdStatus,
            productTitle
        } = this.state;

        return (
            <CreateAd
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                isCreateAdSpecificationModalViewVisible={isCreateAdSpecificationModalViewVisible}
                changeStateOfCreateAdSpecificationModalView={this.changeStateOfCreateAdSpecificationModalView}
                updateProductDetails={this.updateProductDetails}
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
            />
        );
    }
}

export default CreateAdContainer;
