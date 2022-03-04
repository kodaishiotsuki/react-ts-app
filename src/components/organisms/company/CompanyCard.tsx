import { Box, Image, Stack, Text } from '@chakra-ui/react'
import { memo,  VFC } from 'react'


//type
type Props = {
  imageUrl: string;
  companyName: string;
  companyDetail: string;
  onClick: () => void;
}

export const CompanyCard: VFC<Props> = memo((props) => {

  const {imageUrl,companyName,companyDetail,onClick } = props
  return (
    <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="20px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={onClick}
        >
          <Stack textAlign="center">
            <Image
              boxSize="160px"
              src={imageUrl}
              borderRadius="full"
              alt={companyName}
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">{companyName}</Text>
            <Text fontSize="sm" color="gray">{companyDetail}</Text>
          </Stack>
        </Box>
  )
})
