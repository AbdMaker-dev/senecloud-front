import axios from 'axios';
import hearderService from './hearderService';

const API_URL = 'http://localhost:3000/api/';

class DataService {

  getAllUser() {
    return axios.get(API_URL + 'personnes');
  }

  getUserById(id) {
    return axios.get(API_URL + 'personnes/'+id, { headers: hearderService() });
  }

  updateUser(id, data) {
    return axios.put(API_URL + 'personnes'+id, data, { headers: hearderService() });
  }

  createUser(data) {
    return axios.post(API_URL + 'personnes', data, { headers: hearderService() });
  }

  deletUser(id){
      return axios.delet(API_URL + 'personnes'+id, { headers: hearderService() })
  }
}

export default new DataService();
