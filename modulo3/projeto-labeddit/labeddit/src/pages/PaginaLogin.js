import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForms";
import { BASE_URL } from "../constants/urls";
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 600px;
  height: 550px;
  color: black;
  border-radius: 10px;
`;

 const InputsAndButtons = styled.div`
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
`;

const Logo = styled.img`
  position: relative;
  width: 600px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const LogInButton = styled.button`
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 40px;
  background-color: #fe3e17;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  border: solid black 1px;
  border-radius: 20px;
  align-items: center;
`;



const P = styled.p`
  text-align: center;
  width: 100%;
  padding-top: 10px;
  padding-right: 100px;
`;

export default function PaginaLogin() {
  const navigate = useNavigate();
  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const url = `${BASE_URL}/users/login`;
  const body = form;

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    onSubmitLogin();
  };

  const onSubmitLogin = () => {
    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Bem-vindo(a)!");
        clearFields();
        navigate("/feed");
      })
      .catch((error) => {
        alert("Ocorreu um erro! Tente novamente!");
        console.log(error.res);
      });
  };

  return (
    <MainContainer>
      <Logo src="https://cdn.discordapp.com/attachments/945446321169514517/946925543440384010/Labeddit_3.png" />
      <InputsAndButtons>
        <form onSubmit={submitForm}>
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />

          <input
            name="password"
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            pattern={"\\w{8,}"}
            title={"A senha deve conter no mínimo 8 caracteres"}
            required
          />

          <LogInButton type="submit">Entrar</LogInButton>
        </form>
        <P>
          Ainda não se cadastrou? <Link to="/cadastro">Cadastre-se agora!</Link>{" "}
        </P>
      </InputsAndButtons>
    </MainContainer>
  );
}
