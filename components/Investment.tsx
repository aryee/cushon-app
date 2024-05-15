'use client';

import { useState } from 'react';
import FundSelection from '@/components/FundSelection';
import InvestmentAmount from '@/components/InvestmentAmount';
import Nav from '@/components/Nav';
import { pounds } from '@/utils/formats';

const Investment = () => {
  const [selectedFund, setSelectedFund] = useState('Cushon Equities Fund');
  const [amount, setAmount] = useState(1000);
  const [submittedData, setSubmittedData] = useState<{
    fund: string;
    amount: number;
  } | null>(null);

  const handleSubmit = () => {
    setSubmittedData({ fund: selectedFund, amount });
  };

  return (
    <section className='flex bg-base-100 flex-col items-center w-full'>
      <div className='flex flex-col w-full'>
        <div className='grid card bg-pink-500 place-items-center p-16'>
          <h1 className='text-3xl font-bold mb-6 text-center text-white'>
            Cushon ISA Investment
          </h1>
          <div className='text-white text-xl'>
            We offer a range of Investment types for our Retail customers
          </div>
        </div>
      </div>
      <div className='w-full max-w-xl mt-4'>
        <div className='card bg-pink-500 shadow-xl p-6 w-full'>
          <FundSelection
            selectedFund={selectedFund}
            onSelectFund={setSelectedFund}
          />
          <InvestmentAmount amount={amount} onChangeAmount={setAmount} />

          <button
            type='submit'
            className='btn w-full bg-base-100 text-pink-500 hover:bg-pink-200 mt-6'
            onClick={handleSubmit}
          >
            Submit Investment
          </button>
        </div>

        {submittedData && (
          <div className='card bg-pink-500 shadow-xl p-6 mt-6 text-white'>
            <h2 className='text-xl font-semibold mb-4'>Submitted Data</h2>
            <p>
              <span className='font-bold'>Fund:</span> {submittedData.fund}
            </p>
            <p>
              <span className='font-bold'>Amount:</span>{' '}
              {pounds.format(submittedData.amount)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Investment;
