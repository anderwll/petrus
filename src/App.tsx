import React from 'react';
import { ThemeProvider } from 'styled-components';
import deflt from './config/default';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className='body'>
      <ThemeProvider theme={deflt}>
        <AppRoutes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
