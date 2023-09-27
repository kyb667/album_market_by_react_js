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

export const Cart = ({ data }) => {
  console.log("Cart レンダリング");
  return (
    <>
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
              <Button
                borderRightRadius="0"
                // onClick={addCart.bind(this, userInfo, data, cart, setCart)}
              >
                delete
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};
