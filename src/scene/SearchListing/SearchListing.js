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
    { id: 1, url: 'https://f-static.motosport.com/motoblog/2014/How-to-Buy-a-Used-Dirt-Bike-small.jpg' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkswQlV67eHn0SceshdrRBD4s5yc8nJ0_c8lmkEFO2X9xtNBNlA' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1DTcYPln78dN1XHJyJYc6L2ERWCa4bCNZyLrAqcEq5HIXm3g' }, { id: 4 }, { id: 5 }, { id: 6 }
]

class SearchListing extends Component {

    keyExtractor = (item, index) => index;

    renderFeedsCard = ({ item }) => {
        console.log(item.id)
        return <FeedsCard
            time='24 days ago'
            name='Dipak Katwal'
            title='iPhone 8 , box Pack'
            imageURL={item.url}
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
