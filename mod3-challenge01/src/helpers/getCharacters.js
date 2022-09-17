export const getCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        return response.json();
    } catch {
        throw new Error('could not fetch the default price');
    }
};
