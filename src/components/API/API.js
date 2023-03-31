import axios from 'axios';

const API_KEY = '34037944-d6bb87efc1ed15d6df0134f1f';
const BASE_API = 'https://pixabay.com/api/';

const fetchedPhotoes = (value, pageNumber) => {    
    return axios.get(`${BASE_API}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12&safesearch=true&page=${pageNumber}`);
    
}

export default fetchedPhotoes;