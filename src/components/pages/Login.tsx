import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { memo, VFC } from 'react'

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          MatchHub
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={15}>
          <Input placeholder="ユーザーID" />
          {/* ログインボタン */}
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
