import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import key from './key.js';
import Search from '../search/Search';
import Images from '../image/Images';

const UCLIENT_ID = `${process.env.REACT_APP_UCLIENT_ID}`;

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

  performSearch = (query = 'plants') => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${UCLIENT_ID}`
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
        <header className="header">
          <h1>Convoy</h1>
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
