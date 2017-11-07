import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import {
    Link,
    Route, 
    NavLink, 
    HashRouter 
} from "react-router-dom";
import Scoresheet from "./Scoresheet";


//https://goshakkk.name/array-form-inputs/ full credit to this guy for the idea and code
class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      shareholders: [{ name: '' }],
      switched: false,
    };
  }
  
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });
    
    this.setState({ shareholders: newShareholders });
  }
  
  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} players`);
  }
  
  handleAddShareholder = () => {
    this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    
  }
  
  handleRemoveShareholder = (idx) => () => {
    this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
  }
  

  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
      
        <h4>Players</h4>
        <ToggleSwitch
            checked
            ref={(node) => {
                this.toggleSwitch = node;
            }}
        />
        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Player {idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="Add-button">Add Player</button>
        <button type = "button" onClick={this.handleSubmit} className="Start-button"><Link to='/scoresheet' activeStyle={{ color: 'white' }}>Start Game</Link></button>
      </form>
    )
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weaver Frisbee Golf App</h1>
        </header>
        <IncorporationForm/>
      </div>
    );
  }
}

export default App;
