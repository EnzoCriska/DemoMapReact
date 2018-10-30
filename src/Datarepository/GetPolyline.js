import React, {Component} from 'react';
import { Text, View} from 'react-native';
import MapView from 'react-native-maps';
import  GetSteps, {list} from './GetSteps';
export default class GetPolyline extends React.Component{
    polyliness=[]
    constructor(props){
        super(props);
        console.log("Constructor...");
        this.state={
            steps:0,
            region:null
        }
        console.log("after constructor...");
        this.polyliness.push();
    }

    componentDidMount(){
        console.log("Start did mount...");

        console.log(list);
        console.log(this.polyliness);
    //    this.setState({
    //        steps:1,
    //        region:{
    //            latitude:this.polyliness[0].lat,
    //            longitude:this.polyliness[0].lng
    //        }

    //    })
       
    }

    render(){
        return(
        <View style={{flex:1}}>
            <Text style={{flex:1}}>Hello this is Poliline</Text>
            {/* <MapView
                    style={{flex:7}}
                    initialRegion={this.state.region}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    >
                    <MapView.Polyline 
                        coordinates={this.polylines}
                        strokeColor={this.state.strokeColor}
                    />
                 </MapView> */}
        </View>
        );
    }


}