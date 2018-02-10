import React, { Component } from 'react';

import CreateAdPageComponent from '../component/CreateAd';

class CreateAd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            isCreateAdSpecificationModalViewVisible: false,

            parentListDataSource: undefined,
            
        };
    }
    componentDidMount() {
        // StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    changeStateOfCreateAdSpecificationModalView = () => {
        console.log('HELLO>>>>>>>>>>>>>>>')
        this.setState({
            isCreateAdSpecificationModalViewVisible: !this.state.isCreateAdSpecificationModalViewVisible
        });
    }

    render() {
        const { selectedCategory, selectedSubCategory, isCreateAdSpecificationModalViewVisible } = this.state;

        return (
            <CreateAdPageComponent
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                isCreateAdSpecificationModalViewVisible={isCreateAdSpecificationModalViewVisible}
                changeStateOfCreateAdSpecificationModalView={this.changeStateOfCreateAdSpecificationModalView}
            />
        );
    }
}

export default CreateAd;
