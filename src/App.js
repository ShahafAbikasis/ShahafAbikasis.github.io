import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import './themes/style.css';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import theme from './themes/themes';
import PageProvider from './context/pageContext';
import usePage from './hooks/usePage';
import { AnimatePresence } from 'framer-motion';
// import { RtlProvider } from './context/RTLContext';

function App() {
  const page = usePage();

  return (
    <ChakraProvider theme={theme}>
      {/* <RtlProvider> */}
      <Box textAlign="center" fontSize="xl">
        <PageProvider.Provider value={page}>
          <AnimatePresence mode="wait">
            <Routes>
              {routes.map(route => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.component}
                />
              ))}
              {/* <Route path="*" element={<Navigate to="/feed" />} /> */}
            </Routes>
          </AnimatePresence>
        </PageProvider.Provider>
      </Box>
      {/* </RtlProvider> */}
    </ChakraProvider>
  );
}

export default App;
