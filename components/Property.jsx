import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house1.jpg';

const Property = ({
  property: {
    homeData: {
      photosInfo,
      addressInfo,
      priceInfo,
      beds,
      baths,
      sqftInfo,
      brokers,
      propertyId,
      listingId,
      listingMetadata,
    },
  },
}) => (
  <Box>
    <Link
      href={`/property/propertyId=${propertyId}&listingId=${listingId.value}`}
      passHref
    >
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          {photosInfo && (
            <Image
              src={
                photosInfo.posterFrameUrl
                  ? photosInfo.posterFrameUrl
                  : DefaultImage
              }
              width={400}
              height={260}
              alt="house"
            />
          )}
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {listingMetadata.isRedfin && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                ${millify(priceInfo.amount.value)}
              </Text>
            </Flex>
            <Box>
              <Text>Listing by {brokers.listingBrokerAndAgent.brokerName}</Text>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="300px"
            color="blue.400"
          >
            {beds.value && (
              <Box
                display="flex"
                flex="0.5"
                justifyContent="space-around"
                alignItems="center"
              >
                {beds.value} <FaBed />
              </Box>
            )}{' '}
            |{' '}
            {baths?.value && (
              <Box
                display="flex"
                flex="0.5"
                justifyContent="space-around"
                alignItems="center"
              >
                {baths.value} <FaBath />
              </Box>
            )}{' '}
            |{' '}
            {sqftInfo.amount && (
              <Box
                display="flex"
                flex="0.5"
                justifyContent="space-around"
                alignItems="center"
              >
                {millify(sqftInfo.amount.value)} Sq. Ft <BsGridFill />
              </Box>
            )}
          </Flex>
          <Text fontSize="lg">
            {addressInfo.formattedStreetLine}, {addressInfo.city},{' '}
            {addressInfo.state} {addressInfo.zip}
          </Text>
        </Box>
      </Flex>
    </Link>
  </Box>
);

export default Property;
