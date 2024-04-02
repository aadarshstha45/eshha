import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import { navItems } from "../data/navItems";
export const NavBar = () => {
  const [isLessThan970] = useMediaQuery("(max-width: 970px)");
  const [isLessThan330] = useMediaQuery("(max-width: 330px)");
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <Container maxW={isLessThan970 ? "container.xl" : "90vw"} pos={"relative"}>
      <Flex
        justify={isLessThan330 ? "end" : "space-between"}
        align={"center"}
        p={4}
        gap={1}
        flexWrap={isLessThan330 ? "wrap" : "nowrap"}
      >
        <Image
          objectFit={"contain"}
          src={Logo}
          alt="Logo"
          w={isLessThan970 ? "200px" : "289px"}
          h={"62px"}
        />
        <IconButton
          display={isLessThan970 ? "block" : "none"}
          aria-label="menu"
          bg={"transparent"}
          fontSize={"30px"}
          onClick={() => setShowNavMenu(!showNavMenu)}
          _hover={{ bg: "transparent" }}
          icon={<HamburgerIcon />}
        />
        <HStack
          display={isLessThan970 ? "none" : "flex"}
          spacing={4}
          flexWrap={"wrap"}
        >
          {navItems.map(({ id, title, to }) => (
            <Link
              // fontSize={{ base: "14px", sm: "16px", md: "18px" }}
              key={id}
              to={to}
              smooth={true}
              duration={1000}
            >
              <Text
                cursor={"pointer"}
                fontSize={{ base: "14px", sm: "16px", md: "18px" }}
              >
                {title}
              </Text>
            </Link>
          ))}
        </HStack>
      </Flex>
      {showNavMenu && (
        <Flex
          pos={"fixed"}
          zIndex={5}
          bg={"#699DCC"}
          w={"100vw"}
          left={0}
          top={0}
          h={"100vh"}
          justify={"center"}
          align={"center"}
          flexDir={"column"}
          textColor={"white"}
          gap={5}
        >
          <IconButton
            top={7}
            right={12}
            pos={"absolute"}
            aria-label="menu"
            bg={"transparent"}
            fontSize={"30px"}
            onClick={() => setShowNavMenu(!showNavMenu)}
            _hover={{ bg: "transparent" }}
            textColor={"white"}
            icon={<HamburgerIcon />}
          />
          {navItems.map(({ id, title, to }) => (
            <Link key={id} to={to} smooth={true} duration={1000}>
              <Text cursor={"pointer"} fontSize={"24px"}>
                {title}
              </Text>
            </Link>
          ))}
        </Flex>
      )}
    </Container>
  );
};
