import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../../db/crud";
import { UserContext } from "../providers/UserProvider";
import { CartContent } from "../providers/CartProvider";
import { UrlPath } from "../../common/common";

export const Login = () => {
  // console.log("Login レンダリング");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);

  const { cart, setCart } = useContext(CartContent);

  const navigate = useNavigate();

  const handleIdChange = (e) => setId(e.target.value);
  const handlePwChange = (e) => setPw(e.target.value);

  const inValidId = id === "";
  const inValidPw = pw === "";

  const checkCart = (userId) => {
    // console.log("checkCart");
    // console.log(cart);
    if (userId in cart) {
      // console.log("すでにあります");
      return;
    }

    var cloned = { ...cart };
    let cloneId = new String(`${userId}`)["0"];
    // console.log(cloneId);
    cloned[cloneId] = [];
    setCart(cloned);
  };

  const checkForm = () => {
    if (inValidId || inValidPw) {
      alert("入力してください");
      return;
    }
    getData(UrlPath.db.userInfo, "id", id)
      .then((res) => {
        // console.log(res);
        // ユーザー登録
        setUserInfo(res.data);
        // cart 初期化
        checkCart(res.data[0].id);
        navigate("/");
      })
      .catch((err) => {
        alert(`error : ${JSON.stringify(err)}`);
      });
  };

  return (
    <>
      <h3>Login 画面</h3>
      <FormControl>
        <FormLabel>Id</FormLabel>
        <Input type="text" value={id} onChange={handleIdChange} />
        <FormLabel>PW</FormLabel>
        <Input type="password" value={pw} onChange={handlePwChange} />
        <br />
        <Button mt={4} colorScheme="teal" onClick={checkForm}>
          Login
        </Button>

        <div>
          <Link to="/signin">未登録の方はこちらをクリック！</Link>
        </div>
      </FormControl>
    </>
  );
};
