import React from 'react';

import { DivBack, DivCard, DivContent, DivFront, SectionCard } from './styled';
import Typography from '@mui/material/Typography'

interface CardProps {
    bgImg: string,
    title: string,
    text: string
}

const Card: React.FC<CardProps> = ({ bgImg, title, text }) => {
     return (
        <SectionCard>
            <DivCard>
            
                <DivFront bgImg={bgImg}>
                    <DivContent>
                        <Typography variant="h3" color="initial">{title}</Typography>
                        <Typography variant="body2" color="initial">Clique e Saiba Mais</Typography>
                    </DivContent>
                </DivFront>

                <DivBack bgImg={bgImg}>
                    <DivContent>
                        <Typography variant="h3" color="initial">{title}</Typography>
                        <Typography variant="body1" color="initial">{text}</Typography>
                    </DivContent>
                </DivBack>
            
            </DivCard>
        </SectionCard>
    );
};

export default Card;