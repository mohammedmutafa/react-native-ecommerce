import React, { Component } from 'react';

import GeneralProductDetailsPageComponent from '../component/GeneralProductDetailsPage';

class GeneralProductDetailsPage extends Component {
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
            <GeneralProductDetailsPageComponent />
        );
    }
}

export default GeneralProductDetailsPage;
