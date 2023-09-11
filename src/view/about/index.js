import { Flex } from '@chakra-ui/react';
import image from '../../assets/shahaf.jpeg';
import AnimationPage from '../../components/AnimationPage';
import FirstImage from '../galleri/FirstImage';
import AboutText from './AboutText';

export default function About() {
  return (
    <AnimationPage>
      <Flex flexDir="column" w="100%">
        <FirstImage
          filter="brightness(50%)"
          title="על אודות"
          text="- שחף אבוקסיס          -"
          image={image}
          clName="fade-in about-bg"
        />
        <AboutText />
      </Flex>
    </AnimationPage>
  );
}
