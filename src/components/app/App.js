import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import Search from '../search/Search';
import Images from '../image/Images';
import Headroom from 'react-headroom';
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
        `https://api.unsplash.com/search/photos/?page=1&per_page=40&query=${query}&client_id=${UCLIENT_ID}`
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
      <div className="app">
        <Headroom>
          <header role="banner" id="header">
            <section className="head-container maxwidth-wrap">
            
              <h2 className="logo">Convoy</h2>
              <Search onSearch={this.performSearch} />
            
            </section>
          </header>
        </Headroom>
        <main role="main" id="main">
          <section className="main-container maxwidth-wrap">
          
            {this.state.loadingState
              ? <p>Loading Images</p>
              : <Images data={this.state.imgs} />}
          </section>
        </main>
        <footer role="contentinfo" id="footer">
          <section className="footer maxwidth-wrap"> 
            <p>(c) <a href="https://github.com/limongoo/convoy" target="_blank" rel="author noopener noreferrer">Convoy — Ivan Limongan</a></p>
          </section>
        </footer>

      </div>
    );
  }
}

export default App;
