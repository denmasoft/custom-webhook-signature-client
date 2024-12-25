import 'dotenv/config';

export const config = {
  API_SECRET_KEY: process.env.API_SECRET_KEY || 'secret-key',
  API_PLACEHOLDER: process.env.API_PLACEHOLDER || 'placeholder',
  API_URL: process.env.API_URL || 'url'
};