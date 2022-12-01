import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivContatos, DivSociais, Links } from './styled';
import Typography from '@mui/material/Typography'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const Contatos = () => {
    return (
        <SectionDef bgImg='./assets/image/teste.webp' id='contatos'>
            <DivContatos>
                <Typography variant="h4" color="white">PETRUS ARQUITETURA</Typography>
                <DivSociais>
                    <Links href='https://web.whatsapp.com/' target='_blank'><WhatsApp/></Links>
                    <Links href='https://www.instagram.com/petrusarquitetura/' target='_blank'><Instagram/></Links>
                    <Links href='https://www.facebook.com/' target='_blank'><Facebook/></Links>
                </DivSociais>
                <Typography variant="h6">Levando a você a sua melhor experiência de vida!</Typography>
                <Typography variant="body1">petrusarquitetura@gmail.com</Typography>
                <Typography variant="body1">Rua Fulano De Tal, 256, sala01, Bento Gonçalves, RS</Typography>
            </DivContatos>
        </SectionDef>
    );
};

export default Contatos;