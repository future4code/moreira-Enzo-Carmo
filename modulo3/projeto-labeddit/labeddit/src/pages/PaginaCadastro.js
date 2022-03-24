import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForms";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";

export const MainContainerCadastro = styled.div`
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

export const InputsAndButtonsCadastro = styled.div`
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const LogoCadastro = styled.img`
  position: relative;
  width: 300px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const LogInButtonCadastro = styled.button`
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 40px;
  background-color: #fe3e17;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const InputGeralCadastro = styled.input`
  margin-bottom: 20px;
  width: 430px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #fe3e17;
  padding-right: 10px;
  padding-left: 10px;
`;

export const PCadastro = styled.p`
  text-align: center;
  width: 100%;
  padding-top: 10px;
  padding-right: 100px;
`;

export default function PaginaCadastro() {
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitForm = ((e) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    onSubmitSignUp();
  });

  const onSubmitSignUp = () => {
    const url = `${BASE_URL}/users/signup`;
    const body = form;

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Você se cadastrou com sucesso!");
        cleanFields();
        navigate("/feed");
      })
      .catch((error) => {
        alert("Ocorreu um erro! Tente novamente!");
        console.log(error.res.data);
      });

    return (
      <MainContainerCadastro>
        <LogoCadastro src="https://cdn.discordapp.com/attachments/945446321169514517/946925543440384010/Labeddit_3.png" />
        <InputsAndButtonsCadastro>
          <form onSubmit={submitForm}>
            <input
              name="username"
              placeholder="Nome de Usuário"
              type="text"
              value={form.username}
              onChange={onChange}
              required
            />
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
              title={"Sua senha deve ter no mínimo 8 caracteres"}
              required
            />
            <LogInButtonCadastro type="submit">Cadastre-se</LogInButtonCadastro>
          </form>
          <PCadastro>
            Já está cadastrado? <Link to="/">Login</Link>{" "}
          </PCadastro>
        </InputsAndButtonsCadastro>
      </MainContainerCadastro>
    );
  };
}
