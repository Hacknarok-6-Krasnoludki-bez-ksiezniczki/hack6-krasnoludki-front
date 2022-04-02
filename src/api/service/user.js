import { apiRequest } from 'api/config/request';

export default class UserService {
  static getUserData() {
    return apiRequest({
      url: '/user',
      method: 'GET',
    });
  }
}
