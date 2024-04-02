import {
  Box,
  Container,
  GridItem,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image2 from "../../assets/images/image2.png";
import { projectData } from "../../data/projectData";
export const UpcomingProject = () => {
  return (
    <Box
      id="projects"
      py={10}
      bg={"#699DCC"}
      // borderRadius={{ md: "0 0 200px 200px", lg: "0 0 250px 250px" }}
    >
      <Container maxW={"container.xl"} py={5} textColor={"white"}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems={"center"}
        >
          <GridItem colSpan={1}>
            <Box>
              <Text
                fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
                fontWeight={700}
                lineHeight={"46.88px"}
                py={2}
              >
                Upcoming Project
              </Text>
              <Text
                fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "22px" }}
                fontWeight={450}
                lineHeight={"33px"}
                textAlign={"justify"}
              >
                We are introducing EV automobile Hino Poncho minivan made in
                japan for public transport. We want to start Electronic Vehcile
                after we import machinery vehicle manufactured by Hino Motors
                sales India Pvt. Bus, truck etc for Nepalese people.
              </Text>
            </Box>
            <Box mt={4}>
              <Text
                fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
                fontWeight={700}
                lineHeight={"46.88px"}
                py={2}
              >
                Why this project?
              </Text>
              <UnorderedList spacing={0}>
                {projectData.map(({ id, description }) => (
                  <ListItem
                    key={id}
                    fontSize={{
                      base: "14px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    }}
                    fontWeight={450}
                    lineHeight={"33px"}
                    py={2}
                    textAlign={"justify"}
                  >
                    {description}
                  </ListItem>
                ))}
              </UnorderedList>
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
