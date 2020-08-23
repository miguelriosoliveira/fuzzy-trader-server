import mongoose from 'mongoose';
import 'dotenv/config';

import Balance from '../models/Balance';

mongoose.connect(process.env.MONGO_URL as string, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

Balance.remove({}).then(() => {
	Balance.create({ value: 987654.32 }).then(() => {
		console.log('Balance initialized!');
		process.exit();
	});
});
