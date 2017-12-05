import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import HomeComponent from '../component/Home';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginWithPhoneModalVisible: false
        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
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
