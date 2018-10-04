import React, { Component } from 'react';
import './search.css';
import searchIcon from './baseline-search-24px.svg';
export default class Search extends Component {
  state = {
    searchText: ''
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">Search</label>
        <input
          type="search"
          onChange={this.onSearchChange}
          ref={input => (this.query = input)}
          name="search"
          placeholder="Ex: Plants"
        />
        <button type="submit" id="submit" className="submit-button">
          <img src={searchIcon} alt="search icon"/>
        </button>
      </form>
    );
  }
}