import { Box, Container, Text } from "@chakra-ui/react";

export const OurLocation = () => {
  return (
    <Box>
      <Container maxW={"container.xl"} py={5}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={700}
          lineHeight={"50px"}
          py={2}
        >
          Our Location
        </Text>
      </Container>
      <Box w={"100vw"} h={{ base: 180, md: 350 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.78712593305988!2d85.28557124706325!3d27.69894015072294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzU2LjUiTiA4NcKwMTcnMDguNiJF!5e0!3m2!1sen!2snp!4v1712044385132!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }} // Style object instead of inline CSS string
          allowFullScreen // AllowFullScreen is a boolean attribute, no need to assign a value
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        ></iframe>
      </Box>
    </Box>
  );
};
