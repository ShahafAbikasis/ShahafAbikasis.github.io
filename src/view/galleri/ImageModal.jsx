import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image,
    Button,
} from '@chakra-ui/react'
import { useEffect } from 'react'

export default function ImageModal({ isOpen, onClose, img }) {
    // console.log(img)
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwcNFkQqjkG8XHzwlcR3UIBeJsHsn3TT-qzbnEwrsI/dev'


    // useEffect(() => {
    //     fetch(WEB_APP_URL, {
    //         mode: 'no-cors',
    //         credentials: 'include',
    //         method: 'POST',
    //     })
    //         .then(response => response.json())
    //         .then(obj => {
    //             const list = obj.data;
    //             for (let i = 0; i < list.length; i++) {
    //                 const url_split = list[i].book_url.split('/d/');
    //                 const image_id = url_split[1].split('/view');
    //                 console.log(image_id[0]);
    //             }
    //         });
    // }, [])
    // document.write('<img src="' + 'https://drive.google.com/uc?export=view&id=' + image_id[i][0] + '">');


    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bgColor='rgb(0 0 0 / 30%)' />
                <ModalContent boxShadow='0px' bgColor='transparent' alignItems='center' display='flex' justifyContent='center' w='1000px'>

                    <ModalBody onClick={onClose} display='flex' justifyContent='center' alignItems='center' w='1000px'>
                        <Image borderRadius='3px' minH='500px' maxW='900px' maxH='600px' src={img} />
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )


}