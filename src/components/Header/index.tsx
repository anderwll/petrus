import React, {useState} from 'react';
import { DivLinks, DivLogo, DivHeader, DivSociais, DivMenuIcon, Links } from './styled';

// --- ICONS
import { Instagram, Facebook, WhatsApp, Menu, Close } from '@mui/icons-material';

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
            <DivLogo>
                <Links href='#home'>
                    <img src="" alt="PETRUS ARQUITETURA" />
                </Links>
            </DivLogo>
            <DivLinks menuOpen={menu}>
                <Close onClick={showMenu}/>
                <Links href='#projetos'>Projetos</Links>
                <Links href='#servicos'>Serviços</Links>
                <Links href='#about'>Quem somos</Links>
                <Links href='#equipe'>Equipe</Links>
                <Links href='#contatos'>Contato</Links>
            </DivLinks>
            <DivSociais>
                <Links href='https://web.whatsapp.com/' target='_blank'><WhatsApp/></Links>
                <Links href='https://www.instagram.com/petrusarquitetura/' target='_blank'><Instagram/></Links>
                <Links href='https://www.facebook.com/' target='_blank'><Facebook/></Links>
            </DivSociais>
            <DivMenuIcon menuOpen={menu}>
                <Menu onClick={showMenu}/>
            </DivMenuIcon>
        </DivHeader>
    );
};

export default Header;