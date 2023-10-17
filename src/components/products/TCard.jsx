import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useContext, memo } from "react";
import { UserContext } from "../providers/UserProvider";
import { CartContent } from "../providers/CartProvider";

export const TCard = ({ data, minNum, maxNum, addCart }) => {
  // console.log("TCard レンダリング");

  const context = useContext(UserContext);

  const { cart, setCart } = useContext(CartContent);

  const { userInfo, setUserInfo } = context;

  const checkFlag = data.id >= minNum && data.id <= maxNum;

  return (
    <>
      {checkFlag &&
      (userInfo.length > 0
        ? data.id.toString().includes(userInfo[0].id.toString())
        : true) ? (
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Card border="1px" borderColor="gray.200">
            <CardHeader>
              <Heading size="md"> My Album {data.id} </Heading>
            </CardHeader>
            <CardBody>
              <Text>{data.title}</Text>
            </CardBody>
            <Image objectFit="cover" src={data.url} alt="Chakra UI" />
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                {/* <Button
                  borderRightRadius="0"
                  onClick={addCart.bind(this, userInfo, data, cart, setCart)}
                >
                  Buy now
                </Button> */}
                <Button
                  borderRightRadius="0"
                  onClick={addCart.bind(this, userInfo, data, cart, setCart)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      ) : null}
    </>
  );
};
