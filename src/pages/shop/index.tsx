import React from "react";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import { ContentWrapper, MainWrapper, ShopWrapper } from "./__styled__";

const Shop = () => {
  return (
    <ShopWrapper>
      <Navbar />
      <MainWrapper className="d-flex">
        <SideBar />
        <ContentWrapper>Content will go here</ContentWrapper>
      </MainWrapper>
    </ShopWrapper>
  );
};

export { Shop };
