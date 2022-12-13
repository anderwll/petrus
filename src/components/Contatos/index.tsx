import React from 'react';

import { DivButton, DivContatos, DivSociais, Links, SectionContatos } from './styled';
import Typography from '@mui/material/Typography'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Contatos = () => {
    return (
        <SectionContatos id='contacts'>
           <DivContatos data-aos="fade-down" data-aos-duration="1500">
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
                  </Grid>
                </Grid>
           </DivContatos> 
           <DivButton>
            <Fab aria-label="add" href='#' >
                  <ArrowCircleUpIcon />
              </Fab> 
           </DivButton>
        </SectionContatos>
    );
};

export default Contatos;