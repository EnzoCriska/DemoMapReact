import React, {Component} from 'react'
import {
    Text, View
} from 'react-native'

import MapView from 'react-native-maps'
export default class DemoMapView extends Component{

    constructor(props){
        super(props);
        this.state={
            coordinates:[
                {
                    latitude:21.038247,
                    longitude:105.7825949,
                },
                {
                    latitude:21.0230544,
                    longitude:105.8048466,
                
                }
            ],
            strokeColor: '#FF2D00',
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            marker:{
                latitude:20,
                longitude:105
            } 
        }
    }


    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1}}>
                MyMap
                </Text>
                 <MapView
                    style={{flex:7}}
                    initialRegion={this.state.region}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    >
                    <MapView.Polyline 
                        coordinates={this.state.coordinates}
                        strokeColor={this.state.strokeColor}
                    />
                 </MapView>
            </View>
               
        );
    }
}
