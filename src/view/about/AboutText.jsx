import { Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import TestimonialComponent from "../../components/TestimonialComponent";
import Footer from "../../misc/Footer";
import { colors } from "../../themes/colors";

export default function AboutText() {

    return (
        <Flex flexDir='column'>
            <Flex marginTop={['0px', '0px', '0px', '50px']} padding={['80px 32px', '96px 32px', '96px 32px', '96px 32px']} align='center' justifyContent='center' textAlign='center' w='100%' >
                <Flex flexDir='column' w='80%'>
                    <Heading fontSize={['20px', '25px', '32px', '32px']} letterSpacing='4px' fontWeight={[500, 400, 400, 400]} as='h1' marginBottom='30px'>
                        חי ויוצר ברמת הגולן בה גדלתי וממנה ספגתי את אהבתי לטבע.
                        הסדנה שלי ממוקמת במושב רמות משקיפה על הנוף המתחלף של הכנרת והרי הגולן מהם אני שואב השראה.
                    </Heading>
                    <Flex w='100%' justifyContent='center'>
                        <Flex maxW='700px' marginBottom='50px' flexDir='column' gap='2rem'>
                            <Text fontSize={['20px', '16px', '16px', '16px']} color={colors.blackText}>
                                תמיד התעסקתי בהמון תחומים וחיפשתי משהו שירכז את כולם.

                                היום בסדנה אני קם למציאות בה אני משלב את כל הטכניקות והידע שרכשתי לאורך השנים.

                                אני שואב את ההשראה שלי מהטבע ואוהב להתעסק עם חומרים טבעיים.

                            </Text>
                            <Text fontSize={['20px', '16px', '16px', '16px']} color={colors.blackText}>
                                את העבודה המשותפת שלנו נתחיל בלשמוע את הרעיונות שלכם לעיצוב הבית או כל דבר אחר, לפתח אותם ולהביא רעיונות משלי להוריד את זה על דף ולהמשיך לפתח את זה תוך כדי העבודה בסדנה.
                            </Text>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" marginY='30px' />
                    <TestimonialComponent recomendation="!בנאדם זהב עם ידי זהב, מומלץ" person="Idov Yarden" />

                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )

}