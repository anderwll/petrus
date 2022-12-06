import React from 'react';
import Button from '@mui/material/Button';
import { DivButtonDefault } from './styled';

interface ButtonDefaultProps {
    icon?: React.ReactNode,
    texto: string,
    hRef: string,
    target?: string, 
    none?: boolean
}


const ButtonDefault: React.FC<ButtonDefaultProps> = ({icon, texto, hRef, target, none}) => {
    return (
        <DivButtonDefault display={none}>
            <Button variant='contained' endIcon={icon} href={hRef} target={target}> 
                {texto} 
            </Button>
        </DivButtonDefault>
    );
};

export default ButtonDefault;