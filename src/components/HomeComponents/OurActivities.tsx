import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { activityData } from "../../data/activityData";

export const OurActivities = () => {
  return (
    <Box id="activities" py={10}>
      <Container maxW={"container.xl"}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"50px"}
          py={2}
        >
          Our Activities
        </Text>
      </Container>
      <Container
        maxW={{ sm: "90vw", md: "80vw" }}
        alignItems={"center"}
        justifySelf={"center"}
        py={10}
      >
        <Swiper
          slidesPerView={4}
          speed={2000}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
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
              <Card shadow={"xl"} w={"280px"} h={"365px"}>
                <CardBody alignSelf={"center"}>
                  <Image
                    border={"1px"}
                    borderColor={"#C1B7B7"}
                    h={"264px"}
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
      </Container>
    </Box>
  );
};
