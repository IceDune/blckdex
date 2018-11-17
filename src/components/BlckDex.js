import React,{ Component } from 'react';

import PokemonView from './PokemonView';
import './BlckDex.css';

class BlckDex extends Component{
  constructor(props) {
    super(props);
    this.navItems = ['POKEMON', 'BERRIES', 'ITEMS', 'MACHINES', 'MOVES', 'OFFLINE'];
    this.api = "https://pokeapi.co/api/v2/";
    this.count = {'POKEMON': 802, 'BERRIES': 64, 'ITEMS': 918, 'MACHINES': 1328, 'MOVES': 719}

    this.renderView = this.renderView.bind(this);

    this.sendRequest = this.sendRequest.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      item: 'pokemon'
    }
  }

  async sendRequest(item, input) {
    let request = await fetch(this.api + item + '/' + input + '/');
    let jsonData = await request.json();
    console.log(jsonData);
  }

  renderItem(item) {
    let input = document.getElementById('inputField').value;
    this.sendRequest(item, input);
  }

  renderView(key) {
    //const viewRef = document.getElementById('itemArea');
    this.setState({
      item: key
    });
  }

  render() {
    return(
      <div>
        <header>
          <div>
            <img src="#" alt="BlckDex" />
            <h1>BLCK DEX</h1>
          </div>
          <div>
            <ul className="nav-ul">
              <li data-item="pokemon" onClick={(e) => this.renderView(e.currentTarget.dataset.item)}>POKEMON</li>
              <li data-item="berry" onClick={(e) => this.renderView(e.currentTarget.dataset.item)}>BERRIES</li>
              <li data-item="item" onClick={(e) => this.renderView(e.currentTarget.dataset.item)}>ITEMS</li>
              <li data-item="machine" onClick={(e) => this.renderView(e.currentTarget.dataset.item)}>MACHINE</li>
              <li data-item="move" onClick={(e) => this.renderView(e.currentTarget.dataset.item)}>MOVES</li>
            </ul>
          </div>
        </header>

        <div className="main-body">
          <div className="renderItems">
            <label htmlFor="inputField">Enter the full name or id of the {this.state.item}</label><br />
            <input id="inputField" type='text'></input>
            <button className="inputSubmit" onClick={(e) => this.renderItem(this.state.item)}>SUBMIT</button>
          </div>
          <div id="itemArea"></div>
          <div id="renderDesc"></div>
        </div>
        <div id="pokeArea">
          <PokemonView />
        </div>
      </div>
    )
  }
}

export default BlckDex;