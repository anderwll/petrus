import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivContatos, DivSociais, Links } from './styled';
import Typography from '@mui/material/Typography'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Grid } from '@mui/material'

const Contatos = () => {
    return (
        <SectionDef bgImg='./assets/image/img8.jpg' id='contacts'>
           <DivContatos>
                <Grid container spacing={8}>
                  <Grid item 
                    xs={12}
                    display='flex' 
                    justifyContent='end' 
                    alignItems= 'center'
                    textAlign='center'
                    flexDirection='column'
                    gap={6}
                >
                    <Typography variant="h3">PETRUS ARQUITETURA</Typography>
                    <DivSociais>
                        <Links href='https://web.whatsapp.com/' target='_blank'><WhatsApp/></Links>
                        <Links href='https://www.instagram.com/petrusarquitetura/' target='_blank'><Instagram/></Links>
                        <Links href='https://www.facebook.com/' target='_blank'><Facebook/></Links>
                    </DivSociais>
                    <Typography variant="h4">Levando a você a sua melhor experiência de vida!</Typography>
                    <Typography variant="body1">petrusarquitetura@gmail.com</Typography>
                    <Typography variant="body1">Rua Fulano De Tal, 256, sala01, Bento Gonçalves, RS</Typography>
            
                  </Grid>
                </Grid>
           </DivContatos> 
        </SectionDef>
    );
};

export default Contatos;