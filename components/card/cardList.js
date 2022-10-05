import React from "react";
import CardForm from "./cardForm";

const CardList = ({ data }) => {
  return (
    <div className="cardList">
      <CardForm key={data.DOCID} movie={data}/>
    </div>
  )
}

export default CardList; 