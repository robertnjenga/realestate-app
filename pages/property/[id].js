import { Box, Flex, Text } from '@chakra-ui/react';

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Image from 'next/image';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import MortgageCalculator from '../../components/MortgageCalculator';

const PropertyDetails = ({
  propertyDetails: {
    payload: {
      mainHouseInfo: { marketingRemarks, selectedAmenities, hotnessInfo },
    },
  },
  mortgageDetails: {
    payload: { listingPrice, mortgageRateInfo, downPaymentPercentage },
  },
}) => (
  <>
    <Flex marginBottom="5">
      <Box p="4" flex="1" width="100%">
        <Text fontSize="2xl" fontWeight="bold" marginBottom="5">
          About This Home
        </Text>
        <Text color="gray.500" fontWeight="medium">
          {marketingRemarks[0].marketingRemark}
        </Text>
      </Box>
      <Box p="4" flex="1" borderLeft="1px" borderColor="gray.100" width="100%">
        <Text fontSize="2xl" fontWeight="bold" marginBottom="5">
          Home facts
        </Text>
        <Box w="full" p="2" color="gray.500">
          <Flex justifyContent="space-between" mb="2">
            <Text>{selectedAmenities[1].header}</Text>
            <Text>{selectedAmenities[1].content}</Text>
          </Flex>
          <Flex justifyContent="space-between" mb="2">
            <Text>{selectedAmenities[2].header}</Text>
            <Text>{selectedAmenities[2].content}</Text>
          </Flex>
          <Flex justifyContent="space-between" mb="2">
            <Text>{selectedAmenities[5].header}</Text>
            <Text>{selectedAmenities[5].content}</Text>
          </Flex>
          <Flex justifyContent="space-between" mb="2">
            <Text>{selectedAmenities[6].header}</Text>
            <Text>{selectedAmenities[6].content}</Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
    <Flex>
      <MortgageCalculator
        listingPrice={listingPrice}
        mortgageRateInfo={mortgageRateInfo}
      />
    </Flex>
  </>
);
export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/get-main-info?${id}`);
  const mortgageData = await fetchApi(
    `${baseUrl}/properties/get-mortgage-calculator?${id}`
  );

  return {
    props: {
      propertyDetails: data,
      mortgageDetails: mortgageData,
    },
  };
}
