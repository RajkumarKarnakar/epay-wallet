import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' >
      <h1 className='heading'>Check out our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/send.png'
              text='SEND MONEY' 
              path='/send-money'
            />
             <CardItem
              src='images/paybill.png'
              text='PAY BILLS'             
              path='/pay-bills'
            />
            <CardItem
              src='images/addMoney.png'
              text='ADD MONEY'
              // label='ADD MONEY'
              path='/add-money'
            />
            <CardItem
              src='images/checkbalance.png'
              text='CHECK BALANCE'
              // label='CHECK BALANCE'
              path='/check-balance'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/benificary.png'
              text='ADD BENIFICARY '               
              // label='KYC AND ADD BENIFICARY'
              path='/add-benificary'
            />

            
            <CardItem
              src='images/transaction.png'
              text=' TRANSACTION HISTORY'
              path='/transaction-history'
            />

            <CardItem
              src='images/kyc.png'
              text='KYC'             
              path='/kyc'
            />
            <CardItem
              src='images/bank.png'
              text='ADD BANK ACCOUNT'
              // label='ADD BANK BALANCE'
              path='/add-bank-account'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
