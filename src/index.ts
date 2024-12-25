import { ApiPayload } from './types/api.types';
import { ApiService } from './services/api.service';
import 'dotenv/config';

const payload: ApiPayload = {
  key1: "data1",
  key2: "data2",
  key3: "data3"
};

ApiService.sendRequest(payload)
  .then(response => console.log(JSON.stringify(response)))
  .catch(error => console.error(error.message));