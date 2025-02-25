import axios from 'axios';
const i = axios.create({ baseURL: 'https://api.chucknorris.io/jokes' });
export default i