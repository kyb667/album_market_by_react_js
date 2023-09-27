import React, { memo } from "react";
import { TCard } from "./TCard";
import { GrayFourGrid } from "../grid/GrayFourGrid";

export const TCardList = memo((props) => {
  console.log("TCardList レンダリング");
  const { cardData, minNum, maxNum, addCart } = props;
  return (
    <GrayFourGrid>
      {cardData.map((data) => (
        <TCard
          key={data.id}
          data={data}
          minNum={minNum}
          maxNum={maxNum}
          addCart={addCart}
        />
      ))}
    </GrayFourGrid>
  );
});
