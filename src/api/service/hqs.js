import { apiRequest } from '../config/request';

export default class HqsService {
  static getHqs(idCompany) {
    return apiRequest({
      url: `/hqs/${idCompany}`,
      method: 'GET',
    });
  }
}
