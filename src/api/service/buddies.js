import { apiRequest } from '../config/request';

export default class BuddyService {
  static getBuddies(data) {
    return apiRequest({
      url: '/get_buddies',
      method: 'POST',
      data,
    });
  }
}
