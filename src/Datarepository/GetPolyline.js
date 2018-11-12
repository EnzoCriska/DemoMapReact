import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import MapView, { Marker, Polyline, AnimatedRegion, Animated} from 'react-native-maps';
import  GetSteps, {list} from './GetSteps';
import image from '../Media/icon.jpg';
export default class GetPolyline extends React.Component{
    polys  = [];
    constructor(props){
        super(props);
        console.log("Constructor...");
        this.state={
            region: new AnimatedRegion({
                latitude:21,
                longitude:105
            }),
        }
        console.log("after constructor...");
        
       
    }
    
    componentDidMount(){
        var polyliness = [];
        console.log("Start did mount...");
        var stringPoly = this.props.navigation.state.params.thamso;
        var arrPoly = stringPoly.split(';')
        for (let i = 0; i < arrPoly.length-1; i++){
            var iPoly = arrPoly[i].split('-')
            var sPoint = "{\"latitude\": " + parseFloat(iPoly[0]) + ", \"longitude\": " + parseFloat(iPoly[1]) + "}"
            var oPoint = JSON.parse(sPoint);
            polyliness.push(oPoint)
            
        }
        // console.log(polyliness)
       this.setState({
           region:{
               latitude: polyliness[0].latitude,
               longitude: polyliness[0].longitude,
               latitudeDelta: 0.02,
               longitudeDelta : 0.02,
           }

       });
       for(let i = 0; i < polyliness.length; i++){
           this.polys.push(polyliness[i]); 
       }
    }

    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
    }

    onPress(evt){
        console.log(evt.nativeEvent.coordinate.latitude);
        for(let x = 0; x < this.polys.length; x++){
            let latitude = this.polys[x].latitude;
            let longitude = this.polys.longitude;
            // setTimeout(this.setState({
            //     region:{
            //         latitude: this.polys[x].latitude,
            //         longitude: this.polys[x].longitude,
            //         latitudeDelta: 0.02,
            //         longitudeDelta : 0.02,
            //     }
            // }), 500)
            
        }
    }



    render(){
        if (this.polys.length == 0){
            return(
                <View>
                    <Text>Waiting for Process</Text>
                </View>
            )
        }else{
            return(
                <View style={{flex:1}}>
                    <Animated
                        region={this.state.region}
                        onRegionChange={this.onRegionChange}
                        />
                    
                    <MapView
                            onPress={this.onPress.bind(this)}
                            style={{flex:1}}
                            initialRegion={this.state.region}
                            zoomEnabled={true}
                            zoomControlEnabled={true}
                            
                            >
                            <Polyline 
                                coordinates={this.polys}
                                strokeColor='red'
                                
                            />

                            <Marker
                                coordinate={this.state.region}
                            />
                          
                       
                    </MapView>
                </View>
                );
        }
        
    }


}