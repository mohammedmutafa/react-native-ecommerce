import { StyleSheet } from 'react-native';

import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: 25,
        paddingVertical: 25,
        backgroundColor: Color.lightBlueWhite
    },
    locationFilterContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 25
    },
    selectLocationButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.semiDarkWhite,
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
        borderColor: Color.semiDarkWhite,
        backgroundColor: Color.lightWhite,
        padding: 15,
        marginVertical: 10
    }
});
