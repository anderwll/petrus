import React from 'react';
import { DivText } from './styled';
import Typography from '@mui/material/Typography'
import { texto1, texto2, texto3 } from './text';
import ButtonDefault from '../Button';
import { SectionDef } from '../styledDefault';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => {
    return (
        <SectionDef id='about' bgImg='assets/image/img4.webp'>
            <DivText 
                data-aos="fade-right"
                data-aos-duration='1000'
            >
                <Typography variant="h2" color="initial">Quem somos</Typography>
                <Typography variant="body2" color="initial">{texto1}</Typography>
                <Typography variant="body2" color="initial">{texto2}</Typography>
                <Typography variant="body2" color="initial">{texto2}</Typography>
                <Typography variant="body2" color="initial">{texto3}</Typography>
                <ButtonDefault variant='text' color='info' texto='Saiba mais...' hRef='#team' icon={<ArrowDownwardIcon/>}/>
            </DivText>
        </SectionDef>
    );
};

export default About;