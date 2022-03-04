/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import { memo, useEffect, VFC } from 'react'

import { CompanyCard } from 'components/organisms/company/CompanyCard'
import { useAllcompany } from 'hooks/useAllCompany'


export const AllCompany: VFC = memo(() => {
  const { getCompany, loading, company } = useAllcompany();
  //画面表示時に会社一覧を取得（初期マウント時はuseEffect!!）
  useEffect(() => getCompany(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
          <Wrap p={{ base: 4, md: 10 }} >
            {company.map((company) => (
            <WrapItem  key={company.id} mx="auto!important">
              <CompanyCard
                imageUrl='https://source.unsplash.com/random'
                companyName={company.username}
                companyDetail={company.name}
              />
            </WrapItem>
          ))};
        </Wrap>
      )};
    </>
  );
});
