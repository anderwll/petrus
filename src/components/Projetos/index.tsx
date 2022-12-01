import React, {useState} from 'react';
import { DivGallery, DivPics, DivModel} from './styled';
import { dados } from './gallery';
import { Close } from '@mui/icons-material';
import { Typography } from '@mui/material'
import { DivDef, SectionDef } from '../styledDefault';

const Projetos = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc: string) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <SectionDef id='projetos'>

            <DivDef>
                <Typography 
                    variant="h2" 
                    color="initial"
                    data-aos="fade-right"
                    data-aos-duration='800'
                >
                    Projetos
                </Typography>
            </DivDef>
            
            <DivModel imgOpen={model}>
                <img src={tempImgSrc} alt='NOT FOUND'/>
                <Close onClick={() => setModel(false)}/>
            </DivModel>

            <DivGallery>
                {dados.map((item, index) => {
                    return(
                        <DivPics 
                            key={index} 
                            onClick={()=> getImg(item.imgSrc)}
                            data-aos='flip-left' 
                            data-aos-duration='800'    
                        >
                            <img src={item.imgSrc} alt='Images' style={{width: '100%'}}/>
                        </DivPics>
                    )
                })}
            </DivGallery>
            
        </SectionDef>
    );
};

export default Projetos;