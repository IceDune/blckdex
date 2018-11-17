import React,{ Component} from 'react';
import ReactDOM from 'react-dom';

import PokemonPost from './PokemonPost';
import './PokemonView.css';

class PokemonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterArr : []
        }
        this.maxPokemon = 802;
        this.currentId = 31;
        this.renderMore = this.renderMore.bind(this);
    }

    componentWillMount() {debugger;
        let ar = [];
        for(let i = 1; i <= 30; i++) {
            ar.push(i);
        }
        this.setState({ counterArr: [...ar]});
    } 

    componentDidMount() {
        window.addEventListener('scroll', this.renderMore);
    }

    renderMore() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(this.currentId + 30 <= 802){
                this.currentId += 30;
                let ar = [];
                for(let i = 0; i < this.currentId; i++) {
                    ar.push(i);
                }
                this.setState({
                    counterArr: [...ar]
                });
            } else if(this.currentId + 21 == 802) {
                this.currentId += 21;
                let ar = [];
                for(let i = 0; i < this.currentId; i++) {
                    ar.push(i);
                }
                this.setState({
                    counterArr: [...ar]
                });
            }
        }
    }

    render() {
        return (
            <>
                {
                    this.state.counterArr.map((pId) => 
                    <PokemonPost pokemonId={pId} key={pId} /> )
                }
            </>
        )
    }
}

export default PokemonView;