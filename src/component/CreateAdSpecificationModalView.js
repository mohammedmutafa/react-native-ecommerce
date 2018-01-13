import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';

import Categories from '../styles/Categories';

const { categoryList } = Categories;

class CreateAdSpecificationModalView extends Component {

    renderBackButton = () => {
        const { changeStateOfCreateAdSpecificationModalView } = this.props;

        return (
            <View style={styles.backButtonStyle}>
                <Icon
                    name="chevron-with-circle-left"
                    type="entypo"
                    color="#C7C7CD"
                    size={30}
                    onPress={changeStateOfCreateAdSpecificationModalView}
                />
            </View>
        );
    }

    render() {
        const { mainConatinerStyle, scrollViewConatinerStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                {this.renderBackButton()}
                <ScrollView
                    // bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={scrollViewConatinerStyle}
                >
                    <List>
                        {
                            categoryList.map((item, i) => (
                                <ListItem
                                    onPress={() => console.log('Dipak')}
                                    key={i}
                                    title={item.title}
                                    leftIcon={{ name: item.icon }}
                                />
                            ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        padding: 25,
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    scrollViewConatinerStyle: {
        marginTop: 35,
        backgroundColor: 'transparent'
    },
    backButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        top: 20,
        left: 20
    }
});

export default CreateAdSpecificationModalView;
