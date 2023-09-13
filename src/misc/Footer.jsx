import { Flex, Link, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import pageContext from "../context/pageContext";


export default function Footer() {
    const navigate = useNavigate()
    const { handleItemClick } = useContext(pageContext)
    const navigation = [
        { text: 'המלצות', href: 'testimonials', id: '23s22s' },
        { text: 'על אודות', href: 'about', id: 'dsad213' },
        { text: 'גלריה', href: 'gallery', id: '090sds' },
        { text: 'בית', href: '/', id: '4321ds' },
        { text: 'איש קשר', href: 'contact', id: '3180dsa' },

    ]

    const handleNav = (i, nav) => {
        handleItemClick(i, nav)
    }

    const today = new Date()
    const year = today.getFullYear()
    const text = `Copyright © ${year}`
    return (
        <Flex w='100%' bgColor='#f0f0f0'>
            <Flex flexDir='column' w='100%'>
                <Flex gap={['5rem', '2rem', '2rem', '2rem']} w='100%' justifyContent='center' align='center' padding='32px'>
                    <Link href="https://www.instagram.com/shahaf.abukasis/" isExternal>
                        <AiOutlineInstagram size={30} />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100063639397320" isExternal>
                        <RiFacebookCircleFill size={30} />
                    </Link>
                </Flex>
                <Flex display={['grid', 'block', 'flex', 'flex']} padding={['20px', '37px', '37px', '37px']} w='100%' align='center' justifyContent='center' bgColor='#201a16'>
                    <Text fontSize={['16px', '16px', '10px', '10px']} padding='0.75em 1em' color={colors.white}>{text}</Text>
                    {navigation.map((nav, i) =>
                        <Link key={nav.id} onClick={() => handleNav(i, `${nav.href}`)} fontSize={['16px', '16px', '10px', '10px']} padding={['0.75em 0.5em', '0.75em 1em', '0.75em 1em', '0.75em 1em']} fontWeight={400} color={colors.white}>{nav.text}</Link>
                    )}


                </Flex>
            </Flex>
        </Flex>
    )
}