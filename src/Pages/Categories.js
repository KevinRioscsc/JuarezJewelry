import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../Component/ShopCategory/Heading";
import { jewelry } from "../Data/Jewelry";
import { Type } from "../Component/TypeCarousel";

const Categories = () => {
  const param = useParams();
  const Cata = jewelry.find((item) => item.name === param.id);
  const tags = Cata.types;
  return (
    <>
      <Heading id={param.id} />
      <Type types={tags} />
    </>
  );
};

export default Categories;
