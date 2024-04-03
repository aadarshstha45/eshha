import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DoubleIconUp } from "../assets/achievementImages";
import HomeImage from "../assets/images/banner.png";
import { Footer } from "../components/Footer";
import { AboutComponent } from "../components/HomeComponents/AboutComponent";
import { Achievements } from "../components/HomeComponents/Achievements";
import { Gallery } from "../components/HomeComponents/Gallery";
import { OurActivities } from "../components/HomeComponents/OurActivities";
import { OurLocation } from "../components/HomeComponents/OurLocation";
import { OurTeam } from "../components/HomeComponents/OurTeam";
import { UpcomingProject } from "../components/HomeComponents/UpcomingProject";
import { NavBar } from "../components/NavBar";
export const Home = () => {
  const [isLessThan360] = useMediaQuery("(max-width: 360px)");
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container maxW={"100vw"} overflowX={"hidden"} p={0} pos={"relative"}>
      <NavBar />
      <Box
        bgSize="cover"
        bgPosition={"center"}
        bgRepeat="no-repeat"
        h={{ base: "500px", sm: "585px", md: "685px" }}
        bgImage={` url(${HomeImage}) `}
        pos={"relative"}
      >
        <Box
          top={{ base: 90, md: 263 }}
          left={{ base: 5, md: 103 }}
          pos={"absolute"}
          w={{ base: "200px", sm: "450px", md: "646px" }}
        >
          <Text
            w={"auto"}
            fontSize={{ base: "24px", sm: "30px", md: "36px", lg: "40px" }}
            lineHeight={"40px"}
            fontWeight={700}
            textColor={"white"}
          >
            Safest Logistics Solution with Integrity
          </Text>
          <Flex
            as={Link}
            bg={"white"}
            w={isLessThan360 ? "150px" : "200px"}
            h={"50px"}
            my={10}
            gap={5}
            textColor={"#3A6288"}
            justify={"center"}
            align={"center"}
            borderRadius={10}
            p={2}
            _hover={{
              textDecoration: "none",
            }}
            href={"tel:9820266317"}
            overflow={"hidden"}
          >
            <PhoneIcon fontSize={"sm"} />
            <Divider orientation="vertical" h={"30px"} />
            <Flex flexDir={"column"} py={2}>
              <Text fontWeight={600} fontSize={{ base: 12, md: 18 }}>
                9820266317
              </Text>
              <Text fontWeight={600} fontSize={{ base: 12, md: 18 }}>
                9820266317
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {!isAtTop && (
        <Box
          as={motion.div}
          animate={{
            y: ["0px", "-15px", "0px"],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          pos={"fixed"}
          bottom={5}
          right={2}
          zIndex={2}
          aria-label="scroll-to-top"
          bg={"#699DCC"}
          p={2}
          borderRadius={5}
          textColor={"white"}
          fontSize={"20px"}
          cursor={"pointer"}
          onClick={scrollToTop}
        >
          <DoubleIconUp />
        </Box>
      )}
      <AboutComponent />
      <OurActivities />
      <UpcomingProject />
      <OurTeam />
      <Gallery />
      <Achievements />
      <OurLocation />
      <Footer />
    </Container>
  );
};
