import axios from 'axios';
const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        let response = await axios.post("http://localhost:8000/upload", data);
        return response.data;
    } catch (error) {
        console.log('hi')
        console.error('Error while calling the API ', error.message);
    }
}