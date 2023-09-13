import { Image, useMediaQuery } from "@chakra-ui/react"

export default function ImageMap({ images, openCardView }) {

    const [isSmallScreen] = useMediaQuery("(max-width: 639px)");

    return (
        <>
            {images?.map((item, i) => {
                console.log(item.image)
                return (
                    <>
                        <Image minH={['300px', '300px', '200px', '200px']} minW={['300px', '300px', '200px', '200px']} w='100%'
                            boxShadow='5px 5px 5px 0px rgba(0,0,0,0.3)'
                            className="zoom-image"
                            onClick={() => {
                                if (isSmallScreen) return
                                else {
                                    openCardView(item, i)

                                }
                            }}
                            value={item.image}
                            _hover={{ cursor: 'pointer', transition: '0.5s', transform: 'scale(1.1)' }}
                            key={i}
                            src={item.image}
                        />

                    </>
                )
            }
            )}
        </>
    )
}