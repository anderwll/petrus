import React from 'react';
import { SectionDef } from '../styledDefault';
import { DivServicos } from './styled';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {texto1} from './text'
import ButtonDefault from '../Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Servicos = () => {
    return (
        <SectionDef id='servicos'
            data-aos="fade-up"
            data-aos-duration='800'
        >
            <Typography variant="h2">Serviços</Typography>
            <DivServicos>
                    <Grid container justifyContent='center' spacing={8}>
                        <Grid 
                            item 
                            md={3} 
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/img2.jpg" alt="NOT FOUND" />

                            <Typography variant="h3">Projetos residenciais</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                        <Grid 
                            item 
                            md={3} 
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/img2.jpg" alt="NOT FOUND" />

                            <Typography variant="h3">Projetos residenciais</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                        <Grid 
                            item 
                            md={3} 
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/img2.jpg" alt="NOT FOUND" />

                            <Typography variant="h3">Projetos residenciais</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                    </Grid>
                </DivServicos>
                <ButtonDefault hRef='#' texto='Quero fazer o meu orçamento' icon={<AttachMoneyIcon/>}/>
        </SectionDef>
    );
};

export default Servicos;