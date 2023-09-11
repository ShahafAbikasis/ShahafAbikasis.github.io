import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
zimport { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../slide.css'



export default function SlideThree({ handleStepChange, handlePrevStep }) {




    return (
        <Flex w="100%">
            <Flex w='100%' zIndex={1} class="demo-wrap">

                <Image
                    class="demo-bg fade-in3 image"
                    w="100%"
                    h="-webkit-fit-content"
                    alt="creations"
                    src={image}
                />
                {/* <Flex > */}


                <Flex className='content' zIndex={2} h={['300px', '500px', '500px', '700px']} w="100%" justifyContent="center">
                    <Flex
                        align="center"
                        paddingX="20px"
                        justifyContent="space-between"
                        w="100%"
                        color="#fff"
                    >
                        <Flex onClick={handlePrevStep}
                            cursor="pointer"
                            _active={{ transform: 'scale(0.95)' }}
                            _hover={{ transition: '0.2s', transform: 'scale(1.3)' }}
                        >
                            <IoIosArrowBack />
                        </Flex>
                        <Flex>
                            <Flex maxW='620px' gap='3rem' flexDir='column'>
                                <Heading as='h2' fontWeight={300} fontSize='25px' letterSpacing={2}>SHAHAF ABUKASIS</Heading>
                                <Heading maxW='620px' w='700px' as='h1' fontWeight={300} fontSize='70px' letterSpacing={2}>
                                    דת החלההח והוא והוא תיבת והוא והוא תיבת ותשובו
                                </Heading>
                            </Flex>
                        </Flex>
                        <Flex onClick={handleStepChange}
                            _active={{ transform: 'scale(0.95)' }}
                            _hover={{ transition: '0.2s', transform: 'scale(1.3)' }}
                            cursor="pointer"
                        >
                            <IoIosArrowForward />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    )
}