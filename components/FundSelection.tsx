import { FUNDS } from '@/constants';
import React from 'react';

interface FundSelectionProps {
  selectedFund: string;
  onSelectFund: (fund: string) => void;
}

const FundSelection = ({ selectedFund, onSelectFund }: FundSelectionProps) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl p-4'>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text font-semibold'>Select Fund</span>
        </label>
        <select
          className='select select-bordered w-full mt-4'
          value={selectedFund}
          onChange={(e) => onSelectFund(e.target.value)}
        >
          {FUNDS.map((fund) => (
            <option key={fund} value={fund}>
              {fund}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FundSelection;
