import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivText } from './styled';
import Typography from '@mui/material/Typography'
import ButtonDefault from '../Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Carrousel = () => {
    return (
        <SectionDef  bgImg='./assets/image/img1.jpg'>

            <DivText>
                <Typography variant="h3" color="initial">Levando a você a sua melhor experiência de vida!</Typography>
                <ButtonDefault 
                    hRef='#projects' 
                    texto='Conheça nossos projetos' 
                    icon={<ArrowDownwardIcon/>}
                />
            </DivText>
            
        </SectionDef>
    );
};

export default Carrousel;