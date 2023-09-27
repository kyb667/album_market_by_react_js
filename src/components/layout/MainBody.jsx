import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { CartContent } from "../providers/CartProvider";

import { Login } from "../user/Login";
import { Signin } from "../user/Signin";

import { MyPage } from "./nav/MyPage";

import { CartList } from "../cart/CartList";

import { addCart } from "../cart/CardFunc";

import { TCardList } from "../products/TCardList";

export const MainBody = ({ cardData }) => {
  const { userInfo, _ } = useContext(UserContext);
  const { cart, _2 } = useContext(CartContent);

  const userId = userInfo.length > 0 ? userInfo[0].id : "0";

  console.log("MainBody レンダリング " + userId);

  return (
    <Routes>
      {/* body */}
      <Route
        path="/"
        element={
          <TCardList
            cardData={cardData}
            minNum={0}
            maxNum={100}
            addCart={addCart}
          />
        }
      />
      <Route
        path="/split1"
        element={
          <TCardList
            cardData={cardData}
            minNum={0}
            maxNum={20}
            addCart={addCart}
          />
        }
      />
      <Route
        path="/split2"
        element={
          <TCardList
            cardData={cardData}
            minNum={21}
            maxNum={40}
            addCart={addCart}
          />
        }
      />
      <Route
        path="/split3"
        element={
          <TCardList
            cardData={cardData}
            minNum={41}
            maxNum={50}
            addCart={addCart}
          />
        }
      />
      {/* user login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      {/* user */}
      <Route
        path="/mypage"
        element={userInfo.length > 0 ? <MyPage /> : <Navigate replace to="/" />}
      />
      <Route
        path="/mycart"
        element={<CartList cart={userId in cart ? cart[userId] : []} />}
      />
    </Routes>
  );
};
