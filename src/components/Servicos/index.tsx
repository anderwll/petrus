import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivServicos, DivTextS } from './styled';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {texto1} from './text'
import ButtonDefault from '../Button';



const Servicos = () => {
    return (
        <SectionDef bgColor='#9a9aa5' id='servicos'>
            <Typography 
                variant="h2" 
                color="initial" 
                data-aos="fade-up"
                data-aos-duration='800'
            >
                Serviços
            </Typography>
            <DivServicos>
                    <Grid container justifyContent='center' spacing={2}>
                        {/* SERVICO 1 */}
                        <Grid 
                            item 
                            md={4} 
                            sx={{textAlign: 'center'}} 
                            data-aos="fade-right"
                            data-aos-duration='1000'
                        >
                            <img src="./assets/image/img2.jpg" alt="NOT FOUND" />
                            <Typography variant="h4" color="initial">Projetos residenciais</Typography>
                            <DivTextS>
                                <Typography variant="body1" color="initial">{texto1}</Typography>
                            </DivTextS>
                        </Grid>

                        {/* SERVICO 2 */}
                        <Grid 
                            item 
                            md={4} 
                            sx={{textAlign: 'center'}}
                            data-aos="fade-up"
                            data-aos-duration='1000'
                        >
                            <img src="./assets/image/img5.jpg" alt="NOT FOUND" />
                            <Typography variant="h4" color="initial">Projetos interiores</Typography>
                            <DivTextS>
                                <Typography variant="body1" color="initial">{texto1}</Typography>
                            </DivTextS>
                        </Grid>
                        
                        {/* SERVICO 3 */}
                        <Grid 
                            item 
                            md={4} 
                            sx={{textAlign: 'center'}}
                            data-aos="fade-left"
                            data-aos-duration='1000'
                        >
                            <img src="./assets/image/img3.jpg" alt="NOT FOUND" />
                            <Typography variant="h4" color="initial">Análise projeto</Typography>
                            <DivTextS>
                                <Typography variant="body1" color="initial">{texto1}</Typography>
                            </DivTextS>
                        </Grid>
                    </Grid>
                </DivServicos>
                <ButtonDefault variant='contained' hRef='#' texto='Quero fazer o meu orçamento'/>
        </SectionDef>
    );
};

export default Servicos;