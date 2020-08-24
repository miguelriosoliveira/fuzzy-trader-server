import express from 'express';

import WalletController from './controllers/WalletController';

const routes = express.Router();
const walletController = new WalletController();

routes.get('/', (request, response) => response.json({ hello: 'world' }));

routes.get('/wallet', walletController.index);
routes.post('/purchase', walletController.create);

export default routes;
