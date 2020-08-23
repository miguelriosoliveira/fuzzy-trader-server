import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

import 'dotenv/config';

const app = express();

mongoose.connect(process.env.MONGO_URL as string, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3333;
// eslint-disable-next-line no-console
app.listen(3333, () => console.log(`🚀 Server running on port ${port} 🚀`));
