/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useCallback, VFC } from 'react'
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import { MenuIconButton } from 'components/atoms/button/MenuIconButton'
import { MenuDrawer } from 'components/molecules/MenuDrawer'

export const Header: VFC = memo(() => {
  //レスポンシブ対応用
  const { isOpen, onOpen, onClose } = useDisclosure()
  //ルーティングでlocation取得(useHistory)
  const history = useHistory()
  //ボタンクリック→画面遷移(useCallbackで再レンダリング防止)
  const onClickHome = useCallback(() => history.push('/home'), [])
  const onClickUserManagement = useCallback(
    () => history.push('/home/all_company'),
    [],
  )
  const onClickSetting = useCallback(() => history.push('/home/setting'), [])


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
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>募集一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>

        {/* ハンバーガーメニュー */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* ハンバーガーメニューの内容 */}
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  )
})
