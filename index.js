

import {AppRegistry} from 'react-native';
import App from './src/App';
// import {name as appName} from './app.json';
// import DemoMapView from './src/DemoMapView';
import GetPolyline from './src/Datarepository/GetPolyline';
import GetSteps from './src/Datarepository/GetSteps';
import MapViewDirections from './src/demo';
// AppRegistry.registerComponent('DemoMap', () => GetPolyline);
AppRegistry.registerComponent('DemoMap', () => MapViewDirections);