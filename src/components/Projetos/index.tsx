import React, {useState} from 'react';
import { DivGallery, DivPics, DivModel} from './styled';
import { dados } from './gallery';
import { Close, Style } from '@mui/icons-material';
import { Typography } from '@mui/material'
import { SectionDef } from '../styledDefault';
import ButtonDefault from '../Button';

const Projetos = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc: string) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <SectionDef id='projetos'>
            <Typography 
                variant="h2" 
                color="initial"
                data-aos="fade-down"
                data-aos-duration='800'
            >
                Projetos
            </Typography>
           
            <DivModel imgOpen={model}>
                <img src={tempImgSrc} alt='NOT FOUND' />
                <Close onClick={() => setModel(false)}/>
            </DivModel>

            <DivGallery>
                {dados.map((item, index) => {
                    return(
                        <DivPics 
                            key={index} 
                            onClick={()=> getImg(item.imgSrc)}   
                        >
                            <img src={item.imgSrc} alt='Images' style={{width: '100%'}}/>
                        </DivPics>
                    )
                })}
            </DivGallery>
            <ButtonDefault texto='Quero descobrir o meu estilo' hRef='#' icon={<Style/>}/>
        </SectionDef>
    );
};

export default Projetos;