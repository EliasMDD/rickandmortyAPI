import { useEffect, useState } from "react";
import { getApi } from "../actions/api";


export const Card = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        getApi().then(res => setCharacters(res));
    }, []);

    const handleClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleClose = () => {
        setSelectedCharacter(null);
    };
    


    
    return (
        <div className="card-container">
            {characters.map((character) => (
                <div key={character.name} onClick={() => handleClick(character)}>
                    <img src={character.img} alt={character.name} />
                    <p>Name: {character.name}</p>
                    <p>Status: 
                        <span className={`status ${character.status.toLowerCase()}`}>
                        {character.status !== 'Unknown' && <span className={`status-indicator ${character.status.toLowerCase()}`}></span>}
                        {character.status}
                        </span>
                    </p>
                    <p>Species: {character.species}</p>
                    <p>Location: {character.location.name}</p>
                    <p>Fist seen in Episode: {character.firstepisode}</p>
                    <p>Created: {character.created}</p>
                </div>
            ))}
            {selectedCharacter && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h2>{selectedCharacter.name}</h2>
                        <div className="image-container">
                            <img src={selectedCharacter.img} alt={selectedCharacter.name} />
                        </div>
                        <p>Status: 
                        <span className={`status ${selectedCharacter.status.toLowerCase()}`}>
                        {selectedCharacter.status !== 'Unknown' && <span className={`status-indicator ${selectedCharacter.status.toLowerCase()}`}></span>}
                        {selectedCharacter.status}
                        </span>
                        </p>
                        <p>Species: {selectedCharacter.species}</p>
                        <p>Location: {selectedCharacter.location.name}</p>
                        <p>Fist seen in Episode: {selectedCharacter.firstepisode}</p>
                        <p>Created: {selectedCharacter.created}</p>
                        <p>Episodes:</p>
                        <ul className="episode-list">
                            {selectedCharacter.episodes.map((episode, episodeIndex) => (
                                <li key={episodeIndex}>{episode}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};



