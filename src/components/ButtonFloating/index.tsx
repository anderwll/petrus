import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { DivButtonFloating } from './styled';

const ButtonFloating = () => {
    return (
        <DivButtonFloating>
            <Fab aria-label="add" href='https://api.whatsapp.com/send?phone=5567999124692&text=Seja%20bem%20vindo!%20' target='_blank'>
                <WhatsAppIcon />
            </Fab>  
        </DivButtonFloating>
    );
};

export default ButtonFloating;