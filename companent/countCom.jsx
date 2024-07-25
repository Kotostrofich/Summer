import { Text } from '@chakra-ui/react';
import {useCommentHood} from '../voil'

const Comen = () => {
  const count = useCommentHood((state) => state.Com.length);

  return <Text fontWeight="bold">Comment: {count}:</Text>;
};

export { Comen };