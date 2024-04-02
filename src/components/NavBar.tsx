import { Container, Flex, HStack, Image, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { navItems } from "../data/navItems";

export const NavBar = () => {
  return (
    <Container maxW="container.xl">
      <Flex justify={"space-between"} align={"center"} p={4} gap={10}>
        <Image
          objectFit={"contain"}
          src={Logo}
          alt="Logo"
          w={"289px"}
          h={"62px"}
        />
        <HStack spacing={4}>
          {navItems.map(({ id, title, to }) => (
            <Link as={NavLink} key={id} to={to}>
              {title}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Container>
  );
};
