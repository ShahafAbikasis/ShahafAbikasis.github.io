import { Button, Flex, Heading, Image, Link, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import logoBlack from '../../assets/logo2.png';

import { colors } from '../../themes/colors';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from 'react';
import pageContext from '../../context/pageContext';
import { HamburgerIcon } from '@chakra-ui/icons'
import NavbarPhone from './NavbarPhone';


export default function Navbar() {
  const { activeClass, isAcctive, handleItemClick } = useContext(pageContext)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSmallScreen] = useMediaQuery("(max-width: 633px)");

  const menu = [
    {
      title: 'המלצות',
      route: '/testimonials',
      id: '3FDR',
    },
    {
      title: 'גלריה',
      route: '/gallery',
      id: '2DEF',
    },
    {
      title: 'על אודות',
      route: '/about',
      id: '321HA',
    },
    {
      title: 'בית',
      route: '/',
      id: '1ACD',
    },
  ];


  const pages = 'pages/'
  return (

    <Flex zIndex={2}
      w="100%"
      justifyContent="space-between"
      h="-webkit-fit-content"
      align="center"
    >
      {isSmallScreen ? (<>
        <Flex padding="20px 0px 0px 20px" h="100px" w="100px">
          <Image minH='100px' minW='100px' cursor='pointer' onClick={() => handleItemClick(0, '/')} className="fade-in-image" src={logo} />
        </Flex>
        {/* <Image minW="20px" alt="lines menu" src={HiBars3BottomRight} /> */}
        <Flex padding="20px 20px 0px 0px" >
          <HamburgerIcon onClick={() => { onOpen() }} color={colors.white} h='40px' w='40px' />
        </Flex>
        <NavbarPhone
          handleItemClick={handleItemClick} activeClass={activeClass}
          menu={menu}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          logo={logoBlack}
        />
      </>) : (<>

        <Flex padding="20px 0px 0px 20px" h="100px" w="100px">
          <Image cursor='pointer' onClick={() => handleItemClick(0, '/')} className="fade-in-image" src={logo} />
        </Flex>
        <Flex padding="20px 20px 0px 0px" align="center">
          {menu.map((item, i) =>
          (
            <Flex cursor="pointer" paddingX="11px">
              <Heading className={activeClass === i ? "activeNav" : "nav"}
                WebkitTransform="color 0.2s"
                _hover={{
                  transition: '0.2s',
                  color: `${colors.activeNav}`,
                }}
                fontSize="11px"
                as="h5"
                key={item.id} onClick={() => handleItemClick(i, item.route)} >
                <Link _hover={{ textDecor: 'none' }} textDecor='none' href={item.link}>
                  {item.title}
                </Link>
              </Heading>
            </Flex>
          ))}
          <Flex cursor="pointer">
            <Button
              onClick={() => handleItemClick(4, '/contact')}
              isActive={isAcctive}
              variant='ghost'
              border={`2px solid ${colors.white}`}
              paddingX="11px"
              _active={{ color: `${colors.activeNav}`, border: `2px solid ${colors.activeNav}` }}
              _hover={{
                transition: '0.2s',
                color: `${colors.activeNav}`,
                border: `2px solid ${colors.activeNav}`,
              }}
              color={`${colors.white}`}
              padding="0.8em 1.2em"
              fontSize="11px"
              as="h5"
              className={activeClass === 4 ? "activeNav" : "nav"}
            >
              איש קשר            </Button>
          </Flex>
        </Flex>
      </>)}

    </Flex>
  );
}
