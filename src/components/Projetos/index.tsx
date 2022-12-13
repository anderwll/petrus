import React, {useEffect, useState} from 'react';

import { DivGallery, DivModel } from './styled';
import { dadosMais, dadosMenos } from './gallery';
import { Close, Style } from '@mui/icons-material';
import { ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import { SectionDef } from '../styledDefault';
import ButtonDefault from '../Button';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Projetos = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [coluns, setColuns] = useState<number>();
    const [projetosOpen, setProjettosOpen] = useState(false);

    const matches = useMediaQuery('(max-width:900px)');
    const matches1 = useMediaQuery('(max-width:480px)');

    useEffect(() => {

        if(matches) {
            setColuns(2)
        }

        if(matches1) {
            setColuns(1)
        }

        if(!matches && !matches1) {
            setColuns(3)
        }

        console.log('entrou')

    }, [matches, matches1])

    const getImg = (imgSrc: string) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <SectionDef id='projects'>
            <Typography variant="h2" color="initial" data-aos="fade-down" data-aos-duration="1000"> Projetos </Typography>
            <DivModel imgOpen={model}>
                <img src={tempImgSrc} alt='NOT FOUND' />
                <Close onClick={() => setModel(false)}/>
            </DivModel>
            <DivGallery>
                {projetosOpen ? (
                    <ImageList variant="masonry" cols={coluns} gap={8}>
                        {dadosMais.map((item) => (
                            <ImageListItem key={item.imgSrc}>
                                <img
                                    src={`${item.imgSrc}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt='NOT FOUND'
                                    loading="lazy"
                                />
                                <Typography variant="h4" onClick={() => getImg(item.imgSrc)}> @petrusarquitetura </Typography>
                            </ImageListItem>
                        ))}
                    </ImageList>
                ) : (
                    <ImageList variant="masonry" cols={coluns} gap={8}>
                        {dadosMenos.map((item) => (
                            <ImageListItem key={item.imgSrc}>
                                <img
                                    src={`${item.imgSrc}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt='NOT FOUND'
                                    loading="lazy"
                                />
                                <Typography variant="h4" onClick={() => getImg(item.imgSrc)}> @petrusarquitetura </Typography>
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}
            </DivGallery>
            <Typography variant="h4" color="initial" sx={{marginBottom: '3rem',borderTop: '0.2rem solid #fed406', width: '80%', textAlign: 'center', cursor: 'pointer'}} onClick={() => setProjettosOpen(!projetosOpen)}>
                {projetosOpen ? (<RemoveIcon sx={{fontSize: '2rem'}} />) : (<AddIcon sx={{fontSize: '2rem'}} />)} projetos
            </Typography>
            <ButtonDefault texto='Descubra o seu estilo' hRef='https://refresher.com.br/45875/teste-estilo' target='_blank' icon={<Style/>}/>
        </SectionDef>
    );
};

export default Projetos;