import {
  Box,
  Container,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image1 from "../../assets/images/image1.jpeg";
import Image2 from "../../assets/images/image2.png";
export const UpcomingProject = () => {
  return (
    <Box
      bgSize={"cover"}
      bgPosition={"center"}
      py={10}
      bgImage={`linear-gradient(rgba(235, 235, 235, 0.9), rgba(235, 235, 235, 0.9)), url(${Image1})`}
    >
      <Container maxW={"container.xl"} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <GridItem colSpan={1}>
            <Box>
              <Text
                fontSize={"40px"}
                fontWeight={700}
                lineHeight={"46.88px"}
                py={2}
              >
                Upcoming Project
              </Text>
              <Text
                fontSize={"22px"}
                fontWeight={450}
                lineHeight={"33px"}
                py={2}
                textAlign={"justify"}
              >
                We are introducing EV automobile Hino Poncho minivan made in
                japan for public transport. We want to start Electronic Vehcile
                after we import machinery vehicle manufactured by Hino Motors
                sales India Pvt. Bus, truck etc for Nepalese people.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Image src={Image2} alt="Image2" />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
