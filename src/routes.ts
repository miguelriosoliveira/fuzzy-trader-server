import express from 'express';

import MarketstackController from './controllers/MarketstackController';
import WalletController from './controllers/WalletController';

const routes = express.Router();
const walletController = new WalletController();
const marketstackController = new MarketstackController();

routes.get('/', (request, response) => response.json({ hello: 'world' }));

routes.get('/wallet', walletController.index);
routes.post('/purchase', walletController.create);

routes.get('/marketstack', marketstackController.index);

export default routes;
