import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/SL_0212121_40670_78-modified.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgGradient='linear(to-r, blue.500, purple.400)' w={"full"} h={"90vh"}>
      <motion.div
        style={{
          height: "70vh",
          //margin:"2px"
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        
        
      >
      <Image
        w={"full"}
        h={"60vh"}
        objectFit={"contain"}
        src={btcSrc}
        borderRadius={'full'}
        paddingTop={'80px'}
        shadow={'5px'}
        // filter={"grayscale(5)"}
      />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        color={"black"}
        mt={"-10"}
        fontWeight={"bold"}
      >
        Welcome To Crypto Tracker
      </Text> 
    </Box>
  );
};

export default Home;