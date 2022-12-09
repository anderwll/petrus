import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivContatos, DivSociais, Links } from './styled';
import Typography from '@mui/material/Typography'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Grid } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Contatos = () => {
    return (
        <SectionDef bgImg='./assets/apresentacao/img3.png' id='contacts'>
           <DivContatos>
                <Grid container>
                  <Grid item 
                    xs={12}
                    display='flex' 
                    justifyContent='end' 
                    alignItems= 'center'
                    textAlign='center'
                    flexDirection='column'
                    gap={4}
                >
                    <Typography variant="h3">PETRUS ARQUITETURA</Typography>
                    <DivSociais>
                        <Links href='https://api.whatsapp.com/send?phone=5567999124692&text=Seja%20bem%20vindo!%20' target='_blank'><WhatsApp/></Links>
                        <Links href='https://www.instagram.com/petrusarquitetura/' target='_blank'><Instagram/></Links>
                        <Links href='https://www.facebook.com/petrusarquitetura' target='_blank'><Facebook/></Links>
                    </DivSociais>
                    <Typography variant="h4">A partir daqui, seu sonho se tornará palpável!</Typography>
                    <Typography variant="body1">contatopetrusarquitetura@gmail.com</Typography>
                    <Links href='#'><ArrowUpwardIcon/></Links>
                  </Grid>
                </Grid>
           </DivContatos> 
        </SectionDef>
    );
};

export default Contatos;