import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfilePublic from './ProfilePublic';

import { postCollectionRef } from '../../utilities/DBReferences';

class ProfilePublicContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sellerAdsList: []
        }
    }

    async componentWillMount() {
        const { sellerData } = this.props;
        const { ownerID } = sellerData;

        const { sellerAdsList } = this.state;
        let copySellerAdsList = [...sellerAdsList];

        await postCollectionRef.where('ownerID', '==', ownerID).get()
            .then((snapshot) => {
                let dSArray = [];
                snapshot.forEach((doc) => {
                    dSArray.push(doc.data());
                });
                copySellerAdsList = [...copySellerAdsList, ...dSArray];
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });

        this.setState({
            sellerAdsList: copySellerAdsList
        });
    }

    render() {
        const { sellerData } = this.props;
        const { sellerAdsList } = this.state;

        return (
            <ProfilePublic
                sellerData={sellerData}
                sellerAdsList={sellerAdsList}
            />
        );
    }
}

ProfilePublicContainer.propTypes = {
    sellerData: PropTypes.object
};

export default ProfilePublicContainer;
