import React, { Component } from 'react';
import draw from './vis';

class PieChart extends Component {
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render () {
        return(
            <div className='vis-piechart'/>
        )
    }
}
 
export default PieChart;