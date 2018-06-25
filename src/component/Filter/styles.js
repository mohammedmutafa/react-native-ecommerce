import { StyleSheet } from 'react-native';

import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Color.lightWhite,
        flex: 1
    },
    locationFilterContainer: {
        flexDirection: 'column',
        padding: 25
    },
    selectLocationButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.placeholderWhite,
        backgroundColor: Color.lightWhite,
        padding: 10,
        marginVertical: 10
    },
    priceFilterButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.placeholderWhite,
        backgroundColor: Color.lightWhite,
        padding: 15,
        marginVertical: 10
    },
    navigationBarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.lightWhite
    }
});
