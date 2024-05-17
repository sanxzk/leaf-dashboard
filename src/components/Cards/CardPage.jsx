import React from "react";
import Card from "./Card";
import "./CardPage.css";
import data from "./data.json";
import { useSelector } from "react-redux";
const CardPage = () => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div style={{backgroundColor:colors.tertiary}} className="card-page">
      <p style={{ color: colors.textColor }}>
        Notes Created on <strong>16 May 2024</strong>
      </p>
      <div className="card-container">
        {data.map((cardData, index) => {
          return <Card key={index} data={cardData} />;
        })}
      </div>
    </div>
  );
};

export default CardPage;
