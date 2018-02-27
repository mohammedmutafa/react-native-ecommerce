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
            isSelectLocationModalViewVisible: false
        };
    }

    changeStateOfCreateAdSpecificationModalView = () => {
        this.setState({
            isCreateAdSpecificationModalViewVisible: !this.state.isCreateAdSpecificationModalViewVisible
        });
    }

    changeStateOfSelectLocationModalView = () => {
        this.setState({
            isSelectLocationModalViewVisible: !this.state.isSelectLocationModalViewVisible
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
            isSelectLocationModalViewVisible
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
            />
        );
    }
}

export default CreateAd;
