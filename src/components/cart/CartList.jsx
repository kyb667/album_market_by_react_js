import React, { memo } from "react";
import { Cart } from "./Cart";
import { GrayFourGrid } from "../grid/GrayFourGrid";

export const CartList = memo((props) => {
  // console.log("CartList レンダリング");
  const { cart } = props;
  // console.log(cart);
  return (
    <>
      <div>MY cart</div>
      {cart.length > 0 ? (
        <GrayFourGrid>
          {cart.map((data) => (
            <Cart key={data.id} data={data} />
          ))}
        </GrayFourGrid>
      ) : (
        <div>気に入ったものがありません</div>
      )}
    </>
  );
});
