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
    { id: 1, url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/659/65978296.jpg' },
    { id: 2, url: 'http://reales.com.np/uploads/a9.JPG' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1DTcYPln78dN1XHJyJYc6L2ERWCa4bCNZyLrAqcEq5HIXm3g' }, { id: 4 }, { id: 5 }, { id: 6 }
]

class SearchListing extends Component {

    keyExtractor = (item, index) => index;

    renderFeedsCard = ({ item }) => {
        const { navigation } = this.props;

        return <FeedsCard
            time='24 MARCH 2018'
            name='Dipak Katwal'
            price='2,80,000'
            title='Having optimized product descriptions can help improve your search engine optimization (SEO). By optimizing your product descriptions to include specific keywords, you can help improve your chances of ranking high on Google. Without product descriptions, you may be able to optimize your images for keywords, but your product page may not appear high in search engines due to a lack of content.'
            imageURL={item.url}
            thumbnailURL='https://www.famousbirthdays.com/headshots/david-beckham-4.jpg'
            navigation={navigation}
        />
    }

    renderFlatList = () => {
        return (
            <FlatList
                data={dataSource}
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

SearchListing.propTypes = {
    navigation: PropTypes.object
};

export default SearchListing;
