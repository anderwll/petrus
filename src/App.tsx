import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/global';
import tema from './config/theme';

import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className='body'>
      <ThemeProvider theme={tema}>
        <AppRoutes/>
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  );
}

export default App;
