import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { SectionDef } from '../styledDefault';
import { DivEquipe, DivSociais, ImgPerfil } from './styled';
import { Links } from '../Header/styled';
import { Instagram } from '@mui/icons-material';

import { desc1 } from './text';

const Equipe = () => {
    return (
        <SectionDef id='team'>
                <Typography 
                    variant="h2" 
                    color="initial"
                    data-aos="fade-right"
                    data-aos-duration='800'
                >
                    Equipe
                </Typography>
            <DivEquipe>
                <Grid container>
                    <Grid 
                        item
                        xs={12} 
                        md={6}
                        display='flex' 
                        justifyItems='center'
                        justifyContent='center'
                        alignItems='center'
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <ImgPerfil src='./assets/image/ju.webp' alt='Arquiteto 1'/>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        lg={5} 
                        padding={4}
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">Juliana Servian</Typography>
                        <Typography variant="h5" color="initial">Arquiteta & Sócia</Typography>
                        <Typography variant="body1" color="initial">{desc1}</Typography>
                        <DivSociais>
                            <Links href='https://www.instagram.com/servianjuliana/' target='_blank'><Instagram/></Links>
                        </DivSociais>
                    </Grid>
                </Grid>
                <Grid container marginTop={8} flexDirection='row-reverse'>
                  <Grid 
                        item
                        xs={12} 
                        md={6}
                        display='flex' 
                        justifyItems='center'
                        justifyContent='center'
                        alignItems='center'
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >  
                        <ImgPerfil src='./assets/image/joao.webp' alt='Arquiteto 1'/>
                    </Grid>
                    <Grid 
                        item
                        xs={12} 
                        md={6} 
                        lg={5} 
                        padding={4}
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">João Pedro Cáceres Lenis</Typography>
                        <Typography variant="h5" color="initial">Arquiteto & Sócio</Typography>
                        <Typography variant="body1" color="initial">{desc1}</Typography>
                        <DivSociais>
                            <Links href='https://www.instagram.com/ojoaopedro_arq/' target='_blank'><Instagram/></Links>
                        </DivSociais>
                    </Grid>
                </Grid>

            </DivEquipe>

        </SectionDef>
    );
};

export default Equipe;