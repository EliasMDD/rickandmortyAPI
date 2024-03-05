export const getApi = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    const dataFinal = data?.results?.map((character) => ({
        name: character.name,
        status: character.status,
        img: character.image,
        species: character.species,
        location: character.location,
        firstepisode: `Episode ${character.episode?.[0]?.split('/').pop() || 'Unknown'}`,
        created:character.created,
        episodes:character.episode
    }));
    return dataFinal;
};

