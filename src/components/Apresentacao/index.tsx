import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Typography from '@mui/material/Typography'
import { Carousel } from 'react-bootstrap';
import { DivCarrousel } from './styled';

import { dados } from './apresentacao';


const Carrousel = () => {
    return (
        <DivCarrousel>
            <Carousel fade nextIcon={false} prevIcon={false}>
                {dados.map((item, index) => {
                    return (
                        <Carousel.Item key={index} interval={800}>
                            <img src={item.imgSrc} alt="Images" style={{width: '100%'}} />
                            <Carousel.Caption>
                                <Typography variant="h2" color="initial">A PARTIR DAQUI, SEU SONHO SE TORNARÁ PALPÁVEL!</Typography>
                                <Typography variant="h4" color="initial">SEJA BEM VINDO A NOSSA CASA.</Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}   
            </Carousel>
        </DivCarrousel> 
    );
};

export default Carrousel;

