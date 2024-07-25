import {useCommentHood} from '../voil'
import { Checkbox, HStack, Text, box } from '@chakra-ui/react';
import { Comen } from '../countCom';

const Com = ({ Num, text, completed }) => {
  const toggleCom = useCommentHood((state) => state.toggleCom);

  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} onChange={() => toggleCom(Num)} />
      <Text>{Comen} {Text}</Text>
      {category && <Text color="cyan">{category}</Text>}
    </HStack>
  );
};

const ComList = () => {
    const filter = useFilter((state) => state.filter);
    const Coms = useCommentHood((state) => {state.Com});

  return (
    <box minH="300px">
      {Com.map((Com) => (
        <Com key={Com.Num} {...Com} />
      ))}
    </box>
  );
};

export { ComList };