import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name : 'ford', color: 'red', year : '2000'},
            {name : 'Mercedes', color: 'black', year : '2010'},
            {name : 'Peugeot', color: 'green', year : '2018'},
        ]
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                
                {
                    this.state.voitures.map((element, index) => (
                        <Car color = {element.color} year = {element.year}>{element.name}</Car>
                    ))
                }
                {/* <Car color = {this.state.voitures[0].color} year = {this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
                <Car color = {this.state.voitures[1].color} year = {this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
                <Car color = {this.state.voitures[2].color} year = {this.state.voitures[2].year}>{this.state.voitures[2].name}</Car> */}
            </div>
           
        )
    }
}

export default Mycars