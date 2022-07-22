import React from 'react';
import "./Home.css";
import "./Search.css";
import { useState } from 'react';
import Search from './Search';
import RankKofic from './RanckKofic';

function Main(){
  const [isSearch, setIsSearch] = useState(true);

  const [isRank, setisRank] = useState(true);
  const onClickRank = (event) => {
    setisRank(true);
  };
  
  return (
    <div className='container'>
      {isSearch? <Search/> : <h2>error</h2>}
      {isRank? <RankKofic/> : <h2>error</h2>}
    </div>
  )
}



export default Main;
