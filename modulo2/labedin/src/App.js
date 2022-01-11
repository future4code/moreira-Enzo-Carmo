import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './MinhasImagens/enzo.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MinhaFoto}
          nome="Enzo Pasche do Carmo"
          descricao="Oi, eu sou o Enzo, e atualmente estou estudando Web Full Stack. Sempre tive interesse em tecnologia e decidi me aventurar e aprender programação."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className='dados-pessoais'>
        <CardPequeno 
        imagem='https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg'
        descricao='Email: enzopasche@gmail.com'
        />
        
        <CardPequeno 
        imagem='https://static.vecteezy.com/ti/vetor-gratis/t2/552728-icone-de-de-localizacao-geografica-gr%C3%A1tis-vetor.jpg'
        descricao='Endereço: Estrada Otávio Valadas Quintella'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Cursando Web Full Stack"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
