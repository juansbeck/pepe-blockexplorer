import stripTrailingSlash from 'lib/stripTrailingSlash';

import { getEnvValue } from './utils';

const apiEndpoint = 'https://backend.xignalscan.io'

console.log(apiEndpoint)

const socketSchema = getEnvValue(process.env.NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL) || 'wss';

const api = Object.freeze({
  host: 'backend.xignalscan.io',
  endpoint: apiEndpoint,
  socket: `${ socketSchema }://backend.xignalscan.io`,
  basePath: '',
});

export default api;
