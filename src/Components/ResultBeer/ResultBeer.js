import React, { Component } from 'react';
import './ResultBeer.css';

class ResultBeer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='result-card'>
        <div className='result-beer-name'>
          <p>{this.props.name}</p>
        </div>
        <div>
          <img className='result-beer-image' src={this.props.image} alt='beer' />
        </div>
          <div className='result-beer-tagline'>
            <p>
              {this.props.tagline}
            </p>
          </div>
          <div className='result-see-more'>
            <p onClick={this.props.addFave}>Click card to see more</p>
          </div>
      </div>
    );
  }
}

export default ResultBeer;
