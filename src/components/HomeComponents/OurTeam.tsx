import {
  Box,
  Card,
  CardBody,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { teamData } from "../../data/teamData";

export const OurTeam = () => {
  return (
    <Box bg={"#F2F2F2"}>
      <Container maxW={"container.xl"} py={5}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          py={2}
        >
          Our Team
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "22px" }}
          fontWeight={450}
          textAlign={"justify"}
        >
          Our company teams excel in sourcing, procurement, logistics, quality
          control, sales, and customer support, guided by integrity and
          innovation.
        </Text>
        <Container
          maxW={{
            base: "container.xs",
            sm: "container.sm",
            lg: "container.lg",
          }}
        >
          <SimpleGrid
            columns={{ base: 2, lg: 4 }}
            gap={"20px"}
            py={4}
            justifyItems={"center"}
          >
            {teamData.map(({ id, name, position, image }) => (
              <Card
                w={{ base: "full", lg: "238px" }}
                h={{ base: "auto", sm: "300px" }}
                key={id}
                borderRadius={"10px"}
              >
                <CardBody alignSelf={"center"} textAlign={"center"}>
                  <Box
                    h={{ base: "120px", sm: "200px" }}
                    w={{ base: "110px", sm: "200px" }}
                    pos={"relative"}
                  >
                    <Image
                      h={{ base: "110px", sm: "200px" }}
                      w={{ base: "100%", sm: "100%" }}
                      objectFit={"fill"}
                      src={image}
                      alt={name}
                      borderRadius={5}
                      border={"1px"}
                      pos={"absolute"}
                      borderColor={"gray.300"}
                    />
                  </Box>
                  <Text
                    mt={2}
                    fontWeight={700}
                    fontSize={{ base: "12px", sm: "16px" }}
                  >
                    {name}
                  </Text>

                  <Text
                    fontWeight={450}
                    lineHeight={"16px"}
                    fontSize={{ base: "10px", sm: "12px" }}
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
