import { apiRequest } from '../config/request';

export default class CityService {
  static getCities() {
    return apiRequest({
      url: '/cities',
      method: 'GET',
    });
  }
}
