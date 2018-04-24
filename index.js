import { AppRegistry } from 'react-native';
import App from './src/appEntry/App';

//TODO:HIDE Warning for Temporary
//https://github.com/facebook/react-native/issues/18868
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

AppRegistry.registerComponent('ecommerce', () => App);
