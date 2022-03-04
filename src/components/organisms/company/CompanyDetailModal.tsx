import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack,  } from '@chakra-ui/react'
import { memo,  VFC } from 'react'


//type
type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyDetailModal: VFC<Props> = memo((props) => {

  const {isOpen,onClose} = props
  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>募集企業の詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>企業名</FormLabel>
                <Input value="株式会社hoge" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>詳細</FormLabel>
                <Input value="hogehogehoge" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="aaa@com" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="000-000-000" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>住所</FormLabel>
                <Input value="福岡県福岡市" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>募集業種</FormLabel>
                <Input value="SE" isReadOnly/>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
})
