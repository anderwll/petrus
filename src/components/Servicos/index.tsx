import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivServicos } from './styled';
import Typography from '@mui/material/Typography'
import ButtonDefault from '../Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from './Card';
import { texto1, texto2, texto3 } from './text';

const Servicos = () => {
    return (
        <SectionDef id='services'>
            <Typography variant="h2" data-aos="fade-down" data-aos-duration="1000">Serviços</Typography>
                <DivServicos data-aos="zoom-out" data-aos-duration="1500">
                    <Card bgImg='./assets/gallery/cozinha.webp' title='Projeto Residencial' text={texto1}/>
                    <Card bgImg='./assets/gallery/salao.webp' title='Projeto Comercial' text={texto2}/>
                    <Card bgImg='./assets/gallery/home-office.webp' title='Consultoria' text={texto3}/>
                </DivServicos>
            <ButtonDefault texto='Faça o seu orçamento' hRef='https://refresher.com.br/45875/briefing' target='_blank' icon={<AttachMoneyIcon/>}/>
        </SectionDef>
    );
};

export default Servicos;

