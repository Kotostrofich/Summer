import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {useCommentHood} from '../voil'
import { useRef } from 'react';

const newCom= () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();
  const addCom = useCommentHood((state) => state.addCom);

  const handleAddCom = () => {
    addCom(ref.current.value);
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Оставить комментарий
      </Button>

      <Modal isOpen={isOpen} placement="right" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Оставить комментарий</ModalHeader>

          <ModalBody>
            <Input
              placeholder="Type here..."
              ref={ref}
              onKeyDown={(e) => e.key === 'Enter' && handleAddCom()}
              autoFocus
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button  onClick={handleAddCom}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export {newCom};

