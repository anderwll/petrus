import React from 'react';
import Button from '@mui/material/Button';
import { DivButtonDefault } from './styled';

type variantType = 'text' | 'outlined' | 'contained';

interface ButtonDefaultProps {
    variant: variantType,
    icon?: React.ReactNode,
    texto: string,
    hRef: string
}


const ButtonDefault: React.FC<ButtonDefaultProps> = ({variant, icon, texto, hRef}) => {
    return (
        <DivButtonDefault>
            <Button variant={variant} endIcon={icon} href={hRef}> 
                {texto} 
            </Button>
        </DivButtonDefault>
    );
};

export default ButtonDefault;