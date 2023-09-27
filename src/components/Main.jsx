import { Grid, GridItem } from "@chakra-ui/react";
import { MainBody } from "./layout/MainBody";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/headers/Header";
import { Nav } from "./layout/Nav";
import { UserProvider } from "./providers/UserProvider";
import { getAllData } from "../db/crud";
import React, { useState, useEffect } from "react";
import { CartProvider } from "./providers/CartProvider";
import { UrlPath } from "../common/common";

export const Main = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getAllData(UrlPath.db.album)
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => {
        alert({ err });
      });
  }, []);

  return (
    <UserProvider>
      <CartProvider>
        <Grid
          templateAreas={`"header header"
        "nav main"
        "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="200px"
          // gap="1"
          fontWeight="bold"
        >
          <GridItem pl="2" area={"header"}>
            <Header />
          </GridItem>
          <GridItem pl="2" area={"nav"}>
            <Nav />
          </GridItem>
          <GridItem bg="#f1f1f1" pl="2" area={"main"}>
            <MainBody cardData={cardData} />
          </GridItem>
          <GridItem pl="2" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </CartProvider>
    </UserProvider>
  );
};
