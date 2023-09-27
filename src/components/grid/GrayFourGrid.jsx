import { SimpleGrid } from "@chakra-ui/react";

export const GrayFourGrid = ({ children }) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      color="gray.400"
    >
      {children}
    </SimpleGrid>
  );
};
