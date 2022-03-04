import { extendTheme } from '@chakra-ui/react'

//全体のスタイルを設定（Chakra UI）
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
})

export default theme
