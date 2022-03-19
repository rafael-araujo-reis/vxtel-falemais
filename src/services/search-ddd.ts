import axios from "axios";

export const apiSearchDDD = axios.create({
  baseURL: 'https://brasilapi.com.br/api'
});

export default apiSearchDDD;