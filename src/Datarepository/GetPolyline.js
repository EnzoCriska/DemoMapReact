import React, {Component} from 'react'
import GetSteps from './src/Dataripository/GetSteps'
export default class GetPolyline extends React.Component{
    // polylines=[]
    constructor(props){
        super(props);
        // console.log("Constructor...");
        // this.state={
        //     steps:GetSteps.state.steps,
        //     region:null
        // }
        // console.log("after constructor...");
    }

    componentDidMount(){
        console.log("Start did mount...");
    //    for(let x; x < this.state.steps.length; x++){
    //        this.polylines.push(PolyUtil.decode(this.state.steps[x]));
    //        console.log(this.polylines[0]);
    //    }
    
    //    this.setState({
    //        steps:GetSteps.state.steps,
    //        region:this.polylines[0]

    //    })
       
    }

    render(){
        return(
        <view style={{flex:1}}>
            {/* <MapView
                    style={{flex:1}}
                    initialRegion={this.state.region}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    >
                    <MapView.Polyline 
                        coordinates={this.polylines}
                        strokeColor={this.state.strokeColor}
                    />
                 </MapView> */}
        </view>
        );
    }


}