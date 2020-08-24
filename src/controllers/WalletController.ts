/* eslint-disable no-await-in-loop */

import { Response, Request } from 'express';

import Wallet from '../models/Wallet';

type CreateBodyProps = Array<{
	symbol: string;
	value: number;
	quantity: number;
}>;

export default class WalletController {
	async index(request: Request, response: Response): Promise<Response> {
		const wallet = await Wallet.find();
		return response.json(wallet);
	}

	async create(request: Request, response: Response): Promise<Response> {
		const assets = request.body as CreateBodyProps;

		try {
			// eslint-disable-next-line no-restricted-syntax
			for (const asset of assets) {
				const assetFound = await Wallet.findOne({ symbol: asset.symbol });

				if (assetFound) {
					assetFound.quantity += asset.quantity;
					await assetFound.save();
				} else {
					await Wallet.create(asset);
				}
			}

			const wallet = await Wallet.find();
			return response.json(wallet);
		} catch (error) {
			console.error(error);
			return response.status(400).json(error);
		}
	}
}
