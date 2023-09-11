import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../../misc/navbar";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";
import Footer from "../../misc/Footer";
import { Storage } from '../../data/Storage'
import { Kitchens } from '../../data/Kitchens'
import { Carpentry } from '../../data/Carpentry'
import { All } from '../../data/All'
import ImageMap from "./ImagesMap";

export default function ImageCollection() {
    const params = useParams()
    const [selectedImg, setSelectedImgs] = useState([])
    const [zoom, setZoom] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const openCardView = (item, i) => {
        console.log(item, 'item')
        setZoom(item.image)
        onOpen()
    };


    console.log(params.id, 'All')
    useEffect(() => {
        if (params.id == 'Storage  Solutions') {
            console.log('Storage  Solutions')
            setSelectedImgs(Storage)
        }
        else if (params.id == 'Handcrafted Kitchens') {
            console.log('Handcrafted Kitchens ')
            setSelectedImgs(Kitchens)
        }
        else if (params.id == 'General Carpentry') {
            console.log('General Carpentry')
            setSelectedImgs(Carpentry)
        } else if (params.id == 'All Images') {
            setSelectedImgs(All)

        }
        else return
    }, [selectedImg])



    return (
        <Flex flexDir='column'>
            <Flex paddingBottom={['40px', '20px', '20px', '20px']} bgColor='#201a16'>
                <Navbar />
            </Flex>

            <Flex padding='0 20px 0 20px' marginY='5rem'>
                <Box w='100%' justifyContent='center' paddingX={['50px', '20px', '50px', '50px']} display='grid' gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]} gridGap='70px'>
                    <ImageMap openCardView={openCardView} images={selectedImg} />
                </Box>
                <ImageModal onClose={onClose} isOpen={isOpen} img={zoom} />

            </Flex>
            <Footer />
        </Flex >
    )
}




// https://drive.google.com/drive/folders/1twktSFj5wD-7Zjt6qWiND6M8VMTr5Gby?usp=sharing
