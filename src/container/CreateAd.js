import React, { Component } from 'react';

import CreateAdPageComponent from '../component/CreateAd';

class CreateAd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            isCreateAdSpecificationModalViewVisible: false,
            selectedLocation: [],
            selectedProductCondition: 'New',
            isSelectLocationModalViewVisible: false,
            productDescription: undefined, //TODO fix it on text change 
            isProductDescriptionModalViewVisible: false
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

    updateProductDetails = (key, value) => {
        switch (key) {
            case 'selectedCategory':
                this.setState({
                    selectedCategory: value[0],
                    selectedSubCategory: value[1]
                });
        }
    }

    render() {
        const {
            selectedCategory,
            selectedSubCategory,
            isCreateAdSpecificationModalViewVisible,
            isSelectLocationModalViewVisible,
            isProductDescriptionModalViewVisible,
            selectedProductCondition
        } = this.state;

        return (
            <CreateAdPageComponent
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
            />
        );
    }
}

export default CreateAd;
