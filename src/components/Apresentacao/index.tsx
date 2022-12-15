import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical';

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
                                        <Typical 
                                            wrapper='h2'
                                            loop={Infinity}
                                            steps={[
                                                '',
                                                700,
                                                'A PARTIR DAQUI,  ',
                                                2000,
                                                '',
                                                700,
                                                'SEU SONHO...  ',
                                                2000,
                                                '',
                                                700,
                                                'SE TORNARÁ PALPÁVEL!  ',
                                                7000,
                                                '',
                                                1000,
                                            ]}
                                        />
                                    </DivTitle>
                                </DivContent>
                                <DivFooter>
                                    <Typical 
                                        wrapper='h4'
                                        loop={1}
                                        steps={[
                                            '',
                                            14000,
                                            'Bem Vindo a Casa Petrus  ',
                                        ]}
                                    />
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
