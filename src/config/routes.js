import About from '../view/about';
import Contact from '../view/contact';
import Galleri from '../view/galleri';
import ImageCollection from '../view/galleri/ImageCollection';
import Home from '../view/home/index';
import Testimonials from '../view/testimonials';

const routes = [
  {
    path: '/',
    component: <Home />,
    lable: 'Home',
  },
  {
    path: '/gallery',
    component: <Galleri />,
    lable: 'gallery',
  },
  {
    path: '/gallery/:id/images',
    component: <ImageCollection />,
    lable: 'gallery',
  },
  {
    path: '/contact',
    component: <Contact />,
    lable: 'contact',
  },
  {
    path: '/testimonials',
    component: <Testimonials />,
    lable: 'testimonials',
  },
  {
    path: '/about',
    component: <About />,
    lable: 'about',
  },
];

export default routes;
