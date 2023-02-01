import mongoose from 'mongoose';
import Product from '../models/productModel.js';
import connectDB from '../config/db.js';

import data from './data/productData.js';
// console.log(data);

const loadProducts = () => {
  data.forEach(async (prod, index) => {
    const product = new Product({
      productName: prod['System Listing Name'],
      dsin: prod.DSIN,
      mrp: prod.MRP,
      hsnCode: prod['HSN Code'],
      gstSlab: prod['GST slab'],
      unit: prod.Unit,
    });
    await product.save();
    console.log(`product ${index + 1} saved`);
  });
};

export default loadProducts;
