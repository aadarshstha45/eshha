import {
  Box,
  Container,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AboutImage from "../../assets/images/about.png";
import AboutBack from "../../assets/images/aboutback.png";
export const AboutComponent = () => {
  return (
    <Box bg={"#242425"} pos={"relative"}>
      <Image
        src={AboutBack}
        alt="About"
        h={166}
        w={104}
        pos={"absolute"}
        left={0}
        top={0}
        transform={"rotate(180deg)"}
        opacity={{ base: "20%", md: "40%" }}
        zIndex={0}
      />
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={16}>
          <GridItem colSpan={1}>
            <Image
              zIndex={1}
              objectFit={"cover"}
              src={AboutImage}
              alt="About"
            />
          </GridItem>
          <GridItem colSpan={1} textColor={"white"}>
            <Text
              py={2}
              fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
              fontWeight={700}
            >
              About Us
            </Text>
            <Text lineHeight={"27px"} align={"justify"} fontWeight={500} py={2}>
              With a focus on efficiency, reliability, and innovation, we
              specialize in optimizing supply chain operations to meet your
              business needs. Backed by cutting-edge technology and a commitment
              to excellence, we ensure seamless transportation and timely
              delivery of your goods. Experience the difference with Eshha
              Implex, where logistics meets excellence.
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Image
        src={AboutBack}
        alt="About"
        h={247}
        w={155}
        pos={"absolute"}
        right={0}
        bottom={-4}
        opacity={"40%"}
      />
    </Box>
  );
};
