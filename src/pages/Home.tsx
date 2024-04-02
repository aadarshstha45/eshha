import { Box, Container, Text } from "@chakra-ui/react";
import HomeImage from "../assets/images/home.png";
import { Footer } from "../components/Footer";
import { AboutComponent } from "../components/HomeComponents/AboutComponent";
import { OurLocation } from "../components/HomeComponents/OurLocation";
import { OurTeam } from "../components/HomeComponents/OurTeam";
import { UpcomingProject } from "../components/HomeComponents/UpcomingProject";
import { NavBar } from "../components/NavBar";
export const Home = () => {
  return (
    <Container maxW={"100vw"} overflowX={"hidden"} p={0}>
      <NavBar />
      <Box
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="573px"
        bgImage={`linear-gradient(92.43deg, rgba(17, 66, 107, 0.18) -2.86%, rgba(17, 66, 107, 0.62) 43.07%, rgba(161, 49, 57, 0.18) 98.17%, rgba(17, 66, 107, 0.18) 98.17%), url(${HomeImage}) `}
      >
        <Text
          fontSize={"40px"}
          lineHeight={"40px"}
          fontWeight={700}
          textColor={"white"}
          top={263}
          left={103}
          pos={"absolute"}
        >
          Safest Logistics Soluton with Integrity
        </Text>
      </Box>
      <AboutComponent />
      <UpcomingProject />
      <OurTeam />
      <OurLocation />
      <Footer />
    </Container>
  );
};
