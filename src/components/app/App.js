import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import key from './key.js';
import Search from '../search/Search';
import Images from '../image/Images';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      imgs: [],
      loadingState: true
    };
  }
  
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'light') => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${key.ClientID}`
      )
      .then(data => {
        this.setState({ imgs: data.data.results, loadingState: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kotak</h1>
          <Search onSearch={this.performSearch} />
        </header>
        <div>
          {this.state.loadingState
            ? <p>Loading</p>
            : <Images data={this.state.imgs} />}
        </div>
      </div>
    );
  }
}

export default App;
