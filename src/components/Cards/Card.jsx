import React from "react";
import "./card.css";
import { useSelector } from "react-redux";

const Card = ({ data }) => {
  const { colors } = useSelector((state) => state.theme);
  return (
    <div style={{ backgroundColor: colors.secondary,color:colors.textColor }} className="card">
      <div className="card-head">
        <div>
          <img alt={data.title} src={data.thumbnailLink} />
          <p>
            <h3>{data.title}</h3>
            <span> <strong> website:</strong> {data.website}</span>
          </p>
        </div>
        <p>{data.time}</p>
      </div>
      <div className="tags-container">
        Tags:{" "}
        {data.tags.map((tag, index) => {
          return <span className="tag"> {tag} </span>;
        })}
      </div>
      <p className="highlight">
        <strong>Highlight: </strong>
        {data.Highlight}
      </p>
      <p className="note">
        <strong>Notes: </strong>
        {data.notes}
      </p>
    </div>
  );
};

export default Card;
