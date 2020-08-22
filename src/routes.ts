import express from 'express';

import BalanceController from './controllers/BalanceController';
import WalletController from './controllers/WalletController';

const routes = express.Router();
const balanceController = new BalanceController();
const walletController = new WalletController();

routes.get('/balance', balanceController.index);
routes.get('/wallet', walletController.index);

export default routes;
