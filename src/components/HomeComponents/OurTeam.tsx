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
        <Text fontSize={"50px"} fontWeight={700} lineHeight={"50px"} py={2}>
          Our Team
        </Text>
        <Text
          fontSize={"22px"}
          fontWeight={450}
          lineHeight={"33px"}
          py={2}
          textAlign={"justify"}
        >
          Our team consists of professionals with wide range of expertise and
          experience that caters to the wellbeing of your childerns.
        </Text>
        <Container
          maxW={{
            base: "container.sm",
            sm: "container.md",
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
                w={{ base: "full", sm: "200px", lg: "238px" }}
                h={"346px"}
                key={id}
                borderRadius={"20px"}
              >
                <CardHeader alignSelf={"center"}>
                  <Image
                    h={"200px"}
                    w={{ base: "auto", sm: "200px" }}
                    objectFit={"cover"}
                    src={image}
                    alt={name}
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
