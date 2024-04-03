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
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Fullscreen,
  Slideshow,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { achievementData } from "../../data/achievementData";
import { useAchievementStore } from "../../utils/store";

interface LightboxImage {
  src: string;
}

export const Achievements = () => {
  const [open, setOpen] = useState(false);
  const { displayCount, incrementDisplayCount } = useAchievementStore();
  const [lightboxImage, setLightboxImage] = useState<LightboxImage[]>([]);

  const handleImageClick = (imageSrc: string) => {
    setOpen(true);
    setLightboxImage([{ src: imageSrc }]);
  };

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
                onClick={() => handleImageClick(image)}
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
      {open && (
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
          plugins={[Zoom, Captions, Slideshow, Fullscreen]}
          open={open}
          close={() => setOpen(false)}
          slides={lightboxImage}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
            closeOnPullUp: true,
          }}
        />
      )}
    </Container>
  );
};
