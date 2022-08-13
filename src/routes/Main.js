import React from 'react';
import Search from './Search';
import RankKofic from './RanckKofic';
import Footer from '../components/Footer/Footer';

function Main(){

  return (
    <div className='wrapper'>
      <div className='contentWrapper'>
          <Search/>
          <RankKofic/>
        </div>
        <Footer />
    </div>
  )
}



export default Main;
