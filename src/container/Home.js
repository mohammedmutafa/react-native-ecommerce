import React, { Component } from 'react';

import HomeComponent from '../component/Home';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginWithPhoneModalVisible: false
        };
    }

    changeLoginWithPhoneModalViewState = () => {
        this.setState({
            isLoginWithPhoneModalVisible: !this.state.isLoginWithPhoneModalVisible
        });
    }

    render() {
        const { isLoginWithPhoneModalVisible } = this.state;
        return (
            <HomeComponent
                isLoginWithPhoneModalVisible={isLoginWithPhoneModalVisible}
                changeLoginWithPhoneModalViewState={this.changeLoginWithPhoneModalViewState}
            />
        );
    }
}
