import React from 'react';
import json from "../Data/Cards.json";
import { Card } from './Card';
import "../Styles/News.css"
export const News = () => {
  return (
    <div className='news'>
      {json.map((element, index) => (
        <Card key={index} info={element} />
      ))}
    </div>
  );
};
