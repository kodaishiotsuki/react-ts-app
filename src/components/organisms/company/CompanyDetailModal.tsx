import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { User } from '../../../types/api/user'

//type
type Props = {
  company: User | null //useStateCompanyのsetSelectedCompanyの型
  isOpen: boolean
  onClose: () => void
}

export const CompanyDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, company } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>募集企業の詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>企業名</FormLabel>
              <Input value={company?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>詳細</FormLabel>
              <Input value={company?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={company?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={company?.phone} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>住所</FormLabel>
              <Input value={company?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>募集業種</FormLabel>
              <Input value={company?.id} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
