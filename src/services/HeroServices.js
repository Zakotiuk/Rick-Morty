import axios from "axios";

export default class CharacterService{
    static async getCharacters (page) {
        const response = await axios.get("https://rickandmortyapi.com/api/character/?page=" + page);
        return response.data;
    }

    static async getCharacterById (id) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        console.log(response);
        return response.data;
    }
}
