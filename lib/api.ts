import type { App } from '@checktok/api';
import { treaty } from '@elysiajs/eden';

const api = treaty<App>('http://localhost:3000', {});

export default api;
