import mongoose from 'mongoose';
import 'dotenv/config';

import Wallet from '../models/Wallet';

mongoose.connect(process.env.MONGO_URL as string, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

Wallet.deleteMany({}).then(() => {
	console.log('All entries in wallet deleted!');
	process.exit();
});
