import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { SectionDef, DivDef } from '../styledDefault';
import { DivEquipe, DivSociais, ImgPerfil } from './styled';
import { Links } from '../Header/styled';
import { Instagram } from '@mui/icons-material';

import { desc1 } from './text';

const Equipe = () => {
    return (
        <SectionDef id='equipe'>
            <DivDef>
                <Typography 
                    variant="h2" 
                    color="initial"
                    data-aos="fade-right"
                    data-aos-duration='800'
                >
                    Equipe
                </Typography>
            </DivDef>

            <DivEquipe>
                <Grid container>
                    <Grid 
                        item 
                        lg={6} 
                        md={12} 
                        display='flex' 
                        justifyContent='center'
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <ImgPerfil src='./assets/image/perfil1.jpg' alt='Arquiteto 1'/>
                    </Grid>
                    <Grid 
                        item 
                        lg={6} 
                        md={12} 
                        padding={4}
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">Arquiteto Nome</Typography>
                        <Typography variant="h5" color="initial">Arquiteto & Sócio</Typography>
                        <Typography variant="body1" color="initial">{desc1}</Typography>
                        <DivSociais>
                            <Links href='https://www.instagram.com/' target='_blank'><Instagram/></Links>
                        </DivSociais>
                    </Grid>
                </Grid>
                <Grid container marginTop={10} flexDirection='row-reverse'>
                  <Grid 
                        item 
                        lg={6} 
                        md={12} 
                        display='flex' 
                        justifyContent='center'
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >  
                        <ImgPerfil src='./assets/image/perfil2.jpg' alt='Arquiteto 1'/>
                    </Grid>
                    <Grid 
                        item 
                        lg={6} 
                        md={12} 
                        padding={4}
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">Arquiteto Nome</Typography>
                        <Typography variant="h5" color="initial">Arquiteto & Sócio</Typography>
                        <Typography variant="body1" color="initial">{desc1}</Typography>
                        <DivSociais>
                            <Links href='https://www.instagram.com/' target='_blank'><Instagram/></Links>
                        </DivSociais>
                    </Grid>
                </Grid>

            </DivEquipe>

        </SectionDef>
    );
};

export default Equipe;