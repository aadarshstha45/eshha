import {
  Box,
  Container,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AboutImage from "../../assets/images/about.png";

export const AboutComponent = () => {
  return (
    <Box bg={"#E4F0FF"} my={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={16}>
          <GridItem colSpan={1}>
            <Image src={AboutImage} alt="About" />
          </GridItem>
          <GridItem colSpan={1}>
            <Text py={2} fontSize="2xl" fontWeight={700}>
              About Us
            </Text>
            <Box
              py={2}
              height={"8px"}
              width={"198px"}
              bg={
                "linear-gradient(90.03deg, #11426B 0.03%, #11426B 44.81%, rgba(17, 66, 107, 0) 93.48%)"
              }
            />

            <Text lineHeight={"33px"} align={"justify"} fontWeight={500} py={2}>
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
    </Box>
  );
};
