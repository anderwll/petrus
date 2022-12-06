import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import { DivCarrousel } from './styled';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonDefault from '../Button';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Carrousel = () => {
    const [scroll, setScroll] = useState(false);

    let ultimaPosicao:number = 0;
    const rolar = () => {
        let atualPosicao = window.scrollY;
        if(atualPosicao > ultimaPosicao) {
            setScroll(true);
        } else {
            setScroll(false);
        }
        ultimaPosicao = atualPosicao;
    }

    document.addEventListener('scroll', rolar);

    return (
        <DivCarrousel>
            <Carousel 
                fade 
                nextIcon={false} 
                prevIcon={false}>
                <Carousel.Item interval={1500}>
                    <img src="./assets/image/img1.webp" alt="First slide" />
                    <Carousel.Caption>

                    <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src="./assets/image/img3.webp"alt="Second slide" />
                    <Carousel.Caption>

                    <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src="./assets/image/img6.webp"alt="Third slide" />
                    <Carousel.Caption>

                    <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
            
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <ButtonDefault variant='outlined' color='inherit' none={scroll} hRef='#projects' texto='Conheça nossos projetos' icon={<ArrowDownwardIcon/>}/>
        </DivCarrousel> 
    );
};

export default Carrousel;

