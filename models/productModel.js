import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    productName: String,
    dsin: String,
    mrp: Number,
    hsnCode: String,
    gstSlab: {
      type: Number,
      default: 18,
    },
    unit: {
      type: String,
      default: 'pcs',
    },
  },
  { timestamps: true }
);
const Product = model('Product', productSchema);

export default Product;
