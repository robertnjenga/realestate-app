import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';

import noresult from "../assets/images/noresult.svg";
import { fetchApi, baseUrl } from '../utils/fetchApi';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevSearchFilters) => !prevSearchFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4"fontWeight="bold">
       Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => <Property property={property} key={property.propertyId}/>)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
          <Image src={noresult} alt="no result"/>
          <Text fontSize="2xl" marginTop="3">No Results Found</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const region_id = query.region_id || '30749';
  const region_type = query.region_type || '6'
  const uipt = query.uipt || '1';
  const status = query.status || '9';
  const num_homes = query.num_homes || '20'
  const min_price = query.min_price || '0';
  const max_price = query.max_price || '1000000';
  const num_beds = query.num_beds || '0';
  const num_baths = query.num_baths || '0';

  const data = await fetchApi(`${baseUrl}/properties/list?region_id=${region_id}&region_type=${region_type}&status=${status}&num_homes=${num_homes}&uipt=${uipt}&min_price=${min_price}&max_price=${max_price}&num_beds=${num_beds}$num_baths=${num_baths}`)

  return {
    props: {
     properties: data?.homes
    }
  }
}
