import { Box, Text } from "@chakra-ui/react";

export const OurLocation = () => {
  return (
    <>
      <Text fontSize={"50px"} fontWeight={700} lineHeight={"50px"} py={2}>
        Our Location
      </Text>

      <Box w={"100vw"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.816418387484!2d85.2942080761414!3d27.722953924801722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0763bf23ef81bff%3A0x96ec34c32fde92fd!2sCode%20Tara!5e0!3m2!1sen!2snp!4v1712042094183!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }} // Style object instead of inline CSS string
          allowFullScreen // AllowFullScreen is a boolean attribute, no need to assign a value
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        ></iframe>
      </Box>
    </>
  );
};
