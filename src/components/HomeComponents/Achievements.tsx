import {
  Box,
  Button,
  Container,
  GridItem,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { achievementData } from "../../data/achievementData";
import { useAchievementStore } from "../../utils/store";

export const Achievements = () => {
  const { displayCount, incrementDisplayCount } = useAchievementStore();
  return (
    <Container id="achievements" maxW={"container.xl"} py={20}>
      <Box>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"46.88px"}
        >
          Achievements
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          gap={2}
          justifyItems={"center"}
          py={5}
        >
          {achievementData.slice(0, displayCount).map(({ id, image }) => (
            <GridItem key={id}>
              <Image
                key={id}
                src={image}
                alt={`achievement-${id}`}
                border={"3px solid"}
                borderColor={"#C1B7B7"}
                h={{ base: "300px", sm: "320px", md: "386px" }}
                w={"262px"}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        <Stack align={"center"}>
          {displayCount < achievementData.length && (
            <Button
              justifyItems={"center"}
              onClick={incrementDisplayCount}
              cursor={"pointer"}
              _hover={{ opacity: 0.8 }}
            >
              See More
            </Button>
          )}
          {displayCount > achievementData.length && (
            <Button
              onClick={() =>
                useAchievementStore.getState().decrementDisplayCount()
              }
              cursor={"pointer"}
              _hover={{ opacity: 0.8 }}
            >
              See Less
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};
