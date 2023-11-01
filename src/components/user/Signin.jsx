import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { getAllData, createFetch } from "../../db/crud";
import { useNavigate } from "react-router-dom";
import { UrlPath } from "../../common/common";
import { UserContext } from "../providers/UserProvider";
import { CartContent } from "../providers/CartProvider";

export const Signin = () => {
  // console.log("Signin");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const { _, setUserInfo } = useContext(UserContext);

  const { cart, setCart } = useContext(CartContent);

  const navigate = useNavigate();

  const handleIdChange = (e) => setId(e.target.value);
  const handlePwChange = (e) => setPw(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const inValidId = id === "";
  const inValidPw = pw === "";
  const inValidName = name === "";

  const checkCart = (userId) => {
    if (userId in cart) {
      return;
    }

    var cloned = { ...cart };
    let cloneId = new String(`${userId}`)["0"];
    // console.log(cloneId);
    cloned[cloneId] = [];
    setCart(cloned);
  };

  const checkForm = () => {
    if (isNaN(id)) {
      alert("IDは数値で入力してください");
      return;
    }
    if (inValidId || inValidPw || inValidName) {
      alert("入力してください");
      return;
    }
    getAllData(UrlPath.db.userInfo)
      .then((res) => {
        // console.log(res.data);
        createFetch(UrlPath.db.userInfo, {
          id: id,
          userpw: pw,
          username: name,
        })
          .then((result) => {
            // console.log(result);
            // ユーザー登録
            setUserInfo([result.data]);
            // cart 初期化
            checkCart(result.data.id);
            navigate("/");
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <h3>signin 画面</h3>
      <FormControl>
        <FormLabel>Id</FormLabel>
        <Input type="text" value={id} onChange={handleIdChange} />
        <FormLabel>PW</FormLabel>
        <Input type="password" value={pw} onChange={handlePwChange} />
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} />
        <br />
        <Button mt={4} colorScheme="teal" onClick={checkForm}>
          Signin
        </Button>
      </FormControl>
    </>
  );
};
