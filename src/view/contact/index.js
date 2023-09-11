import { Flex, Image } from '@chakra-ui/react';
import Footer from '../../misc/Footer';
import Navbar from '../../misc/navbar';
import image from '../../assets/image bottels .jpeg';
import FirstImage from '../galleri/FirstImage';
import ContactForm from './ContactForm';
import AnimationPage from '../../components/AnimationPage';

export default function Contact() {
  return (
    <AnimationPage>
      <Flex flexDir="column" w="100%">
        <FirstImage
          title="צור איתי קשר"
          text="- שחף אבוקסיס          -"
          image={image}
        />
        <ContactForm />
      </Flex>
    </AnimationPage>
  );
}
