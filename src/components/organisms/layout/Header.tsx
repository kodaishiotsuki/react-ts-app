import { memo, VFC } from 'react'
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'

import { MenuIconButton } from 'components/atoms/button/MenuIconButton'
import { MenuDrawer } from 'components/molecules/MenuDrawer'

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
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* ハンバーガーメニューの内容 */}
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  )
})
