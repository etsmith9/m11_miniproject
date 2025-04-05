import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = ({ onSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);

// task 2. Fetch and display Pokemon characters from the API

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
              id: details.data.id,
              name: details.data.name,
              thumbnail: details.data.sprites.front_default
            };
          })
        );
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="character-list">
      {pokemonList.map((poke) => (
        <div
          key={poke.id}
          className="character-card"
          onClick={() => onSelect(poke.id)}
        >
          <img src={poke.thumbnail} alt={poke.name} />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default CharacterList;
