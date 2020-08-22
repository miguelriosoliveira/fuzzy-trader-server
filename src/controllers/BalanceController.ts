import { Response, Request } from 'express';

import db from '../database/connection';

export default class BalanceController {
	async index(request: Request, response: Response): Promise<Response> {
		const [balance] = await db('balance').select('*');
		return response.json(balance);
	}
}
