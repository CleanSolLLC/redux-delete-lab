import React, { Component } from 'react';
import Band from '../components/Band';

class Bands extends Component {
      
    render() {
        
    const bands = this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete}/>)

      return (
        <ul>
            {bands}
        </ul>
      )
    };
};
export default Bands;

