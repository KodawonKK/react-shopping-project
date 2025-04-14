import React from "react";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginWrap = styled.div`
  padding: 100px 0 80px;
  text-align: center;
`;
const LoginTitle = styled.h1`
  padding-bottom: 10px;
`;
const LoginInputWrap = styled.form`
  padding: 50px 0;
  max-width: 500px;
  margin: 0 auto 30px;
  border: 1px solid #ddd;
`;
const LoginInput = styled.input`
  margin: 5px auto;
  display: block;
  width: 60%;
  border: 1px solid #ddd;
  padding: 10px 0;
  outline: none;
`;
const LoginFind = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const LoginBtn = styled.button`
  background: #000;
  display: block;
  margin: 0 auto;
  width: 60%;
  color: #fff;
  padding: 8px 0;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
const SignTxtWrap = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignTxt = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    console.log("login user function issue");
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <LoginWrap>
      <LoginInputWrap onSubmit={(event) => loginUser(event)}>
        <LoginTitle>로그인</LoginTitle>
        <LoginInput />
        <LoginInput />
        <LoginBtn type="submit">로그인</LoginBtn>
        <SignTxtWrap>
          <SignTxt>아이디∙비밀번호 찾기</SignTxt>
          <SignTxt>|</SignTxt>
          <SignTxt>회원가입</SignTxt>
        </SignTxtWrap>
      </LoginInputWrap>
      <Footer />
    </LoginWrap>
  );
};

export default Login;
