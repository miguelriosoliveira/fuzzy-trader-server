/* eslint-disable no-await-in-loop */

import { Response, Request } from 'express';

import { marketstackAPI } from '../services/apis/marketstackAPI';

export default class MarketstackController {
	async index(request: Request, response: Response): Promise<Response> {
		try {
			const { route, params } = request.query;
			console.log({ route, params });

			const marketstackResponse = await marketstackAPI.get(route as string, {
				params: params ? JSON.parse(params as string) : {},
			});
			return response.json(marketstackResponse.data);
		} catch (error) {
			console.error(error);
			return response.status(400).json({ error });
		}
	}
}
