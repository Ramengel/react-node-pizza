import axios from 'axios';

export const fetchPizzasApi = async (url: string) => {
    return await axios(url)
    .then(res => res)
    .catch(error => error);
}

export default fetchPizzasApi;