import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
      pictures: [],
    };
  }

  componentDidMount()
  {
    fetch('https://randomuser.me/api/?results=50')
    .then(results =>
    {
      return results.json();
    }).then(data =>
      {
        let pictures = data.results.map((pic) =>
        {
          return (
            <div key = {pic.results}>
              <img src={pic.picture.medium} alt="portraits"/>
            </div>
          )
        })
        this.setState({ pictures: pictures });
        //console.log("state", this.state.pictures);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container2">
          <div className="container1">
            {this.state.pictures}
          </div>
        </div>
      </div>
    );
  }
}

export default App;