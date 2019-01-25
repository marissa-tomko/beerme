import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFood: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.updateInputFood = this.updateInputFood.bind(this);

  }

  updateInputFood(e) {
    this.setState({
      inputFood: e.target.value
    })
  }

  handleSearch(e) {
    this.props.searchPunk(this.state.inputFood)
    e.preventDefault();
  }

  render() {
    return (
      <div className='search-bar'>
        <input id='food-value' type='text' onChange={this.updateInputFood} placeholder='Enter a food to find a pairing!'/>
        <button id='submit' type='submit' onClick={this.handleSearch}>GO</button>
      </div>
    );
  }
}

export default Search;
