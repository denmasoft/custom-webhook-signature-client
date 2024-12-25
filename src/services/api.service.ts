import axios, { AxiosRequestConfig } from 'axios';
import { ApiPayload, ApiResponse } from '../types/api.types';
import { SignatureService } from './signature.service';
import { config } from '../config/env';

export class ApiService {
  static async sendRequest(payload: ApiPayload): Promise<ApiResponse> {
    const data = JSON.stringify(payload);
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = SignatureService.generateSignature(timestamp, data);

    const requestConfig: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: config.API_URL,
      headers: {
        'HTTP_API_SIGNATURE': signature,
        'Content-Type': 'application/json'
      },
      data
    };

    try {
      const response = await axios.request(requestConfig);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(JSON.stringify(error.response.data));
      }
      throw error;
    }
  }
}