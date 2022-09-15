import React from "react";
import CardForm from "./cardForm";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      <CardForm key={data.DOCID} movie={data} />
    </div>
  )
}

export default CardList; 