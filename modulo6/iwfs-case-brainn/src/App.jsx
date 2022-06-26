import React, { useState, useEffect } from "react";
import api from "./services/api";
import Background from "./components/Background";
import {
  Container,
  SectionLeft,
  SectionRight,
  Mensagem,
  SelectSorteios,
} from "./styled";

import logo from "./assets/logo.svg";

const App = () => {
  const [loterias, setLoterias] = useState([]);

  useEffect(() => {
    api
      .get("/loterias")
      .then((response) => {
        setLoterias(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const handleListId=(id)=>{
    console.log('Handle',id)
  }
  console.log('Handle2')
  return (
    <Container>
      <Background />
      <SectionLeft>
        <SelectSorteios>
          {loterias.map((res) => (
            <option value="" onClick={()=>{handleListId(res.id)}}>{res.nome.toUpperCase()}</option>
          ))}
        </SelectSorteios>
        <div className="logoAlign">
          <img src={logo} />
          <span>Mega-Sena</span>
        </div>

        <div className="rodapeStyle">
          <p>CONCURSO</p>
          <span>4531 - 07/04/2020</span>
        </div>
      </SectionLeft>
      <SectionRight>
        <ul className="listaNumeros">
          <li>
            <strong>16</strong>
          </li>
          <li>
            <strong>02</strong>
          </li>
          <li>
            <strong>49</strong>
          </li>
          <li>
            <strong>38</strong>
          </li>
          <li>
            <strong>60</strong>
          </li>
          <li>
            <strong>27</strong>
          </li>
        </ul>
        <Mensagem>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Mensagem>
      </SectionRight>
    </Container>
  );
};

export default App;
