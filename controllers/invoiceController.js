import mongoose from 'mongoose';
import Invoice from '../models/invoiceModel.js';
import Product from '../models/productModel.js';

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json({
    success: true,
    message: 'All Invoices',
    data: invoices,
  });
};

const createInvoice = async (req, res) => {
  const { products } = req.body;
  const invoice = new Invoice();
};

export { getAllInvoices, createInvoice };
