import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
}



componentDidMount = () => {
  this.fetchWine()
}

export default App;