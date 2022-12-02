import React from 'react';
import { DivFooter } from './styled';
import Typography from '@mui/material/Typography'

const Footer = () => {
    return (
        <DivFooter>
            <Typography variant="body1">
                &copy; Copyright Petrus Arquitetura 2022 - Created by <a href='https://www.instagram.com/anderwll/' target='_blank' rel="noreferrer">Anderson Wilmsen</a> 🚀
            </Typography>
        </DivFooter>
    );
};

export default Footer;