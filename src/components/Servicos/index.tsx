import React, { useState } from 'react';
import { SectionDef } from '../styledDefault';
import { DivServicos } from './styled';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ButtonDefault from '../Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from './Card';

// IMGAENS
const img1 = './assets/image/residencial.webp';


const Servicos = () => {
    const [show, setShow] = useState(false);


    const showFC = () => setShow(!show);



    return (
        <SectionDef id='services'
            data-aos="fade-up"
            data-aos-duration='800'
        >
            <Typography variant="h2">Serviços</Typography>
            
                <Grid container justifyContent='center' padding={3} gap={4}>
                
                    <Card/>
   
                    <Card/>
                    
                    <Card/>

                </Grid>
           
            <ButtonDefault variant='outlined' color='inherit' texto='Faça o seu orçamento' hRef='https://refresher.com.br/45875/briefing' target='_blank' icon={<AttachMoneyIcon/>}/>
        </SectionDef>
    );
};

export default Servicos;

{/* <Grid 
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
                        
                    </Grid> */}