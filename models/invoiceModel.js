import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const invoiceSchema = new Schema({},{timestamps:true})

const INVOICE = model('invoice', invoiceSchema);
