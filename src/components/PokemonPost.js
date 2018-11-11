import React,{ Component} from 'react';

class PokemonPost extends Component {
    constructor(props){
        super(props);
        this.sendPokeRequest = this.sendPokeRequest.bind(this);
        this.state = {
            pokemondata: null
        };
    }
    
    async sendPokeRequest(pokeId) {
        const api = "https://pokeapi.co/api/v2/";
        let request = await fetch(api + 'pokemon/' + pokeId + '/');
        let jsonData = await request.json();
        console.log(jsonData);
        this.setState({ pokemondata: jsonData });
    }

    componentWillMount() {
        this.sendPokeRequest(this.props.pokemonId);
    }

    render() {debugger;
        return (
            <div className="post">
            {
                this.state && this.state.pokemondata && <div>  
                    <img className="pic" src={this.state.pokemondata.sprites.front_default} alt={this.state.pokemondata.name + " image"}/>
                    <div className="name">{this.state.pokemondata.name}</div>
                    <div className="pokeid">{this.state.pokemondata.id}</div>
                    <div className="height">{this.state.pokemondata.height}</div>
                    <div className="weight">{this.state.pokemondata.weight}</div>
                </div>
            }
            </div>
        )
    }
}

export default PokemonPost;