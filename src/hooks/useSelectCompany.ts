import { useCallback, useState } from 'react'
import { User } from 'types/api/user'

type Props = {
  id: number
  company: Array<User> //<User>はuser.ts
  onOpen: () => void
}

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectCompany = () => {
  //選択されたcompanyの情報
  const [selectedCompany, setSelectedCompany] = useState<User | null>(null)
  //クリック時にcompanyを特定する関数
  const onSelectCompany = useCallback((props: Props) => {
    const { id, company, onOpen } = props
    const targetCompany = company.find((company) => company.id === id)
    setSelectedCompany(targetCompany!)
    onOpen()
  }, [])

  return { onSelectCompany, selectedCompany }
}
