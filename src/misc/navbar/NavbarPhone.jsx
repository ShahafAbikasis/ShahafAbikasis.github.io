import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from '@chakra-ui/icons'
import { colors } from "../../themes/colors";


export default function NavbarPhone({ onClose, isOpen, logo, menu, handleItemClick, activeClass }) {




    const navigate = useNavigate();

    const navigator = useCallback((path) => {
        const timer = setTimeout(() => {
            // props.setIsOpen(false);
            navigate(`${path}`);
            onClose();
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Drawer

                returnFocusOnClose={true}
                placement="top"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent bgColor='f1f1f1' h='100%'>
                    <DrawerHeader padding="20px 0px 0px 20px">
                        <Flex
                            justifyContent="space-between"
                            align="center"
                            h="100px"
                        >
                            <Flex bgColor='f1f1f1' justifyContent='space-between' alignItems="center" w='100%'>
                                <Image
                                    h='100px' w='100px'
                                    src={logo}
                                />
                                <CloseIcon onClick={onClose} h='2rem' w='5rem' className="exit" />


                            </Flex>

                            <Flex

                                justifyContent="space-between"
                                align="center"
                            >
                                <Flex
                                    w="14.14px"
                                    color="white"
                                >

                                </Flex>
                            </Flex>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody padding="0px">
                        <Flex
                            marginTop='20px'
                            flexDir="column-reverse"
                            h={["540px", "795px", null, null]}
                            w="100%"
                            justifyContent='center'
                            alignItems='center'
                            gap='8rem'
                        >
                            {menu.map((item, i) =>
                            (
                                <Flex cursor="pointer" paddingX="11px">
                                    <Heading className={activeClass === i ? "activeNav-phone" : "nav-phone"}
                                        WebkitTransform="color 0.2s"
                                        _hover={{
                                            transition: '0.2s',
                                            color: `${colors.activeNav}`,
                                        }}
                                        fontSize="20px"
                                        as="h5"
                                        key={item.id} onClick={() => handleItemClick(i, item.route)} >
                                        <Link _hover={{ textDecor: 'none' }} textDecor='none' href={item.link}>
                                            {item.title}
                                        </Link>
                                    </Heading>
                                </Flex>
                            ))}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );


}