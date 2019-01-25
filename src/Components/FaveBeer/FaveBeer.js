import React, { Component } from 'react';
import './FaveBeer.css';

class FaveBeer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='fave-beer-name'>
          <p>{this.props.name} | abv: {this.props.abv} ibu: {this.props.ibu}</p>
        </div>
        <div>
          <img className='fave-beer-image' src={this.props.image} alt='beer' />
        </div>
        <div className='fave-beer-description'>
          <p>
            {this.props.description}
          </p>
        </div>
        <div className='fave-beer-first-brewed'>
          <p>{this.props.firstBrewed}</p>
        </div>
        <div className='fave-see-less'>
          <p>Click card to close</p>
        </div>
      </div>
    );
  }
}

export default FaveBeer;
