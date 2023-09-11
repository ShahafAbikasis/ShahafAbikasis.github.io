import { Flex, Heading, Image } from '@chakra-ui/react';
import Footer from '../../misc/Footer';
import { colors } from '../../themes/colors';
import Navbar from '../../misc/navbar';

export default function FirstImage({ image = '', title = '', text = '', clName = 'demo-bg fade-in', fontSize = '"25px"' }) {
    // filter: brightness(40%);


    return (
        <Flex bgColor='#000' flexDir="column">
            <Flex zIndex={2}>
                <Navbar />
            </Flex>
            <Image
                // Filter={filter}
                class={clName}
                objectFit='cover'
                w="100%"
                position='absolute'
                h='88vh'
                minH='88vh'
                alt="creations"
                src={image}
            />
            <Flex
                zIndex={2}
                h='87vh'
                w="100%"
                justifyContent="center"
            >
                <Flex
                    align="center"
                    paddingX="20px"
                    justifyContent="space-between"
                    w="100%"
                    color="#fff"
                >
                    <Flex w="100%" alignContent="center" justifyContent="center">
                        <Flex w="100%" alignItems='center' justifyContent='center' gap="3rem" flexDir="column">
                            <Heading
                                color={colors.white}
                                // maxW="750px"
                                as="h1"
                                w={['300px', '80%', '700px', '700px']} fontWeight={300} fontSize={['35px', '50px', '70px', '70px']}


                                letterSpacing={2}
                            >
                                {title}

                            </Heading>
                            <Heading
                                color={colors.white}
                                maxW={['300px', '80%', '100%', '100%']}
                                as="h2"
                                fontWeight={300}
                                fontSize={fontSize}
                                letterSpacing={2}
                            >
                                {text}
                            </Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}