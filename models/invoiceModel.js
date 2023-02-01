import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const invoiceSchema = new Schema({}, { timestamps: true });

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;
