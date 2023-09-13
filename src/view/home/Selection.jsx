import { Box, Button, Flex, Heading, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { colors } from "../../themes/colors";
import pic1 from "../../assets/10.png"
import pic2 from "../../assets/11.png"
import pic3 from "../../assets/12.png"
import { useContext } from "react";
import pageContext from "../../context/pageContext";


export default function Selection() {
    const { handleItemClick } = useContext(pageContext)
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    const images = [
        { img: pic1, header: 'פתרונות אחסון', text: 'אני מציע מגוון רחב של פתרונות אחסון כדי למקסם את החלל בביתכם', link: '/gallery/Storage%20%20Solutions/images', linkText: 'הצג גלריה', id: '029DGS' },
        { img: pic2, header: 'מטבחים בעבודת יד', text: '  מטבחים בעבודת יד, מותאמים אישית כדי להתאים לטעם ולאורח החיים שלך', link: '/gallery/Handcrafted%20Kitchens/images', linkText: 'הצג גלריה', id: '99-sS' },
        { img: pic3, header: 'נגרות כללית', text: ' כל ההיבטים של שירותי נגרות כלליים זמינים', link: '/gallery/General%20Carpentry/images', linkText: 'הצג גלריה', id: '749DGEU' },
    ]



    return (
        <Flex padding={['96px 15px', '96px 15px', '96px 32px', '96px 32px']} align='center' justifyContent='center' textAlign='center' w='100%' >
            <Flex flexDir='column' w={['100%', '100%', '80%', '80%']}>
                <Flex justifyContent='center' fontSize={['25px', '18px', '18px', '18px']} marginBottom='25px' align='center'>

                    <Heading margin='0' fontSize={['25px', '18px', '18px', '18px']} letterSpacing='4px' fontWeight={400} as='h1' >
                        שילוב של ידע רחב בנגרות עם התלקחות אומנותית</Heading>
                </Flex>
                <Flex align='center' justifyContent='center' marginBottom={['50px', '50px', '100px', '100px']} flexDir='column'>

                    <Flex border='1px solid red' gap='2rem' flexDir='column' w={['90%', '90%', '80%', '80%']}>
                        <Text lineHeight='3rem' fontSize={['20px', '16px', '16px', '16px']} color={colors.blackText}>
                            בסדנה שלי אני מעצב ויוצר מפריטי עיצוב, אהילים, ספריות, ועד עיצוב חללים משלל חומרים בהתאמה ובעיצוב אישי המדויק לחלומותיכם ולטעמכם

                        </Text>
                        <Text fontSize={['20px', '16px', '16px', '16px']} color={colors.blackText}>
                            אני מלווה את כל התהליך באופן אישי משלב הרעיון – התכנון – היצור ועד שלב ההתקנה בבית הלקוח
                        </Text>
                    </Flex>

                </Flex>
                <Box gap='2rem' display={['block', 'flex', 'flex', 'flex']} justifyContent='center' align='center'>
                    {images.map((image) =>
                        <Flex w={['90%', '70%', '33.3%', '33.3%']}>

                            <Flex marginBottom={['6rem', '0px', '0px', '0px']} padding='17px' gap='1.5rem' flexDir='column'>
                                <Image borderBottomRightRadius='20%' borderTopLeftRadius='20%' marginTop={['50px', '0px', '0px', '0px']} alt={image.header} objectPosition='50% 50%' objectFit='cover' w='100%' h='100%' className="images-home" src={image.img} />
                                <Flex justifyContent='space-between' gap={['0', '0', '1rem', '1rem']} maxH={['150px', '150px', '150px', '150px']} minH={['150px', '150px', '150px', '150px']} flexDir='column'>
                                    <Heading fontWeight={400} letterSpacing={['4px', '2px', '4px', '4px']} fontSize={['25px', '15px', '18px', '18px']} color={colors.blackText}>{image.header}</Heading>
                                    <Flex dir="rtl" justifyContent='center'>
                                        <Text w={['100%', '100%', '80%', '80%']} textAlign='center' fontWeight={300} fontSize={['20px', '16px', '16px', '16px']} color={colors.blackText}>{image.text}</Text>
                                    </Flex>
                                    {isSmallScreen ? (
                                        <Flex marginTop='4rem' w='100%' justifyContent='center'>
                                            <Button bgColor='transparent' padding='20px 0' border='1px solid' borderColor={colors.link} w='150px' fontSize='18px' onClick={() => {
                                                handleItemClick(2, image.link)
                                            }} color={colors.link} textDecor='none' _hover={{ textDecor: 'none' }} fontWeight={300}>{image.linkText}</Button>
                                        </Flex>
                                    ) : (<Link fontSize='16px' onClick={() => {
                                        handleItemClick(2, image.link)
                                    }} color={colors.link} textDecor='none' _hover={{ textDecor: 'none' }} fontWeight={300}>{image.linkText}</Link>)}
                                </Flex>

                            </Flex>
                        </Flex>
                    )}
                </Box>
            </Flex>
        </Flex>
    )
}
// minW='317px' h='317px'