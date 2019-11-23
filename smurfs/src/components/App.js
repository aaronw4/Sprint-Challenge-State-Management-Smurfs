import React, { Component } from "react";
import {connect} from 'react-redux'
import "./App.css";
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import { getSmurfData } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfData()
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>Smurf Village Members</h1>
        <Smurfs smurfs={this.props.smurfs}/>
        <AddSmurf/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfData}
)(App);
