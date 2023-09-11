import { Flex } from '@chakra-ui/react';
import ImageSlide from './ImageSlide';
import Selection from './Selection';
import ImageSpace from '../../components/ImageSpace';
import image from '../../assets/image 17.jpeg';
import LatestWork from './LatestWork';
import Footer from '../../misc/Footer';
import AnimationPage from '../../components/AnimationPage';

export default function Home() {
  return (
    <AnimationPage>
      <Flex flexDir="column" w="100%">
        <ImageSlide />
        <Selection />
        <ImageSpace
          minW="100%"
          maxH="480px"
          minH="480px"
          objectFit="cover"
          src={image}
          alt="bed"
          heading="עבודה אחרונה"
          text="- שחף אבוקסיס -"
        />
        <LatestWork />
        <Footer />
      </Flex>
    </AnimationPage>
  );
}
