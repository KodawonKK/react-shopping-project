import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";

const LoginWrap = styled.div`
  padding: 80px 0;
  text-align: center;
  border: 3px solid red;
`;
const LoginInput = styled.input`
  margin: 0 auto;
  display: block;
  width: 40%;
  border: 1px solid #ddd;
  padding: 5px 0;
  margin-top: 5px;
  padding-bottom: 20px;
`;

const LoginFind = styled.span`
  margin: 10px 0 10px;
  border: 3px solid red;
`;

function LoginPage() {
  return (
    <div>
      <Header />
      <LoginWrap>
        <h1>로그인</h1>
        <LoginInput />
        <LoginInput />
        <LoginFind>아이디/비밀번호 찾기</LoginFind>
      </LoginWrap>
      <Footer />
    </div>
  );
}

export default LoginPage;
