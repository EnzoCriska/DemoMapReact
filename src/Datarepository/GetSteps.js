
import React, {Component} from 'react';
export default class GetSteps extends React.Component {
    polylines = [];
    constructor(props){
      super(props)
      this.state={
        isLoading:true,
        dataSource:null,
        steps:[]
      }
    }
  
    componentDidMount(){
      return fetch('https://maps.googleapis.com/maps/api/directions/json?origin=21.026458,105.799206&destination=21.178135,106.070974&key=AIzaSyDi5fWVKd7oGh4Et8pKlHz12Q6g6p3wuyk')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            isLoading:false,
            dataSource: responseJson.routes
        })
        
      })
      .catch((error)=>{
        console.log(error)
      });

      if(!this.state.isLoading){
        legs = this.state.dataSource.map((val, key)=>{
            var legs = val.legs });
        this.setState({
            steps:legs[0].steps
        });
        console.log(steps[1]);
        for (x; x<this.state.steps.length(); x++){
            this.polylines.push(PolyUtil.decode(this.state.steps[x].polyline.points))
        }
        console.log("++++++" + this.polylines)
        return this.state.steps;
      }
    }



}