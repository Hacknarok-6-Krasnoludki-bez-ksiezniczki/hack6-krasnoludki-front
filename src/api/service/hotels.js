import { apiRequest } from '../config/request';

export default class HotelService {
  static getHotels(data) {
    return apiRequest({
      url: '/get_hotels',
      method: 'POST',
      data,
    });
  }
}
