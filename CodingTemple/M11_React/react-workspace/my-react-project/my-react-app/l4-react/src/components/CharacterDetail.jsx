import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// task 3, implement Character Detail feature

const CharacterDetail = ({ characterId }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!characterId) return;

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${characterId}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching character detail:', error);
      }
    };

    fetchDetail();
  }, [characterId]);

  if (!details) return <div>Select a Pokémon to see details</div>;

  return (
    <div className="character-detail">
      <h2>{details.name}</h2>
      <img src={details.sprites.front_default} alt={details.name} />
      <p><strong>Height:</strong> {details.height}</p>
      <p><strong>Weight:</strong> {details.weight}</p>
      <p><strong>Abilities:</strong> {details.abilities.map(a => a.ability.name).join(', ')}</p>
    </div>
  );
};

CharacterDetail.propTypes = {
  characterId: PropTypes.number
};

export default CharacterDetail;
