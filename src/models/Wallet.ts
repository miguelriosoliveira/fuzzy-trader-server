import mongoose, { Document, Schema } from 'mongoose';

export interface IWallet extends Document {
	symbol: string;
	value: number;
	quantity: number;
}

const WalletSchema = new Schema({
	symbol: { type: String, required: true, unique: true },
	value: { type: Number, required: true },
	quantity: { type: Number, required: true },
});

export default mongoose.model<IWallet>('Wallet', WalletSchema);
