import React, { Component } from 'react';

import CreateAdPageComponent from '../component/CreateAd';

class CreateAd extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        // StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    render() {

        return (
            <CreateAdPageComponent />
        );
    }
}

export default CreateAd;
