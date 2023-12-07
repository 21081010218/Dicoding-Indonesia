import CONFIG from './config';

const API = {
  LIST: `${CONFIG.API_URL}list`,
  DETAIL: (id) => `${CONFIG.API_URL}detail/${id}`,
};

export default API;
