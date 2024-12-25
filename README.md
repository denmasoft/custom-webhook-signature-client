# API Service with Signature Authentication

A TypeScript service for making authenticated API requests with HMAC SHA-256 signatures.

## Features

- HMAC SHA-256 signature generation
- Environment variable configuration
- TypeScript support
- Error handling
- Modular architecture

## Installation

```bash
npm install
```

## Configuration

1. Create a `.env` file:
```env
API_SECRET_KEY=your-secret-key
API_PLACEHOLDER=your-placeholder
API_URL=your-api-url
```

## Usage

Development:
```bash
npm run dev
```

Production:
```bash
npm run build
npm start
```

## API

```typescript
import { ApiService } from './services/api.service';

const payload = {
  key1: "data1",
  key2: "data2",
  key3: "data3"
};

ApiService.sendRequest(payload)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Project Structure

```
src/
  ├── config/         # Environment configuration
  ├── services/       # API and signature services
  ├── types/          # TypeScript interfaces
  └── index.ts        # Entry point
```

## License

MIT