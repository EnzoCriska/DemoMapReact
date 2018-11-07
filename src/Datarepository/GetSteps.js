
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class GetSteps extends React.Component {
    polylines = "";
    myObj='';
    constructor(props){
      super(props)
      this.state={
        isLoading:true,
        dataSource:null,
        isProcessing:false,
      }
    }
  
    componentDidMount(){
      console.log("Start request...");
      return fetch('https://maps.googleapis.com/maps/api/directions/json?origin=21.026458,105.799206&destination=21.178135,106.070974&key=AIzaSyDi5fWVKd7oGh4Et8pKlHz12Q6g6p3wuyk')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            isLoading:false,
            dataSource: responseJson.routes,
            isProcessing: true,
        })
       
      })
      .catch((error)=>{
        console.log("ERROR " + error)
      });
      
    }
    
    processData(){
      var polyline = require("./polyline")
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
        var s = 0;
        var lengths = 0;
        for(let x = 0; x < stepss.length; x++){
          var tempArr = polyline.decode(stepss[x].polyline.points);
          for (let i = 0; i < tempArr.length; i++){
            var string = tempArr[i][0] + "-" + tempArr[i][1] +";";
            this.polylines = this.polylines + string;
            lengths = lengths + string.length;
          }
          s = s+ tempArr.length;
          
        }  
        
        console.log("++++++" + this.polylines.length + "---------" +  s + "------" +lengths)
        // return stepss;
      }
      
      // console.log(this.polylines)
      if(this.state.isProcessing){
        this.props.navigation.navigate('Step_get_polyline', {thamso:this.polylines});
      }
      // console.log(this.myObj);
      return this.polylines;
    }

    render(){
      this.processData();
      return(
        <View>
          <Text>Hello  </Text>
        </View>
      )
    }

}

export const list = GetSteps.polylines;