import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import ResultBeer from '../ResultBeer/ResultBeer';
import FaveBeer from '../FaveBeer/FaveBeer';
import Punk from '../../util/Punk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerResults: [],
      faveBeers: []
    }
    this.searchPunk = this.searchPunk.bind(this);
    this.addBeerFave = this.addBeerFave.bind(this);
    this.removeBeerFave = this.removeBeerFave.bind(this);
  }

  searchPunk(food) {
    Punk.search(food).then(res => {
      this.setState({
        beerResults: res
      });
    })
  }

  addBeerFave(id) {
    let currentFaveBeers = this.state.faveBeers;
    for(var i = 0; i < this.state.beerResults.length; i++) {
      if((this.state.beerResults[i].id === id) && !(currentFaveBeers.includes(this.state.beerResults[i]))) {
        currentFaveBeers.push(this.state.beerResults[i])
      }
    }
    this.setState({
      faveBeers: currentFaveBeers
    })
  }

  removeBeerFave(id) {
    let currentFaveBeers = this.state.faveBeers;
    for(var i = 0; i < this.state.faveBeers.length; i++) {
      if(this.state.faveBeers[i].id === id) {
        currentFaveBeers.splice(i, 1)
      }
    }
    this.setState({
      faveBeers: currentFaveBeers
    })
    console.log(currentFaveBeers)
  }

render() {
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='app-title'>
          <p>Beer Me</p>
        </div>
      </div>

      <div className='row app-subtitle'>
        <div>
          <p>You have your favorite food, now all you need is the perfect beer!</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <Search searchPunk={this.searchPunk} />
        </div>
      </div>

      <div>

        <div className='result-beer-div'>
          {
            this.state.beerResults.map(item => {
              return(
                <div
                  key={item.id}
                  onClick={() => {this.addBeerFave(item.id)}}
                >

                  <div>
                    <ResultBeer
                      name={item.name}
                      tagline={item.tagline}
                      image={item.image_url}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='fave-beer-div'>
          {
            this.state.faveBeers.map(item => {
              return(
                <div
                  className='fave-card'
                  key={item.id}
                  onClick={() => {this.removeBeerFave(item.id)}}
                >
                  <div>
                    <FaveBeer
                      name={item.name}
                      description={item.description}
                      image={item.image_url}
                      firstBrewed={item.firstBrewed}
                      abv={item.abv}
                      ibu={item.ibu}
                      />
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>


    </div>
  )
}



}

export default App;
