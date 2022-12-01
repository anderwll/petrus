import React from 'react';
import Button from '@mui/material/Button';
import { DivButtonDefault } from './styled';

interface ButtonDefaultProps {
    icon?: React.ReactNode,
    texto: string,
    hRef: string
}


const ButtonDefault: React.FC<ButtonDefaultProps> = ({icon, texto, hRef}) => {
    return (
        <DivButtonDefault>
            <Button variant='contained' endIcon={icon} href={hRef}> 
                {texto} 
            </Button>
        </DivButtonDefault>
    );
};

export default ButtonDefault;