import React from 'react';

import { DivText } from './styled';
import Typography from '@mui/material/Typography'
import { texto1, texto2, texto3 } from './text';
import { SectionDef } from '../styledDefault';



const Mvv = () => {
    return (
        <SectionDef id='mission' bgImg='./assets/apresentacao/img1.png'>
            <DivText 
                data-aos="fade-left"
                data-aos-duration='1000'
            >
                <Typography variant="h2" color="initial">MVV - MISSÃO VISÃO E VALORES</Typography>
                <Typography variant="h4" color="initial">Missão - </Typography>
                <Typography variant="body2" color="initial">{texto1}</Typography>
                <Typography variant="h4" color="initial">Visão - </Typography>
                <Typography variant="body2" color="initial">{texto2}</Typography>
                <Typography variant="h4" color="initial">Valores - </Typography>
                <Typography variant="body2" color="initial">{texto3}</Typography>
            </DivText>
        </SectionDef>
    );
};

export default Mvv;