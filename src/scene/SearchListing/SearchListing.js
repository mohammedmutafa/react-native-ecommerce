import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { FeedsCard } from '../../component/FeedsCard';

const dataSource = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
]

class SearchListing extends Component {

    keyExtractor = (item, index) => index;

    renderFeedsCard = ({ item }) => {
        console.log(item.id)
        return <FeedsCard
            time='24 days ago'
            name='Dipak Katwal'
            title='iPhone 8 , box Pack'
            imageURL='https://img2.carmax.com/img/vehicles/15213982/1/320.jpg'
            thumbnailURL='https://img2.carmax.com/img/vehicles/15213982/1/320.jpg'
        />
    }

    renderFlatList = () => {
        return (
            <FlatList
                data={dataSource}
                style={{ marginHorizontal: 15 }}
                renderItem={this.renderFeedsCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    render() {
        return (
            this.renderFlatList()
        );
    }
}

const { map } = styles;

SearchListing.propTypes = {

};

export default SearchListing;
