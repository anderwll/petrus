import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { DivButtonFloating } from './styled';

const ButtonFloating = () => {
    return (
        <DivButtonFloating>
            <Fab color="success" aria-label="add" href='https://web.whatsapp.com/' target='_blank'>
                <WhatsAppIcon />
            </Fab>  
        </DivButtonFloating>
    );
};

export default ButtonFloating;