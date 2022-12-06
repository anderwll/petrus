import React from 'react';
import Button from '@mui/material/Button';
import { DivButtonDefault } from './styled';

type variantType = 'text' | 'contained' | 'outlined';
type colorType =  'inherit' | 'info';

interface ButtonDefaultProps {
    variant: variantType,
    color: colorType,
    icon?: React.ReactNode,
    texto: string,
    hRef: string,
    target?: string, 
    none?: boolean
}


const ButtonDefault: React.FC<ButtonDefaultProps> = ({variant, color, icon, texto, hRef, target, none}) => {
    return (
        <DivButtonDefault display={none}>
            <Button variant={variant} color={color} endIcon={icon} href={hRef} target={target}> 
                {texto} 
            </Button>
        </DivButtonDefault>
    );
};

export default ButtonDefault;