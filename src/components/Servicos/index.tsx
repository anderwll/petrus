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
        <SectionDef id='services'
            data-aos="fade-up"
            data-aos-duration='800'
        >
            <Typography variant="h2">Serviços</Typography>
                <DivServicos>
                    <Card bgImg='./assets/gallery/img2.png' title='Projeto Residencial' text={texto1}/>
                    <Card bgImg='./assets/gallery/img18.png' title='Projeto Comercial' text={texto2}/>
                    <Card bgImg='./assets/gallery/img22.png' title='Consultoria' text={texto3}/>
                </DivServicos>
            <ButtonDefault texto='Faça o seu orçamento' hRef='https://refresher.com.br/45875/briefing' target='_blank' icon={<AttachMoneyIcon/>}/>
        </SectionDef>
    );
};

export default Servicos;

