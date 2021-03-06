import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fishes: {},
      order: {}
    };
  }
  addFish(fish) {
    const fishes = {...this.state.finshes};

    // add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: SampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header age="<500></500>0" cool={true} tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object
              .keys(this.state.fishes)
              .map((key) => <Fish key={key} details={this.state.fishes[key] } /> )
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;