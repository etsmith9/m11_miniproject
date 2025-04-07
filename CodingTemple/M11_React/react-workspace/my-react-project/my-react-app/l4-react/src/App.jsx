import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import NavigationBar from './components/NavigationBar';
import Stories from './components/Stories';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

// Task 1. Marvel API isn't working so used Pokemon API instead

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


  // Task 2, set up routes for the app
  render() {
    const { selectedPokeId } = this.state;

    return (
      <div className="app-container">
        <h1>Our Pokémon</h1>
        <div className="layout">
          <NavigationBar />
          <CharacterDetail characterId={selectedPokeId} />
          <BrowseCharacters onSelect={this.handlePokemonSelect} /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CharacterDetail" element={<CharacterDetail />} />
            <Route path="/BrowseCharacters" element={<BrowseCharacters />} />
            <Route path="/Stories" element={<Stories />} />
            <Route path="/" element={<BrowseCharacters onSelect={this.handlePokemonSelect} />} />
            <Route path="/pokemon/:id" element={<CharacterDetail characterId={selectedPokeId} />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
