import { useState } from 'react';
import './App.css';
import { AllInvoices, CreateInvoice } from './components';

function App() {
  const [isAllInvoiceVisible, setIsAllInvoiceVisible] = useState(true);
  const btnClickHandler = (e) => {
    e.target.name === 'view-all'
      ? setIsAllInvoiceVisible(true)
      : setIsAllInvoiceVisible(false);
  };
  return (
    <div className='App'>
      <div className='btn-container'>
        <button name='view-all' className='btn' onClick={btnClickHandler}>
          View All Invoices
        </button>
        <button name='create-new' className='btn' onClick={btnClickHandler}>
          Generate Invoice
        </button>
      </div>
      <div className='main-content'>
        {isAllInvoiceVisible ? <AllInvoices /> : <CreateInvoice />}
      </div>
    </div>
  );
}

export default App;
