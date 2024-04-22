import {
  Container,
  Divider,
  Flex,
  GridItem,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.png";
import { footerEmail, footerLocation } from "../data/footerItems";
import { socialData } from "../data/socialData";

export const Footer = () => {
  return (
    <Container id="footer" maxW={"container.xl"} py={5}>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        spacingX={10}
        spacingY={5}
        justifyContent={"center"}
      >
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Text
              fontSize={{ base: "14px", sm: "18px", md: "22px", lg: "25px" }}
              fontWeight={700}
              py={2}
            >
              Location
            </Text>
            {footerLocation.map(({ id, title }) => (
              <Text
                key={id}
                fontWeight={450}
                fontSize={{ base: "12px", sm: "16px", md: "18px", lg: "22px" }}
                textColor={"#827A7A"}
              >
                {title}
              </Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"}>
            <Text
              fontSize={{ base: "14px", sm: "18px", md: "22px", lg: "25px" }}
              fontWeight={700}
              py={2}
            >
              Email
            </Text>
            {footerEmail.map(({ id, email }) => (
              <Link
                key={id}
                fontWeight={450}
                fontSize={{ base: "12px", sm: "16px", md: "18px", lg: "22px" }}
                textColor={"#827A7A"}
                href={`mailto:${email}`}
                _hover={{ textDecor: "none" }}
              >
                {email}
              </Link>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Flex flexDir={"column"} align={{ base: "center", md: "start" }}>
            <Image
              w={{ base: "150px", md: "289px" }}
              h={{ base: "32px", md: "62px" }}
              src={Logo}
              alt="Logo"
            />
            <Text
              textOverflow={"ellipsis"}
              fontWeight={500}
              fontSize={{ base: "12px", sm: "18px", md: "20px", lg: "22px" }}
              py={2}
              w={{ base: "auto", sm: "227.95px" }}
            >
              Follow on social media
            </Text>
            <HStack flexWrap={"wrap"} spacing={2} justify={"center"}>
              {socialData.map(({ id, name, to, icon }) => (
                <Link
                  key={id}
                  href={to}
                  _hover={{ textDecor: "none" }}
                  target="_blank"
                >
                  <Image boxSize={{ base: 7, sm: 10 }} src={icon} alt={name} />
                </Link>
              ))}
            </HStack>
          </Flex>
        </GridItem>
      </SimpleGrid>
      <Divider border={"1px solid"} colorScheme="#6A6B6C" my={4} />
      <Flex
        fontSize={{ base: "12px", sm: "16px", md: "18px", lg: "22px" }}
        flexDir={"column"}
        align={"center"}
      >
        <Text
          fontSize={{ base: "12px", sm: "16px", md: "18px", lg: "22px" }}
          cursor={"pointer"}
          _hover={{
            textDecor: "none",
          }}
          as={Link}
          href="https://codetara.com"
          alignItems={"center"}
        >
          Designed and Developed by Code Tara
        </Text>
      </Flex>
    </Container>
  );
};
