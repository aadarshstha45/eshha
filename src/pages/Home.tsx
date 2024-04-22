import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Text,
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
    <Container maxW={"100%"} overflowX={"hidden"} p={0} pos={"relative"}>
      <NavBar />
      <Box
        bgSize="contain"
        bgRepeat="no-repeat"
        h={{ base: "220px", sm: "270px", md: "550px", lg: "685px" }}
        // bgImage={` url(${HomeImage}) `}
        pos={"relative"}
      >
        <Image
          src={HomeImage}
          alt="Home Image"
          pos={"absolute"}
          h={"100%"}
          w={"100%"}
        />
        <Box
          top={{ base: 16, md: 150, lg: 263 }}
          left={{ base: 5, md: 62, lg: 103 }}
          pos={"absolute"}
          w={{ base: "200px", md: "450px", lg: "646px" }}
        >
          <Text
            w={"auto"}
            fontSize={{ base: "18px", md: "36px", lg: "40px" }}
            fontWeight={700}
            textColor={"white"}
          >
            Safest Logistics Solution with Integrity
          </Text>
          <Flex
            as={Link}
            bg={"white"}
            w={{ base: "150px", md: "200px" }}
            h={{ base: "10px", md: "50px" }}
            my={8}
            gap={2}
            textColor={"#3A6288"}
            justify={"start"}
            align={"center"}
            borderRadius={10}
            p={5}
            _hover={{
              textDecoration: "none",
            }}
            href={"tel:9820266317"}
            overflow={"hidden"}
          >
            <PhoneIcon fontSize={{ base: "xs", sm: "sm" }} />
            <Divider orientation="vertical" h={"30px"} />
            <Flex flexDir={"column"}>
              <Text pt={2} fontWeight={600} fontSize={{ base: 9, md: 16 }}>
                +977-9851021083
              </Text>
              <Text pb={2} fontWeight={600} fontSize={{ base: 9, md: 16 }}>
                +977-9820266317
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
