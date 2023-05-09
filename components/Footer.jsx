import { Box } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      Real Estate Project | {date}
    </Box>
  );
};

export default Footer;
