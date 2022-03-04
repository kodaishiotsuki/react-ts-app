import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { useAuth } from 'hooks/useAuth'
import { ChangeEvent, memo, useState, VFC } from 'react'

export const Login: VFC = memo(() => {
  const { login ,loading } = useAuth(); //カスタムフック
  const [userId, setUserId] = useState("");

  //Inputタグの型定義イベント（基本同じ!）
  const onChangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  //onClick(useAuthから取得したlogin(引数はuserId))
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          MatchHub
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={15}>
          <Input placeholder="ユーザーID" value={userId} onChange={ onChangeUserId}/>
          {/* ログインボタン */}
          <PrimaryButton
            onClick={onClickLogin}
            loading={loading}
            disabled={userId === ""}
          >ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
