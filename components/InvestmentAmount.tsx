import { MAX_AMOUNT, MIN_AMOUNT, STEP_AMOUNT } from '@/constants';
import { pounds } from '@/utils/formats';
import React from 'react';

interface InvestmentAmountProps {
  amount: number;
  onChangeAmount: (amount: number) => void;
}

const InvestmentAmount = ({
  amount,
  onChangeAmount,
}: InvestmentAmountProps) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl p-4 mt-4'>
      <div className='form-control flex flex-col space-y-4'>
        <label className='label'>
          <div className='label-text'>
            Investment Amount:{' '}
            <span className='font-semibold'>{pounds.format(amount)}</span>
          </div>
        </label>
        <input
          type='range'
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          step={STEP_AMOUNT}
          value={amount}
          onChange={(e) => onChangeAmount(Number(e.target.value))}
          className='range'
        />
      </div>
    </div>
  );
};

export default InvestmentAmount;
