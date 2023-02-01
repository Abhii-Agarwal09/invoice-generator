import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../../data/productData.js';

const CreateInvoice = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [inputState, setInputState] = useState({
    productName: '',
    quantity: '',
    discount: '',
  });
  const [addedProducts, setAddedProducts] = useState([]);
  useEffect(() => {
    console.log(data);
  }, []);

  const inputChangeHandler = (e) => {
    setInputState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const productAddHandler = (e) => {
    e.preventDefault();
    // console.log(inputState);
    invoiceData.push(inputState);
    // console.log(invoiceData);
    setInputState({
      productName: '',
      quantity: '',
      discount: '',
    });
  };
  const invoiceGeneratorHandler = async (e) => {
    console.log(invoiceData);
    const res = await axios.post('http://localhost:8000/invoice', invoiceData);
    console.log(res);
    setInputState({
      productName: '',
      quantity: '',
      discount: '',
    });
    setInvoiceData([]);
  };
  return (
    <>
      <form action='#' onSubmit={productAddHandler}>
        <select
          name='productName'
          id='productName'
          value={inputState.productName}
          onChange={inputChangeHandler}>
          {/* map options */}
          <option value='#'>Select a product</option>
          {data.map((product, index) => {
            return (
              <option key={index} value={product['System Listing Name']}>
                {product['System Listing Name']}
              </option>
            );
          })}
        </select>
        <input
          type='number'
          name='quantity'
          id='quantity'
          onChange={inputChangeHandler}
          placeholder='Enter quantity'
          value={inputState.quantity}
        />
        <input
          type='number'
          name='discount'
          id='discount'
          onChange={inputChangeHandler}
          placeholder='Enter discount'
          value={inputState.discount}
        />
        <button>Add Product</button>
      </form>
      <button onClick={invoiceGeneratorHandler}>Create Invoice</button>
      <div className='added-products'>
        {invoiceData?.map((product, index) => {
          return (
            <div>
              <div>
                <b>{index + 1}</b> {product.productName}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CreateInvoice;
