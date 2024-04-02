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
    <Container maxW={"container.xl"} py={10}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={20}
        justifyContent={"center"}
      >
        <GridItem colSpan={1}>
          <Image w={"289px"} h={"62px"} src={Logo} alt="Logo" />
          <Text
            fontWeight={500}
            fontSize={"25px"}
            lineHeight={"31.25px"}
            py={2}
            w={"227.95px"}
          >
            Follow on social media
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"}>
            <Text
              fontSize={"30px"}
              fontWeight={700}
              lineHeight={"37.5px"}
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
                fontSize={"20px"}
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
          <Flex flexDir={"column"} gap={4}>
            <Text
              fontSize={"30px"}
              fontWeight={700}
              lineHeight={"37.5px"}
              py={2}
            >
              Location
            </Text>
            {footerLocation.map(({ id, title }) => (
              <Text
                key={id}
                fontWeight={450}
                fontSize={"20px"}
                lineHeight={"30px"}
                textColor={"#827A7A"}
              >
                {title}
              </Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} gap={4}>
            <Text
              fontSize={"30px"}
              fontWeight={700}
              lineHeight={"37.5px"}
              py={2}
            >
              Location
            </Text>
            {footerEmail.map(({ id, email }) => (
              <Link
                key={id}
                fontWeight={450}
                fontSize={"20px"}
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
