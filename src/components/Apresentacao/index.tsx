import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Typography from '@mui/material/Typography'
import { Carousel } from 'react-bootstrap';
import { DivBg, DivContent, DivFooter, DivImg, DivPa, DivTitle } from './styled';

import { dados } from './apresentacao';


const Carrousel = () => {
    return (
        <Carousel fade nextIcon={false} prevIcon={false}>
            {dados.map((item, index) => {
                return (
                    <Carousel.Item key={index} interval={4000}>
                        <DivImg bgImage={item.imgSrc}>
                            <DivBg>
                                <DivContent>
                                    <DivTitle>
                                        <Typography variant="h2" color="initial">A PARTIR DAQUI,</Typography>
                                        <Typography variant="h2" color="initial">SEU SONHO SE TORNARÁ PALPÁVEL!</Typography>
                                    </DivTitle>
                                </DivContent>
                                <DivFooter>
                                    <Typography variant="h4" color="initial">Seja Bem Vindo a Nossa Casa</Typography>
                                </DivFooter>
                                <DivPa>
                                    <Typography variant="h2" color="initial">PA</Typography>
                                </DivPa>
                            </DivBg>   
                        </DivImg>
                    </Carousel.Item>
                )
            })}   
        </Carousel>
    );
};

export default Carrousel;
