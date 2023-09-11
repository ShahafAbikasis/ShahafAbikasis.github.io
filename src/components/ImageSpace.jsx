import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";

export default function ImageSpace({ src = '', heading = '', text = '', ...props }) {



    return (
        <Flex bgColor='#000' flexDir='column'>
            <Image {...props} zIndex='1' filter='brightness(50%)' position='absolute' opacity='0.8' src={src} />
            <Flex gap={3} justifyContent='center' h='480' flexDir='column' zIndex={2}>
                <Heading as='h1' fontWeight={300} fontSize='70px' color={colors.white}>{heading}</Heading>
                <Text as='h2' fontWeight={300} fontSize='25px' color={colors.white}>{text}</Text>
            </Flex>
        </Flex>
    )
}
// {[, '460px', '460px', '480px', '480px']}