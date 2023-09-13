import "./slideStyle.css";
import { useState } from "react";
import Slider from "react-slick";
import storage from "../../assets/storage_solutions.jpeg";
import celebrating from "../../assets/15.png";
import sow from "../../assets/sow.jpeg";
import general from "../../assets/general.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import { colors } from "../../themes/colors";
import { useNavigate } from "react-router-dom";


const images = [
  { img: storage, alt: 'פתרונות אחסון', title: 'פתרונות אחסון', url: 'Storage  Solutions', id: 'dl34s' },
  { img: celebrating, alt: 'מטבחים בעבודת יד', title: 'מטבחים בעבודת יד', url: 'Handcrafted Kitchens', id: 'sdm3d' },
  { img: general, alt: 'נגרות כללית', title: 'נגרות כללית', url: 'General Carpentry', id: '063sfd' },
  { img: sow, alt: 'כל התמונות', title: 'כל התמונות', url: 'All Images', id: '063sfd' },
];

function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 890px)");


  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow-gallery next-gallery" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const navigate = useNavigate()
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-gallery prev-gallery" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      {isSmallScreen ? (<Flex marginBottom={['150px', '150px', '100px', '150px']} w='100%' alignItems='center' flexDir='column'>
        {images.map((img, idx) => (
          // <Flex boxShadow='20px 20px 50px 15px grey'>
          <Flex flexDir='column'>
            <Flex w='100%' justifyContent='center' align='center'>
              <Heading paddingY='50px' as='h2' color={colors.activeNav} fontSize="28px" paddingBottom='20px'>{img.title}</Heading>
            </Flex>
            <Flex justifyContent='center' w='100%' key={img.id}>
              <Image boxShadow='rgba(50, 50, 93, 0.25) 0px 13px 27px -5px' cursor='pointer' onClick={() => navigate(`/gallery/${img.url}/images`)} alt={img.alt} w={['300px', '500px', '350px', '500px']} borderRadius='5px' h={['280px', '500px', '350px', '500px']} objectFit='cover' src={img.img} />

              {/* (<Image alt={img.alt} minW='350px' maxW='350px' maxH='350px' minH='350px' objectFit='cover' src={img.img} />)
              } */}
            </Flex>
          </Flex>
          // </Flex>

        ))
        }
      </Flex>) : (
        <div className="App-gallery">
          <Slider {...settings}>
            {images.map((img, idx) => (
              // <Flex boxShadow='20px 20px 50px 15px grey'>
              <Flex flexDir='column'>
                <Flex justifyContent='center' align='center'>
                  <Heading as='h2' color={colors.activeNav} fontSize="28px" paddingBottom='20px'>{idx === imageIndex ? `${img.title}` : ""}</Heading>
                </Flex>
                <Flex key={img.id} className={idx === imageIndex ? "slide-gallery activeSlide-gallery" : "slide-gallery"}>
                  {idx === imageIndex ?
                    (<Image cursor='pointer' onClick={() => navigate(`/gallery/${img.url}/images`)} alt={img.alt} minW='350px' maxW='350px' maxH='350px' borderRadius='5px' minH='350px' objectFit='cover' src={img.img} />)
                    :
                    (<Image alt={img.alt} minW='350px' maxW='350px' maxH='350px' minH='350px' objectFit='cover' src={img.img} />)
                  }
                </Flex>
              </Flex>
              // </Flex>

            ))
            }
          </Slider >
        </div >
      )
      }
    </>

  );
}

export default App;