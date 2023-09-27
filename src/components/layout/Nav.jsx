import React, { useContext, memo } from "react";
import { UserContext } from "../providers/UserProvider";
import { CartContent } from "../providers/CartProvider";
import { Link } from "react-router-dom";

function DivName() {
  console.log("render DivName");
  const { userInfo } = useContext(UserContext);
  return (
    <>
      {userInfo.length > 0 ? (
        <>
          <div>{`${userInfo[0].username} 様`}</div>
          <br />
          <LinkMyPage />
          <br />
        </>
      ) : (
        <>
          <div>未登録ユーザー 様</div>
          <br />
        </>
      )}
    </>
  );
}

function LinkMyPage() {
  console.log("render LinkMyPage");
  return <Link to="/mypage">My Page</Link>;
}

function DivCartCnt() {
  console.log("render DivCartCnt");
  const { userInfo } = useContext(UserContext);
  const { cart } = useContext(CartContent);

  console.log(userInfo);
  console.log(cart);

  return (
    <>
      {userInfo.length > 0 ? (
        <LinkCart
          cnt={userInfo[0].id in cart ? cart[userInfo[0].id].length : 0}
        />
      ) : (
        <LinkCart cnt={"0" in cart ? cart["0"].length : 0} />
      )}
    </>
  );
}

const LinkCart = memo(({ cnt }) => {
  console.log("render LinkCart");
  return (
    <>
      <Link to="/mycart">My Cart({cnt})</Link>
    </>
  );
});

export const Nav = () => {
  console.log("Nav レンダリング");
  return (
    <>
      <DivName />
      <DivCartCnt />
    </>
  );
};
