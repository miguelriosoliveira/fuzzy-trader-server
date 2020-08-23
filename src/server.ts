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

const port = process.env.PORT;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`🚀 Server running on port ${port} 🚀`));
