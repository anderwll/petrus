import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivContatos, DivSociais, Links } from './styled';
import Typography from '@mui/material/Typography'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { KeyboardDoubleArrowUp } from '@mui/icons-material';

const Contatos = () => {
    return (
        <SectionDef bgImg='./assets/image/img8.webp' id='contacts'>
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
                    <Typography variant="h4">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                    <Typography variant="body1">petrusarquitetura@gmail.com</Typography>
                    <Typography variant="body1">Rua Candelária, 256, bloco01, Bento Gonçalves, RS</Typography>
                    <Links href='#'><KeyboardDoubleArrowUp/> Voltar ao topo <KeyboardDoubleArrowUp/></Links>
                  </Grid>
                </Grid>
           </DivContatos> 
        </SectionDef>
    );
};

export default Contatos;