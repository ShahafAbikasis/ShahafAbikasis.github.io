import { extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.8) translateY(-5px)',
  color: 'rgba(0,0,0,0.9)',
};

const theme = extendTheme({
  styles: {
    global: {
      direction: 'ltr',
      'html, body': {
        lineHeight: 'tall',
        margin: '0px',
        padding: '0px',
      },
    },
  },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label,select:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              fontSize: '1.125rem',
              position: 'absolute',
              backgroundColor: 'transparent',

              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '40em',
    md: '80em',
    lg: '100em',
    xl: '125em',
  },
});

export default theme;
// sm: "360px",
// md: "414px",
// lg: "1366px",
// xl: "1920px",
// 2072;
//all headers 2 & 5 inside the sections will have the color light
