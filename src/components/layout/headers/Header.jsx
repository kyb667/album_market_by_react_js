import { Link, useNavigate } from "react-router-dom";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { RouterModels } from "../../../routers/RouterModels";

export const Header = () => {
  const headers = RouterModels.headers;
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = useContext(UserContext);

  const logout = () => {
    setUserInfo([]);
    alert("logoutされました");
  };

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={headers.length}>
        {headers.map((val) => {
          return (
            <GridItem w="100%" h="10" key={val.url} textAlign="center">
              {(userInfo.length > 0) & (val.name === "Login") ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <Link to={val.url} exact={val.exact}>
                  {val.name}
                </Link>
              )}
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
