import React from 'react';
import { useStore } from './store'; 
import { Box, Heading, Text, Flex, Button, Image } from '@chakra-ui/react';

const ReviewsPage = () => {
  const { reviews, addReview } = useStore();

  const handleAddReview = () => {
    addReview({
      name: 'New User',
      rating: 5,
      text: 'This is a great review!',
    });
  };

  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={6}>
        Customer Reviews
      </Heading>

      {reviews.length === 0 ? (
        <Text>No reviews yet.</Text>
      ) : (
        <Flex flexDirection="column" gap={6}>
          {reviews.map((review, index) => (
            <Box key={index} border="1px" borderColor="gray.200" rounded="md" p={4}>
              <Flex alignItems="center" gap={4}>
                <Image src="/path/to/profile-image.png" alt="Profile" rounded="full" boxSize={10} />
                <Text fontWeight="bold">{review.name}</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Rating: {review.rating}/5
              </Text>
              <Text mt={2}>{review.text}</Text>
            </Box>
          ))}
        </Flex>
      )}

      <Button mt={6} onClick={handleAddReview}>
        Add Review
      </Button>
    </Box>
  );
};

export default ReviewsPage;