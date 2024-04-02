import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { teamData } from "../../data/teamData";

export const OurTeam = () => {
  return (
    <Box bg={"#F2F2F2"} my={4}>
      <Container maxW={"container.xl"} py={20}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"50px"}
          py={2}
        >
          Our Team
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "22px" }}
          fontWeight={450}
          lineHeight={"33px"}
          textAlign={"justify"}
        >
          Our team consists of professionals with wide range of expertise and
          experience that caters to the wellbeing of your childerns.
        </Text>
        <Container
          maxW={{
            base: "container.xs",
            sm: "container.sm",
            lg: "container.lg",
          }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={"30px"}
            py={4}
            justifyItems={"center"}
          >
            {teamData.map(({ id, name, position, image }) => (
              <Card
                w={{ base: "full", sm: "210px", md: "250px", lg: "238px" }}
                h={"346px"}
                key={id}
                borderRadius={"20px"}
              >
                <CardHeader alignSelf={"center"}>
                  <Image
                    h={"200px"}
                    w={"200px"}
                    objectFit={"cover"}
                    src={image}
                    alt={name}
                    borderRadius={5}
                    justifyItems={"center"}
                  />
                </CardHeader>
                <CardBody textAlign={"center"}>
                  <Text fontWeight={700} fontSize={"16px"} lineHeight={"24px"}>
                    {name}
                  </Text>

                  <Text
                    fontWeight={450}
                    lineHeight={"16px"}
                    fontSize={"12px"}
                    letterSpacing={"0.2px"}
                    textColor={"#737373"}
                  >
                    {position}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Container>
    </Box>
  );
};
