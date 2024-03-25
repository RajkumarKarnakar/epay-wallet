import React from 'react';
// import './LandingCard.css';
import CardItem from './CardItem';

function LandingCard() {
  return (
    <div className='cards'>
            <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/INDIA-PAYTM.jpg'
              text='Paytm deadline extended to March 15: Who can use UPI, wallet, FASTag, banking services, RBI'
              label='TRENDING'
              path='https://economictimes.indiatimes.com/wealth/save/paytm-deadline-extended-to-march-15-who-can-use-upi-wallet-fastag-banking-services-rbi-releases-faqs/articleshow/107756249.cms'
              
            />
            <CardItem
              src='images/fast.jpg'
              text='Paytm FASTag port: How can you port account to other banks. Details'
              label='TRENDING'
              path='https://www.hindustantimes.com/business/paytm-fastag-port-how-can-you-port-account-to-other-banks-details-101708329598767.html?utm_source=taboola_widget&utm_medium=taboola_widget&utm_campaign=article_detail_page'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sbi.jpg'
              text=' SBI Card shares up 0.55% as Nifty gain'
              label='LATEST'
              path='/services'
            />
            <CardItem
              src='images/kotak.jpg'
              text='In leadership rejig at Kotak Mahindra, KVS Manian named joint MD, Shanti Ekambaram deputy MD'
              label='LATEST'
              path='/https://www.hindustantimes.com/business/another-blow-for-paytm-jefferies-drops-ratings-amid-challenges-101708315615971.html'
            />
            <CardItem
              src='images/news2.jpg'
              text='Stanchart to continue focus on wealth management in India: Senior executive'
              label='LATEST'
              path='https://www.business-standard.com/finance/news/stanchart-to-continue-focus-on-wealth-management-in-india-senior-executive-124021900468_1.html'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
