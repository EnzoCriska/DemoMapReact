import React from 'react';
import {StackNavigator} from 'react-navigation'

import GetSteps from './Datarepository/GetSteps';
import GetPolyline from './Datarepository/GetPolyline';

export const HomeStack = StackNavigator({
    Step_get_step:{
        screen: GetSteps
    },
    Step_get_polyline: {
        screen: GetPolyline
    },
})