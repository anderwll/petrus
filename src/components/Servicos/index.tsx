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
        <SectionDef id='services'
            data-aos="fade-up"
            data-aos-duration='800'
        >
            <Typography variant="h2">Serviços</Typography>
            <DivServicos>
                    <Grid container justifyContent='center' spacing={8}>
                        <Grid 
                            item 
                            sm={7}
                            md={6}
                            lg={5} 
                            xl={4}
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/residencial.webp" alt="NOT FOUND" />

                            <Typography variant="h4">Projetos residências</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                        <Grid 
                            item 
                            sm={7}
                            md={6}
                            lg={5} 
                            xl={4} 
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/acompanhamento.webp" alt="NOT FOUND" />

                            <Typography variant="h4">Acompanhamento de obra</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                        <Grid 
                            item 
                            sm={7}
                            md={6}
                            lg={5} 
                            xl={4} 
                            sx={{display: 'flex', 
                                flexDirection: 'column', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                                gap: 4 
                            }} 
                        >
                            <img src="./assets/image/consultoria.webp" alt="NOT FOUND" />

                            <Typography variant="h4">Consultoria online</Typography>
                          
                            <Typography variant="body1">{texto1}</Typography>
                            
                        </Grid>
                    </Grid>
                </DivServicos>
                <ButtonDefault texto='Quero fazer o meu orçamento' hRef='https://refresher.com.br/45875/briefing' target='_blank' icon={<AttachMoneyIcon/>}/>
        </SectionDef>
    );
};

export default Servicos;