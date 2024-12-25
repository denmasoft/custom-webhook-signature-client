import crypto from 'crypto';
import { config } from '../config/env';

export class SignatureService {
  static generateSignature(timestamp: number, data: string): string {
    return crypto
      .createHmac('sha256', config.API_SECRET_KEY)
      .update(timestamp + config.API_PLACEHOLDER + data)
      .digest('hex');
  }
}