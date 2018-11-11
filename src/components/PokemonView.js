import React,{ Component} from 'react';

import PokemonPost from './PokemonPost';

class PokemonView extends Component {
    constructor(props) {
        super(props);
        
        this.maxPokemon = 802;
        this.counterArr = [];
    }

    componentWillMount() {debugger;
        for(let i = 1; i <= this.maxPokemon; i++) {
            this.counterArr.push(i);
        }
    }

    render() {
        return (
            <div>
                {
                    this.counterArr.map((pId) => 
                    // this.sendPokeRequest(pId);
                    <PokemonPost pokemonId={pId} key={pId} /> )
                }
            </div>
        )
    }
}

export default PokemonView;