import React from 'react';
import { ThemeProvider } from 'styled-components';
import deflt from './config/default';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <ThemeProvider theme={deflt}>
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
