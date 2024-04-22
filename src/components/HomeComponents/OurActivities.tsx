import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import { activityData } from "../../data/activityData";
import { useActivityStore } from "../../utils/store";

export const OurActivities = () => {
  // const [isLessThan555] = useMediaQuery("(max-width: 555px)");
  const { displayCount, incrementDisplayCount, decrementDisplayCount } =
    useActivityStore();
  return (
    <Box id="activities" py={10}>
      <Container maxW={"container.xl"}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"50px"}
          py={2}
        >
          Our Projects
        </Text>
      </Container>
      {/* <Container
        maxW={{ sm: "90vw", md: "80vw" }}
        alignItems={"center"}
        justifySelf={"center"}
        py={2}
      >
        <Swiper
          slidesPerView={4}
          speed={3000}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
              navigation: false,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 5,
              navigation: false,
            },
            897: {
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: true,
              hashNavigation: true,
            },
            1182: {
              slidesPerView: 4,
              spaceBetween: 10,
              navigation: true,
            },
          }}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Autoplay, Pagination]}
          className="swiper-container"
        >
          {activityData.map(({ id, title, description, location, image }) => (
            <SwiperSlide key={id} className="swiper-items swiper-activities">
              <Card
                shadow={"xl"}
                // w={isLessThan555 ? "200px" : "280px"}
                w={"280px"}
                // h={isLessThan555 ? "220px" : "325px"}
                h={"325px"}
                overflow={"hidden"}
              >
                <CardBody alignSelf={"center"}>
                  <Image
                    border={"1px"}
                    borderColor={"#C1B7B7"}
                    // h={isLessThan555 ? "80px" : "224px"}
                    h={"224px"}
                    // w={isLessThan555 ? "100px" : "264px"}
                    w={"264px"}
                    objectFit={"cover"}
                    src={image}
                    alt={title}
                    borderRadius={10}
                    bgColor={"#EAE8E8"}
                  />
                  <Box py={4}>
                    <Text
                      fontWeight={550}
                      fontSize={"14px"}
                      lineHeight={"14px"}
                    >
                      {title}
                    </Text>
                    <Text
                      textColor={"#667479"}
                      fontWeight={450}
                      fontSize={"12px"}
                      lineHeight={"18px"}
                    >
                      {description}
                    </Text>
                    <Text
                      fontWeight={450}
                      fontSize={"11px"}
                      lineHeight={"16px"}
                    >
                      {location}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </Container> */}
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
          {activityData
            .slice(0, displayCount)
            .map(({ id, title, description, image, location }) => (
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
                      alt={title}
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
                    {title}
                  </Text>

                  <Text
                    fontWeight={450}
                    lineHeight={"16px"}
                    fontSize={{ base: "10px", sm: "12px" }}
                    letterSpacing={"0.2px"}
                    textColor={"#737373"}
                  >
                    {description}
                  </Text>
                  <Text
                    fontWeight={700}
                    lineHeight={"16px"}
                    fontSize={{ base: "10px", sm: "12px" }}
                    letterSpacing={"0.2px"}
                    textColor={"#737373"}
                  >
                    {location}
                  </Text>
                </CardBody>
              </Card>
            ))}
        </SimpleGrid>
        <Stack align={"center"}>
          {displayCount < activityData.length && (
            <Button
              justifyItems={"center"}
              onClick={incrementDisplayCount}
              cursor={"pointer"}
              fontSize={"14px"}
              fontWeight={600}
              size={"sm"}
            >
              Load More
            </Button>
          )}
          {displayCount > activityData.length && (
            <Button
              justifyItems={"center"}
              onClick={decrementDisplayCount}
              cursor={"pointer"}
              fontSize={"14px"}
              fontWeight={600}
              size={"sm"}
            >
              Show Less
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
