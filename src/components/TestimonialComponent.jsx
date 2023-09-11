import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { VscQuote } from "react-icons/vsc";

export default function TestimonialComponent({ recomendation = '', person = '' }) {


    return (

        <Flex padding={['32px 10px 0', '32px 32px 0', '32px 32px 0', '32px 32px 0']} justifyContent='center' align='center' flexDir='column' >
            <Flex flexDir='column'>
                <Flex justifyContent='center' textAlign='center' fontSize={['50px', '80px', '80px', '80px']} opacity='0.5' color='rgba(179,9,9,.99)'>
                    "
                </Flex>
                <Flex w='100%' justifyContent='center'>
                    <Heading w='100%' as='h2' color='rgba(179,9,9,.99)' fontSize={['18px', '25px', '25px', '25px']} fontWeight={300}>
                        {recomendation}
                    </Heading>
                </Flex>
            </Flex>
            <Flex w='100%' justifyContent='center'>
                <Text padding={['32px 10px 0', '32px 32px 0', '32px 32px 0', '32px 32px 0']} opacity='0.5' color='rgba(179,9,9,.99)' fontSize={['18px', '25px', '25px', '25px']} fontWeight={300}>- {person}</Text>
            </Flex>


            <Divider marginTop='5rem' />
        </Flex>



    )
}

