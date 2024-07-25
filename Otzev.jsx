import { Box, Flex, Heading, Image, Text, Link } from '@chakra-ui/react';





const HomePage = () => {
  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      backgroundImage="ground.png"
      backgroundSize="cover"
    >
      <Box
        bg="rgba(0, 0, 0, 0.5)" 
        p={8}
        rounded="md"
        textAlign="center"
      >
        <Heading as="h1" color="white" fontSize="4xl" mb={4}>
          Отзывы
        </Heading>
        <Text color="white" fontSize="xl" mb={6}>
          Оставте отзыв
          <Box>  <ReviewsPage />  </Box>
        </Text>
        <Link href='./main.htm'>
        <Button
      leftIcon={<Image src="knock.png" alt="Button Icon" />}
      colorScheme="blue"
      variant="solid"
      size="md"

    >
      Назад
    </Button></Link>
      </Box>
    </Flex>
  );
};

export default HomePage;