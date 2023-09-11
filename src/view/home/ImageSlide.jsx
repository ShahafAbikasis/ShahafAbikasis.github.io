import { useState, useEffect, useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import "./slide.css";
import image1 from '../../assets/image102.jpeg';
import image2 from '../../assets/image103.jpeg';
import image3 from '../../assets/15.png';
import image4 from '../../assets/image101.jpeg';
import { colors } from "../../themes/colors";
import Navbar from "../../misc/navbar";
import { useNavigate } from "react-router-dom";
import pageContext from "../../context/pageContext";




export default function ImageSlide() {
    const navigate = useNavigate()

    const { handleItemClick } = useContext(pageContext)

    const sliderData = [
        {
            image: image1,
            heading: "- שחף אבוקסיס - ",
            desc: "לשלב נגרות עם אומנות",
            isLast: 'false'
        },
        {
            image: image2,
            heading: " - שחף אבוקסיס - ",
            desc: " בשביל המשפחה שלך",
            isLast: false,
        },
        {
            image: image3,
            heading: "- שחף אבוקסיס - ",
            desc: "לזמני הארוחות שלך",
            isLast: false,

        },
        {
            image: image4,
            heading: "- שחף אבוקסיס - ",
            desc: "בשבילך",
            isLast: true,

        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <Flex id="homeId" borderRadius='0' w='100%' bgColor='black' className="slider">
            <Navbar />

            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                    <Flex borderRadius='0'
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                        {index === currentSlide && (
                            <Flex flexDir='column' borderRadius='0'>
                                <Image borderRadius='0' src={slide.image} alt="slide" className=" image" />
                                <Flex align='center' justifyContent='center' w={['78%', '90%', '94%', '95%']} flexDir='column' className="content">
                                    <Flex borderRadius='5px' padding='2rem' zIndex={2} maxW='650px' align='center' justifyContent='center' gap='3rem' flexDir='column'>
                                        <Heading color={colors.white} as='h2' fontWeight={300} fontSize='25px' letterSpacing={2}>{slide.heading}</Heading>
                                        <Heading color={colors.white} maxW='620px' w={['300px', '500px', '700px', '700px']} as='h1' fontWeight={300} fontSize={['25px', '50px', '70px', '70px']} letterSpacing={2}>{slide.desc}</Heading>
                                        {/* <Button w='fit-content' _hover={{ bgColor: '#9c9999', color: 'rgba(0, 0, 0, 0.5)' }} color='#9c9999' bgColor='transparent' border='2px solid #9c9999'>View my work</Button> */}
                                    </Flex>
                                    {index === sliderData.length - 1 && <>
                                        {/* <Divider w='60%' /> */}
                                        <Button onClick={() => {
                                            handleItemClick(2, '/gallery')
                                        }} padding={['2em 2em', '1em 1.75em', '1em 1.75em', '1em 1.75em']} borderRadius={['5px', '0', '0', '0']} marginTop='2rem' fontWeight={400} fontSize={['20px', '18px', '18px', '18px']} w='fit-content' _hover={{ bgColor: '#9c9999', color: 'rgba(0, 0, 0, 0.5)' }} color='#9c9999' bgColor='transparent' border='2px solid #9c9999'>לראות את העבודה שלי</Button>
                                    </>}

                                </Flex>
                            </Flex>

                        )}
                    </Flex>
                );
            })}
        </Flex>
    );
};