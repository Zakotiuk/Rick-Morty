import axios from "axios";

export default class LocationService{
    static async getLocations (page) {
        const response = await axios.get("https://rickandmortyapi.com/api/location/?page=" + page);
        return response.data;
    }

    static async getLocationTypeByUser (type) {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/?type=${type}`);
        console.log(response);
        return response.data;
    }
}