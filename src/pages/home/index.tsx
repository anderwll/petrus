import React from 'react';
import About from '../../components/About';
import ButtonFloating from '../../components/ButtonFloating';
import Apresentacao from '../../components/Apresentacao';
import Contatos from '../../components/Contatos';
import Equipe from '../../components/Equipe';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projetos from '../../components/Projetos';
import Servicos from '../../components/Servicos';
import Mvv from '../../components/Mvv';

const Home = () => {
    return (
        <>
          <Header /> 
          <Apresentacao /> 
          <Projetos />
          <About />
          <Servicos />
          <Mvv />
          <Equipe />
          <Contatos />
          <ButtonFloating />
          <Footer />
        </>
    );
};

export default Home;