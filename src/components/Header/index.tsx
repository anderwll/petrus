import React, {useState} from 'react';
import { DivLinks, DivHeader, DivSociais, DivMenuIcon, Links } from './styled';

// --- ICONS
import { Instagram, Facebook, WhatsApp, Menu, Close} from '@mui/icons-material';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    const showMenu = () => setMenu(!menu)
    
    let ultimaPosicao:number = 0;
    const rolar = () => {
        let atualPosicao = window.scrollY;
        if(atualPosicao > ultimaPosicao) {
            setScroll(true);
        } else {
            setScroll(false);
        }
        ultimaPosicao = atualPosicao;
    }

    document.addEventListener('scroll', rolar);
    return (
        <DivHeader scrollOn={scroll}>
            <Links href='#'>
                <img style={{width: '8rem', marginLeft: '2rem'}} src="./assets/image/logo.png" alt="PETRUS ARQUITETURA" /> 
            </Links>
            <DivLinks menuOpen={menu}>
                <Close onClick={showMenu}/>
                <Links href='#projects' onClick={showMenu}>Projetos</Links>
                <Links href='#services' onClick={showMenu}>Serviços</Links>
                <Links href='#about' onClick={showMenu}>Quem somos</Links>
                <Links href='#team' onClick={showMenu}>Equipe</Links>
                <Links href='#contacts' onClick={showMenu}>Contato</Links>
            </DivLinks>
            <DivSociais>
                <Links href='https://api.whatsapp.com/send?phone=5567999124692&text=Seja%20bem%20vindo!%20' target='_blank'><WhatsApp/></Links>
                <Links href='https://www.instagram.com/petrusarquitetura/' target='_blank'><Instagram/></Links>
                <Links href='https://www.facebook.com/petrusarquitetura' target='_blank'><Facebook/></Links>
            </DivSociais>
            <DivMenuIcon menuOpen={menu}>
                <Menu onClick={showMenu}/>
            </DivMenuIcon>
        </DivHeader>
    );
};

export default Header;