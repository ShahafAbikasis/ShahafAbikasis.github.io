import { Divider, Flex } from '@chakra-ui/react';

import image from '../../assets/img19.png';
import FirstImage from '../galleri/FirstImage';
import TestimonialComponent from '../../components/TestimonialComponent';
import Footer from '../../misc/Footer';
import AnimationPage from '../../components/AnimationPage';

export default function Testimonials() {
  const recomendation = [
    {
      text: '!בנאדם זהב עם ידי זהב, מומלץ ',
      person: 'Idov Yarden',
    },
    {
      text: '!!!!!!הבחור אלוף ! מוכשר, מקצועי ממליצה באחריות!! אין דברים כמוהו',
      person: 'Sharon Harel Davidoviz',
    },
    {
      text: '!אלוף עם ידי זהב!!! ממליצה בחום',
      person: 'Yael Yarden',
    },
    {
      text: '!!!!מוכשר בטירוף!!!! יכול ליצור כל מה שתחלמו הכי מושלם שאפשר ',
      person: 'Danit Shifman',
    },
    {
      text: 'אין על שחףףףףףף !! המוכשר באדם',
      person: 'Meshi Shamir',
    },

    {
      text: '!!!!מקצוען אמיתי! ידי זהב! מלך מלך מלך! מומלץ בחום',
      person: 'Demo Krzymuski',
    },
  ];

  return (
    <AnimationPage>
      <Flex id="testimonialsId" flexDir="column" w="100%">
        <FirstImage
          image={image}
          title="מה הלקוחות שלי אומרים"
          text="- עדויות - "
        />
        <Flex
          flexDir="column"
          justifyContent="center"
          alignContent="center"
          marginTop="10rem"
        >
          {recomendation.map(recomend => (
            <>
              <TestimonialComponent
                recomendation={recomend.text}
                person={recomend.person}
              />
            </>
          ))}
        </Flex>
        <Footer />
      </Flex>
    </AnimationPage>
  );
}
