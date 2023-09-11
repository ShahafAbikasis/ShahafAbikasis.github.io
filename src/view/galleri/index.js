import { Flex, Image } from '@chakra-ui/react';
import Footer from '../../misc/Footer';
import Navbar from '../../misc/navbar';
import image from '../../assets/image104.jpeg';
import FirstImage from './FirstImage';
import ImageCarousel from './Carousel';
import AnimationPage from '../../components/AnimationPage';

export default function Galleri() {
  return (
    <AnimationPage>
      <Flex flexDir="column" w="100%">
        <FirstImage
          image={image}
          title="גלריות"
          text="- אחסון, מטבחים ונגרות כללית -"
          fontSize={['20px', '25px', '25px', '25px']}
        />
        <Flex marginTop={['3rem', '3rem', '5rem', '10rem']}>
          <ImageCarousel />
        </Flex>
        <Footer />
      </Flex>
    </AnimationPage>
  );
}
