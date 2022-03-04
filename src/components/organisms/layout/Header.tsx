import { memo, VFC } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {/* ナビゲーションバー */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/* タイトル */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            MatchHub
          </Heading>
        </Flex>

        {/* リンク（スマホサイズは非表示） */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>

        {/* ハンバーガーメニュー */}
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">会社一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})
