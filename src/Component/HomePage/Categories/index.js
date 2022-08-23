import React from "react";
import {
  Title,
  CategoryMargin,
  Box,
  Photo,
  Description,
  Background,
  Tab,
  View,
} from "./Categories";
import rings from "../../../Images/ring.jpg";
import bracelet from "../../../Images/Bracelet.jpg";
import necklace from "../../../Images/necklace.jpg";
import chains from "../../../Images/chains.jpg";
import rings2 from "../../../Images/ring2.jpg";
import bracelet2 from "../../../Images/bracelet2.jpg";
import necklace2 from "../../../Images/necklace2.jpg";
import chains2 from "../../../Images/chain2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  return (
    <>
      <Title>Shop by Category</Title>
      <CategoryMargin>
        <Tab>
          <View>View all</View>
          <MdKeyboardArrowRight size={20} />
        </Tab>
        <Box>
          <Background img={rings2}></Background>
          <Photo img={rings}></Photo>
          <Description>Rings</Description>
        </Box>
        <Box>
          <Background img={bracelet2}></Background>
          <Photo img={bracelet}></Photo>
          <Description>Bracelet</Description>
        </Box>
        <Box>
          <Background img={necklace2}></Background>
          <Photo img={necklace}></Photo>
          <Description>Necklace</Description>
        </Box>
        <Box>
          <Background img={chains2}></Background>
          <Photo img={chains}></Photo>
          <Description>Chains</Description>
        </Box>
      </CategoryMargin>
    </>
  );
};

export default Category;
