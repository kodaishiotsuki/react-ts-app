import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { memo, useCallback, useEffect, VFC } from 'react'

import { CompanyCard } from 'components/organisms/company/CompanyCard'
import { useAllcompany } from 'hooks/useAllCompany'
import { CompanyDetailModal } from 'components/organisms/company/CompanyDetailModal'
import { useSelectCompany } from 'hooks/useSelectCompany'

export const AllCompany: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure() //モーダルを使用するため
  const { getCompany, loading, company } = useAllcompany()
  const { onSelectCompany, selectedCompany } = useSelectCompany()
  // console.log(selectedCompany);

  //画面表示時に会社一覧を取得（初期マウント時はuseEffect!!）
  useEffect(() => getCompany(), [])

  //companyCardを押すと詳細表示（モーダル）
  //propsとして渡していく関数は、毎回レンダリングの効率が悪い→useCallBack
  const onClickCompany = useCallback(
    (id: number) => {
      // console.log(id);
      onSelectCompany({ id, company, onOpen })
    },
    [company],
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {company.map((com) => (
            <WrapItem key={com.id} mx="auto!important">
              <CompanyCard
                id={com.id}
                onClick={onClickCompany}
                imageUrl="https://source.unsplash.com/random"
                companyName={com.username}
                companyDetail={com.name}
              />
            </WrapItem>
          ))}
          ;
        </Wrap>
      )}
      ;
      <CompanyDetailModal
        isOpen={isOpen}
        onClose={onClose}
        company={selectedCompany}
      />
    </>
  )
})
