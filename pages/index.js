import Link from 'next/link';
import Image from 'next/image';

import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" marginBottom="8">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" marginBottom="8">
        {title1}
        <br />
        {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        marginBottom="8"
      >
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForSaleByOwner }) {

  return (
    <Box>
      <Banner
        purpose="BUY A HOME"
        title1="Agent listed Homes"
        desc1="Explore Homes, Condos, Multi-family"
        desc2="and more"
        buttonText="Explore"
        linkName="/search?purpose=for-rent"
        imageUrl="https://ssl.cdn-redfin.com/system_files/media/802945_JPG/item_5.jpg"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property={property} key={property.homeData.propertyId}/>)}
      </Flex>
      <Banner
        purpose="BUY A HOME FROM OWNER"
        title1="For sale by owner"
        desc1="Explore Homes, Condos, Multi-family"
        desc2="and more"
        buttonText="Explore"
        linkName="/search?purpose=for-sale"
        imageUrl="https://ssl.cdn-redfin.com/system_files/media/800768_JPG/item_38.jpg"
      />
       <Flex flexWrap="wrap">
       {propertiesForSaleByOwner.map((property) => <Property property={property} key={property.homeData.propertyId}/>)}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?region_id=30749&region_type=6&uipt=1,2,3,4,7,8&status=1&sf=1,7&num_homes=6`)
  const propertyForSaleByOwner = await fetchApi(`${baseUrl}/properties/list?region_id=30749&region_type=6&uipt=1,2,3,4&status=1&sf=1,7,3&num_homes=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.homes,
      propertiesForSaleByOwner: propertyForSaleByOwner?.homes
    }
  }
}
