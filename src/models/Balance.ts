import mongoose, { Document, Schema } from 'mongoose';

export interface IBalance extends Document {
	value: number;
}

const BalanceSchema = new Schema({
	value: { type: Number, required: true },
});

export default mongoose.model<IBalance>('Balance', BalanceSchema);
