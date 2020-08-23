import { Response, Request } from 'express';

import db from '../database/connection';

type CreateBodyProps = Array<{
	symbol: string;
	value: number;
	quantity: number;
}>;

export default class WalletController {
	async index(request: Request, response: Response): Promise<Response> {
		const wallet = await db('wallet').select('*');
		return response.json(wallet);
	}

	async create(request: Request, response: Response): Promise<Response> {
		const assets = request.body as CreateBodyProps;

		try {
			// eslint-disable-next-line no-restricted-syntax
			for (const asset of assets) {
				const [assetFound] = await db('wallet').where('symbol', asset.symbol).select('*');

				if (assetFound) {
					const assetUpdated = {
						...assetFound,
						quantity: assetFound.quantity + asset.quantity,
					};
					await db('wallet').where('symbol', asset.symbol).update(assetUpdated);
				} else {
					await db('wallet').insert(asset);
				}

				const [balance] = await db('balance').select('*');
				await db('balance').update({ value: balance.value - asset.value * asset.quantity });
			}

			const wallet = await db('wallet').select('*');
			return response.json(wallet);
		} catch (error) {
			console.error(error);
			return response.status(400).json(error);
		}
	}
}
