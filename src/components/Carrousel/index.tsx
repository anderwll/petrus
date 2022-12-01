import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivCarrousel } from './styled';
import Typography from '@mui/material/Typography'

const Carrousel = () => {
    return (
        <SectionDef id='carousel' bgImg='./assets/image/img3.jpg'>

            <DivCarrousel>
                <Typography variant="body1" color="initial">Carrousel</Typography>
            </DivCarrousel>
            
        </SectionDef>
    );
};

export default Carrousel;