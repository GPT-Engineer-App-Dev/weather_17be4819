import React from "react";
import { Box, VStack, HStack, Text, Image, Center, Heading, SimpleGrid, Icon } from "@chakra-ui/react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "react-icons/wi";

const weatherData = [
  { day: "Today", icon: WiDaySunny, temp: "73°" },
  { day: "Tue", icon: WiCloudy, temp: "68°" },
  { day: "Wed", icon: WiRain, temp: "65°" },
  { day: "Thu", icon: WiSnow, temp: "30°" },
  { day: "Fri", icon: WiDaySunny, temp: "70°" },
  { day: "Sat", icon: WiRain, temp: "64°" },
  { day: "Sun", icon: WiCloudy, temp: "67°" },
];

const WeatherIcon = ({ icon, size }) => {
  return <Icon as={icon} w={size} h={size} />;
};

const Index = () => {
  return (
    <Box bg="blue.300" minH="100vh" p={5}>
      <VStack spacing={8}>
        <Heading color="white" size="xl">
          San Francisco
        </Heading>
        <Center>
          <WeatherIcon icon={WiDaySunny} size={16} />
        </Center>
        <Text fontSize="6xl" fontWeight="bold" color="white">
          73°
        </Text>
        <Text fontSize="2xl" color="white">
          Sunny
        </Text>
        <SimpleGrid columns={4} spacing={10} w="full">
          {weatherData.map((data, index) => (
            <VStack key={index} spacing={4}>
              <Text fontSize="md" fontWeight="bold" color="white">
                {data.day}
              </Text>
              <WeatherIcon icon={data.icon} size={8} />
              <Text fontSize="2xl" fontWeight="bold" color="white">
                {data.temp}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
