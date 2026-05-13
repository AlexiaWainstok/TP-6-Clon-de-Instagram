import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': 'live_CGB8sfH1gQs31FhOGUxcAIxvoFylE9HXD2UgE6xTGuc0bjUBT2S5glyU11jxFqWo',
  },
});

