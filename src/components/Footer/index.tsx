import React from 'react';
import { DivFooter } from './styled';
import Typography from '@mui/material/Typography'

const Footer = () => {
    return (
        <DivFooter>
            <Typography 
                variant="body1" 
                color="#fff"
            >
                &copy; 2022. Criado por Anderson Wilmsen.
            </Typography>
        </DivFooter>
    );
};

export default Footer;