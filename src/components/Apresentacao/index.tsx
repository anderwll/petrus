import React from 'react';
import Typography from '@mui/material/Typography'
import { DivCarrousel } from './styled';
import { Carousel } from 'react-bootstrap';

const Carrousel = () => {
    return (
            <DivCarrousel>
                <Carousel 
                    fade 
                    nextIcon={false} 
                    prevIcon={false}>
                    <Carousel.Item>
                        <img src="./assets/image/img4.webp" alt="First slide" />
                        <Carousel.Caption>

                        <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./assets/image/img1.webp"alt="Second slide" />
                        <Carousel.Caption>

                        <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./assets/image/img6.webp"alt="Third slide" />
                        <Carousel.Caption>

                        <Typography variant="h2" color="initial">Entregamos valor e experiências que constroem seus sonhos.</Typography>
                
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </DivCarrousel> 
    );
};

export default Carrousel;

