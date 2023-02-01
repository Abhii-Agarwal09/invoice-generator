import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const invoiceSchema = new Schema(
  {
    products: {
      type: [Schema.Types.ObjectId],
      ref: 'products',
    },
    quantity: [Number],
    discount: [Number],
    amount: [Number],
    subtotal: Number,
    CGST: Number,
    SGST: Number,
    Total: Number,
    totalInWords: String,
  },
  { timestamps: true }
);

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;
