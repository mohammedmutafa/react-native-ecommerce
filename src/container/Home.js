import React, { Component } from 'react';
import {
    AppRegistry, Text, View, Image, Alert,
    FlatList, StyleSheet, Dimensions, ScrollView,
    TouchableOpacity, Button, ToolbarAndroid, Modal
} from 'react-native';

import HomeComponent from '../component/Home';

export default class Home extends Component {

    render() {
        return (
            <HomeComponent />
        );
    }
}
