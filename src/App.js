import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';


// Component 1
class App extends Component {

  state = {
    title: 'Mon catalogue voiture 2',
    color: 'green'
  }

  render() {
    return (
      <div className="App">
          { /* J'envoie mon props dans mon composant, il sera alors accessible en tant que props */}
          <Mycars title={this.state.title} color={this.state.color}/>
          <button>Changer le nom en dur</button>
      </div>
    );
  }

}

export default App;
