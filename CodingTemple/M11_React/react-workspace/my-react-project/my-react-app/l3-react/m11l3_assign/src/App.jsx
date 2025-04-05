import { Component } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

// Task 1. Marvel API isn't working so used Pokemon API instead
// Task 4, Integrating components and Updating User Interface

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokeId: null,
    };
  }

  handlePokemonSelect = (pokemonId) => {
    this.setState({ selectedPokeId: pokemonId });
  };

  render() {
    const { selectedPokeId } = this.state;

    return (
      <div className="app-container">
        <h1>Our Pokémon</h1>
        <div className="layout">
          <CharacterDetail characterId={selectedPokeId} />
          <CharacterList onSelect={this.handlePokemonSelect} />
        </div>
      </div>
    );
  }
}

export default App;
