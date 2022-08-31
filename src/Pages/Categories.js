import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../Component/ShopCategory/Heading";
import data from '../Data/Jewelry.json'

const Categories = () => {
  const param = useParams()
  const Cata = data.find(item => item.name === param.id)
  const tags = JSON.parse(Cata.types)
  return (
  <>
    <Heading id = {param.id}/>
    {
      tags.map(item => {
        return (
          <div>
            <h1>{item}</h1>
          </div>
        )
      })
    }
    
  </>
  )
};

export default Categories;
