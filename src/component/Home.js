import React, { Component } from 'react';
import {
    AppRegistry, Text, View, Image, Alert,
    FlatList, StyleSheet, Dimensions, ScrollView,
    TouchableOpacity, Button, ToolbarAndroid, Modal
} from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View><Text>HELLO</Text></View>
        );
    }

}

const window = Dimensions.get('window');
const categoryContainerHeight = (160 / 768) * window.height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
