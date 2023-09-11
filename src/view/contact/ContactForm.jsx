import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "../../misc/Footer";
import FormList from "./FormList";
import Map from "./Map";

export default function ContactForm() {


    return (
        <Flex w='100%' marginTop='13rem' flexDir='column'>
            <Flex paddingBottom='50px' align='center' justifyContent='center' w='100%' flexDir='column'>
                <Flex padding='0 17px 17px' w='70%'>
                    <Heading fontWeight={300} whiteSpace='pre-wrap' as='h1' fontSize='36px'>
                        .אם תרצו ללמוד עוד על השירותים והפתרונות המוצעים אז זה המקום לעשות זאת
                    </Heading>
                </Flex>
                <Flex padding='17px' fontSize='16px' w='60%'>
                    <Text>
                        או למלא את הטופס למטה או להתקשר לטלפון 050-864-8073. אם כבר החלטתם שאתם רוצים לפגוש אותנו פנים אל פנים אז למה שלא תקבעו תור עכשיו. זה קל לביצוע וללא כל התחייבויות

                    </Text>
                </Flex>

            </Flex>
            <Flex justifyContent='center' w='100%' paddingBottom='50px'>
                <Divider w='70%' />

            </Flex>
            <FormList />
            <Flex justifyContent='center' w='100%' paddingBottom='50px'>
                <Divider w='70%' />

            </Flex>
            <Map />
            <Footer />
        </Flex>
    )
}