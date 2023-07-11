import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {

    state = {
        cars : ["Ford", "Mercedes", "Peugeot"]
    }

    render() {

        // Destructuring ver
        // const {title} = this.props;
        const {color} = this.props;

        return (
            <div>
                {/* Destructuring ver */}
                {/* <h1>{title}</h1> */}

                <h1 style={{color : color}}>{this.props.title}</h1>
                {/* <Car color="red">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="green">{this.state.cars[2]}</Car>                */}

                {this.state.cars.map((element, index) => (
                    <Car color="red">{element}</Car>
                ))}
            </div>
            
        )
    }
}

export default Mycars;