import mongoose from 'mongoose';
import Invoice from '../models/invoiceModel.js';
import Product from '../models/productModel.js';
import converter from 'number-to-words';

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json({
    success: true,
    message: 'All Invoices',
    data: invoices,
  });
};

const createInvoice = async (req, res) => {
  // console.log(req.body);
  const productsData = req.body;
  const productsArr = [];
  const productsQuanArr = [];
  const productsDiscountArr = [];
  const productsAmountArr = [];
  let subtotal = 0;
  // console.log(productsData);
  for (let i = 0; i < productsData.length; i++) {
    const product = await Product.findOne({
      name: productsData[i].productName,
    });
    // console.log(product);
    productsArr.push(product._id);
    productsQuanArr.push(Number(productsData[i].quantity));
    productsDiscountArr.push(Number(productsData[i].discount));
    const amount =
      (product.mrp *
        Number(productsData[i].quantity) *
        Number(productsData[i].discount)) /
      100;
    productsAmountArr.push(amount);
    subtotal += amount;
  }
  // await productsData.forEach(async (prod) => {
  //   const product = await Product.findOne({ name: prod.productName });
  //   console.log(product);
  //   productsArr.push(product._id);
  //   productsQuanArr.push(Number(prod.quantity));
  //   productsDiscountArr.push(Number(prod.discount));
  //   const amount =
  //     (product.mrp * Number(prod.quantity) * Number(prod.discount)) / 100;
  //   productsAmountArr.push(amount);
  //   subtotal += amount;
  //   return;
  // });
  let CGST = 0.09 * subtotal;
  let SGST = 0.09 * subtotal;
  let total = subtotal + CGST + SGST;
  const totalInWords = converter.toWords(total);

  // console.log(productsArr);
  // console.log(productsQuanArr);
  // console.log(productsDiscountArr);
  // console.log(productsAmountArr);

  const invoice = new Invoice({
    products: productsArr,
    discount: productsDiscountArr,
    quantity: productsQuanArr,
    amount: productsAmountArr,
    subtotal,
    CGST,
    SGST,
    total,
    totalInWords,
  });
  await invoice.save();
  res.json({
    success: true,
    message: 'Invoice generated',
    data: invoice,
  });
};

export { getAllInvoices, createInvoice };
