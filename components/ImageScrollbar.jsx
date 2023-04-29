import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ propertyDetails }) => (
  <ScrollMenu
    leftArrow={leftArrow}
    rightArrow={rightArrow}
    style={{ overflow: 'hidden' }}
  >
    {propertyDetails.map((item) => (
      <Box width="910px" itemId={item.id} key={item.id} overflow="hidden" p="1">
        <Image
          placeholder="blur"
          blurDataUrl={item.url}
          src={item.url}
          alt="property"
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
