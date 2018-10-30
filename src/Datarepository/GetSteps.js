
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class GetSteps extends React.Component {
    polylines = [];
    steps =[];
    constructor(props){
      super(props)
      this.state={
        isLoading:true,
        dataSource:null,

      }
    }
  
    componentDidMount(){
      console.log("Start request...");
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
      
    }
    processData(){
      var legss;
      var stepss
      // console.log(this.state.isLoading + "....")
      if(!this.state.isLoading){
        console.log("isLoading false ...");
          var router;
          router = this.state.dataSource.map((val, key)=>{
          legss = val.legs; });
          // console.log(legss[0].steps);
        stepss = legss[0].steps;
        console.log(stepss.length);
        for (let x = 0; x< stepss.length; x++){
            this.polylines.push(stepss[x].end_location);
        }
        console.log("++++++" + this.polylines.length)
        // return stepss;
      }
      this.steps.push(stepss);
      console.log(this.polylines);
      
      return this.polylines;
    }

    render(){
      this.processData();
      return(
        <View>
          <Text>Hello</Text>
        </View>
      )
    }

}

export const list = GetSteps.polylines;