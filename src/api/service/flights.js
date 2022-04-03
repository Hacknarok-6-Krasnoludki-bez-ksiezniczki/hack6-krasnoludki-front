import { apiRequest } from '../config/request';

export default class FlightService {
  static getFlights(data) {
    return apiRequest({
      url: '/get_flights',
      method: 'POST',
      data,
    });
  }
}
