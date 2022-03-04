import { Header } from 'components/organisms/layout/Header'
import { memo, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode //タグで囲った要素を渡すときに使う
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
})
