import { apiRequest } from '../config/request';

export default class UserService {
  static getUserData() {
    return apiRequest({
      url: '/user',
      method: 'GET',
    });
  }
  static getLoginData(data) {
    return apiRequest({
      url: '/login',
      method: 'POST',
      data,
    });
  }
}
