import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import kitchen1 from "../../assets/17.png"
import kitchen3 from "../../assets/18.png"
import kitchen4 from "../../assets/kitchen4.jpeg"

export default function LatestWork() {


    return (
        <Flex alignItems='center' flexDir='column' w='100%' justifyContent='center' padding='98px 32px'>
            <Flex maxW='660px' flexDir='column'>
                <Heading paddingBottom='17px' fontWeight={400} fontSize='32px'>עבודה אחרונה
                </Heading>
                <Text lineHeight='1.6em' padding='17px' fontWeight={300} fontSize={['20px', '16px', '16px', '16px']} >החול תרבות צילום גם אחר, ויש דת בישול ליצירתה, בה שמו פסיכולוגיה ואלקטרוניקה. דת החלה והוא טכנולוגיה חפש, תיבת ותשובות אגרונומיה היא בה. עוד יסוד אתנולוגיה האנציקלופדיה על. יידיש רפואה כלל דת, כלים קסאם הגרפים אל כלל .החול תרבות צילום גם אחר, ויש דת בישול ליצירתה, בה שמו פסיכולוגיה ואלקטרוניקה. דת החלה והוא טכנולוגיה חפש, תיבת ותשובות אגרונומיה היא בה. עוד יסוד אתנולוגיה האנציקלופדיה על. יידיש רפואה כלל דת, כלים קסאם הגרפים אל כל</Text>
            </Flex>
            <Flex maxW='1020px' gap={['0.3rem', '1rem', '3.1rem', '3.1rem']} alignItems='center' justifyContent='center' padding={['30px 5px', '40px 32px', '50px 32px', '96px 32px']} margin={['0 20px', '0 50px', '0 116.5px', '0 116.5px']} flexDir='column'>
                <Box display={['block', 'flex', 'flex', 'flex']} w='auto' justifyContent='space-between'>
                    <Flex maxW='493px'>
                        <Image w='100%' objectPosition='50% 50%' padding={['17px 0', '17px', '17px', '17px']} src={kitchen1} />
                    </Flex>

                    <Flex maxW='493px'>
                        <Image w='100%' objectPosition='50% 50%' padding={['17px 0', '17px', '17px', '17px']} src={kitchen3} />

                    </Flex>
                </Box>
                <Flex>
                    <Image w='100%' objectPosition='50% 50%' src={kitchen4} />
                </Flex>
            </Flex>
            <Flex justifyContent='center' align='center' flexDir='column' marginTop='100px'>
                <Flex>
                    <Text color='rgba(179,9,9,.99)' fontSize='25px' fontWeight={300}>
                        "!בנאדם זהב עם ידי זהב, מומלץ"
                    </Text>
                </Flex>
                <Flex>
                    <Text padding='32px 32px 0' opacity='0.5' color='rgba(179,9,9,.99)' fontSize='25px' fontWeight={300}>- Idov Yarden</Text>
                </Flex>


            </Flex>
        </Flex>
    )
}