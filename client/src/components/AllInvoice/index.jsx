import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  // const invoiceDivs = invoices.map((invoice, index) => {
  //   return <div>Hello</div>;
  // });

  useEffect(() => {
    const getInvoices = async () => {
      const res = await axios.get('http://localhost:8000/invoice');
      console.log(res);
      setInvoices(res.data.data);
    };
    getInvoices();
  }, []);
  return <div className='all_invoice-container'>All</div>;
};

export default AllInvoices;
