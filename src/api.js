import axios from 'axios';
const BASE_URL = 'http://localhost:3002/movieTheaters'
const SEARCH_URL = "http://localhost:3002/api/movieTheaters/_search";

export const getData = (params, isSearch) => {
    return axios.get(isSearch ? SEARCH_URL : BASE_URL, {
        params
    });
}