import { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/react'

//type
type Props = {
  children: ReactNode; //childrenはReactNode
  disabled?: boolean;  //非活性かどうか判断
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  //disabledとloadingはpropsが渡されないときは常にfalse
  const { children,onClick,disabled=false,loading=false } = props
  return (
    <Button
      backgroundColor="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      disabled={disabled || loading} //空白とローディング時はボタン押せない
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
