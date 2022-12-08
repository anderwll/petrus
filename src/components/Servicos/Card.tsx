import React, {useState} from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { texto1 } from './text';
import { hover } from '@testing-library/user-event/dist/hover';
import { DivServicos } from './styled';

const Card = () => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);

    const showFC = () => setShow(!show);
    const hoverFC = () => setHover(!hover);

    return (
        
            <Grid item sm={6} md={5} lg={3} xl={3}
                sx={{
                    backgroundImage: 'url(/assets/apresentacao/img1.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex', 
                    flexDirection: 'column', 
                    textAlign: 'center', 
                    justifyContent: 'center', 
                    height: '35rem',
                    cursor: 'pointer',
                    
                    
                }} onClick={showFC} onMouseOver={hoverFC}
            >
            <Paper sx={{opacity: `${show ? '1' : '0'}`, 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.432)', 
                    boxShadow: '0 8px 32px 0 rgba(3, 3, 3, 0.37)',
                    height: '35rem',
                    gap: 4,
                }} 
            >
                <Typography variant="h4">Projetos residências</Typography>
                
                <Typography variant="body1">{texto1}</Typography>
            </Paper>
            
            </Grid>
        
        
    );
};

export default Card;