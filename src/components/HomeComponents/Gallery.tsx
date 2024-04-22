import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Fullscreen,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import { galleryData } from "../../data/galleryData";
import { useGalleryStore } from "../../utils/store";

interface LightboxImage {
  src: string;
}

export const Gallery = () => {
  const { displayCount, incrementDisplayCount, decrementDisplayCount } =
    useGalleryStore();
  const [open, setOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage[]>([]);

  const handleImageClick = (id: number) => {
    // Find the clicked image based on its ID
    const clickedImage = galleryData.find((item) => item.id === id)!;
    // Filter out the clicked image from the achievement data
    const otherImages = galleryData.filter((item) => item.id !== id);
    // Create Lightbox images array with clicked image first, followed by other images
    const images = [
      { src: clickedImage.image },
      ...otherImages.map(({ image }) => ({ src: image })),
    ];
    setLightboxImage(images);
    setOpen(true);
  };
  return (
    <Container maxW={"container.xl"}>
      <Text
        fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
        fontWeight={700}
        lineHeight={"46.88px"}
        py={2}
      >
        Gallery
      </Text>
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 4 }}
        gap={2}
        justifyItems={"center"}
        py={5}
      >
        {galleryData?.slice(0, displayCount).map(({ id, image }) => (
          <Box
            pos={"relative"}
            key={"id"}
            h={{ base: "150px", sm: "200px", md: "250px" }}
            w={{ base: "150px", sm: "200px", md: "250px" }}
          >
            <Image
              borderRadius={5}
              border={"1px"}
              borderColor={"gray.400"}
              key={id}
              src={image}
              objectFit={"fill"}
              h={"full"}
              w={"full"}
              alt={`gallery-${id}`}
              onClick={() => handleImageClick(id)}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Stack align={"center"}>
        {displayCount < galleryData.length && (
          <Button
            size={"sm"}
            onClick={incrementDisplayCount}
            colorScheme={"teal"}
          >
            Load More
          </Button>
        )}
        {displayCount > galleryData.length && (
          <Button
            size={"sm"}
            onClick={decrementDisplayCount}
            colorScheme={"teal"}
          >
            Load Less
          </Button>
        )}
      </Stack>
      {open && (
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
          plugins={[Zoom, Slideshow, Fullscreen, Thumbnails]}
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
