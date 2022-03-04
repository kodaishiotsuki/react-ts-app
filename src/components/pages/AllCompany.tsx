import { Wrap, WrapItem } from '@chakra-ui/react'
import { CompanyCard } from 'components/organisms/company/CompanyCard'
import { memo, VFC } from 'react'



export const AllCompany: VFC = memo(() => {
  return (
    <Wrap p={{base:4,md:10}}>
      <WrapItem>
        <CompanyCard
          imageUrl='https://source.unsplash.com/random'
          companyName='株式会社hoge'
          companyDetail='hogehogehogehoge'
        />
      </WrapItem>
    </Wrap>
  )
})
