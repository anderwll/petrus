import React from 'react';

import { DivText } from './styled';
import Typography from '@mui/material/Typography'
import { texto1, texto2, texto3, texto4, texto5 } from './text';
import { SectionDef } from '../styledDefault';


const About = () => {
    return (
        <SectionDef id='about' bgImg='assets/apresentacao/img7.png'>
            <DivText 
                data-aos="fade-right"
                data-aos-duration='1000'
            >
                <Typography variant="h2" color="initial">Quem somos</Typography>
                <Typography variant="body2" color="initial">{texto1}</Typography>
                <Typography variant="body2" color="initial">{texto2}</Typography>
                <Typography variant="body2" color="initial">{texto3}</Typography>
                <Typography variant="body2" color="initial">{texto4}</Typography>
                <Typography variant="body2" color="initial">{texto5}</Typography>
            </DivText>
        </SectionDef>
    );
};

export default About;