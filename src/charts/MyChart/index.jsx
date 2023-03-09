import React, {Component } from "react";
 import draw from './vis';

 class MyChart extends Component {
    componentDidMount () {
        draw(this.props);
    }

    componentDidUpdate(preProps){
        draw(this.props);
    }

    render() {
        return ( 
            <div className="vis-mychart" />
         );

    }
    
 }
  
 export default MyChart;