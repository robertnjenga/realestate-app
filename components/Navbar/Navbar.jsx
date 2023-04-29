import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { HiHomeModern } from 'react-icons/hi2';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="gray.100"
        paddingY="2rem"
        display={{ base: 'none', md: 'block' }}
      >
        <Box maxWidth="1280px" margin=" 0 auto">
          <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
              <Box display="flex" gap="2" alignItems="center">
                <HiHomeModern size="30" color="#00A0DC" />
                <Text fontSize="2xl" color="#00A0DC" fontWeight="bold">
                  House Finder
                </Text>
              </Box>
            </Link>
            <Flex alignItems="center" gap="12" fontWeight="medium">
              <Menu>
                <Link href="/" passHref>
                  <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                  <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem icon={<FcAbout />}>For Sale</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale-by-owner" passHref>
                  <MenuItem icon={<FiKey />}>For Sale By Owner</MenuItem>
                </Link>
              </Menu>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        color="blue.600"
        padding="2rem"
        backgroundColor="#fff"
        display={{ base: 'block', md: 'none' }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30" color="#00A0DC" />
              <Text fontSize="2xl" color="#00A0DC" fontWeight="bold">
                House Finder
              </Text>
            </Box>
          </Link>
          <Flex alignItems="center" gap="0.5rem">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FcMenu />}
                variant="outlined"
                color="red.400"
              />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                  <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem icon={<FcAbout />}>For Sale</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale-by-owner" passHref>
                  <MenuItem icon={<FiKey />}>For Sale By Owner</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
