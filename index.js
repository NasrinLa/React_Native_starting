/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WAPPFlat from './WAPPFlat';
import fetchExp from './fetchExp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => fetchExp);
