import {
  Container,
  Divider,
  Flex,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { footerEmail, footerLinks, footerLocation } from "../data/footerItems";

export const Footer = () => {
  return (
    <Container maxW={"90vw"} py={10}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }}
        spacing={10}
        justifyContent={"center"}
      >
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Image w={"289px"} h={"62px"} src={Logo} alt="Logo" />
            <Text
              fontWeight={500}
              fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
              lineHeight={"31.25px"}
              py={2}
              w={"227.95px"}
            >
              Follow on social media
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "25px" }}
              fontWeight={700}
              lineHeight={"50px"}
              py={2}
            >
              Links
            </Text>
            {footerLinks.map(({ id, title, path }) => (
              <Link
                textDecor={"none"}
                _hover={{ textDecor: "none" }}
                as={NavLink}
                to={path}
                key={id}
                textColor={"#827A7A"}
                fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
                fontWeight={500}
                lineHeight={"25px"}
                py={2}
              >
                {title}
              </Link>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "25px" }}
              fontWeight={700}
              lineHeight={"50px"}
              py={2}
            >
              Location
            </Text>
            {footerLocation.map(({ id, title }) => (
              <Text
                key={id}
                fontWeight={450}
                fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
                lineHeight={"30px"}
                textColor={"#827A7A"}
              >
                {title}
              </Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "25px" }}
              fontWeight={700}
              lineHeight={"50px"}
              py={2}
            >
              Email
            </Text>
            {footerEmail.map(({ id, email }) => (
              <Link
                key={id}
                fontWeight={450}
                fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
                lineHeight={"30px"}
                textColor={"#827A7A"}
                href={`mailto:${email}`}
                _hover={{ textDecor: "none" }}
              >
                {email}
              </Link>
            ))}
          </Flex>
        </GridItem>
      </SimpleGrid>
      <Divider border={"1px solid"} colorScheme="#6A6B6C" my={4} />
      <Text textAlign={"center"}>Copyright 2020@ all right</Text>
    </Container>
  );
};
