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
  Thumbnails,
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

  const handleImageClick = (id: number) => {
    // Find the clicked image based on its ID
    const clickedImage = achievementData.find((item) => item.id === id)!;
    // Filter out the clicked image from the achievement data
    const otherImages = achievementData.filter((item) => item.id !== id);
    // Create Lightbox images array with clicked image first, followed by other images
    const images = [
      { src: clickedImage.image },
      ...otherImages.map(({ image }) => ({ src: image })),
    ];
    setLightboxImage(images);
    setOpen(true);
  };

  return (
    <Container id="achievements" maxW={"container.xl"} py={10}>
      <Box>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"46.88px"}
        >
          Achievements
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "22px" }}
          fontWeight={700}
        >
          Chairman Message
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "22px" }}
          fontWeight={450}
          textAlign={"justify"}
        >
          I will take the opportunity to thank our staff and team work to ensure
          our organization continues to better fill the economic war to win.
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
                h={{ base: "210px", sm: "320px", md: "386px" }}
                w={"262px"}
                onClick={() => {
                  handleImageClick(id);
                }}
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
          plugins={[Zoom, Captions, Slideshow, Fullscreen, Thumbnails]}
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
