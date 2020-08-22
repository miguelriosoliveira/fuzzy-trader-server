import { Response, Request } from 'express';

import db from '../database/connection';

export default class WalletController {
	async index(request: Request, response: Response): Promise<Response> {
		const wallet = await db('wallet').select('*');
		return response.json(wallet);
	}
}
