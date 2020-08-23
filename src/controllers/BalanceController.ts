import { Response, Request } from 'express';

import Balance from '../models/Balance';

export default class BalanceController {
	async index(request: Request, response: Response): Promise<Response> {
		const balance = (await Balance.findOne()) || { value: 0 };
		return response.json(balance.value);
	}
}
