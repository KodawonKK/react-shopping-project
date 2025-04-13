import React from "react";
import Footer from "../components/layout/Footer";
import styled from "styled-components";

const LoginWrap = styled.div`
  text-align: center;
`;
const LoginInputWrap = styled.div`
  padding: 100px 0 80px;
`;
const LoginInput = styled.input`
  margin: 5px auto;
  display: block;
  width: 40%;
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
  width: 40%;
  color: #fff;
  padding: 8px 0;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
const SignTxt = styled.div``;

function Login() {
  return (
    <LoginWrap>
      <LoginInputWrap>
        <h1>로그인</h1>
        <LoginInput />
        <LoginInput />
        {/* <LoginFind>아이디/비밀번호 찾기</LoginFind> */}
        <LoginBtn>로그인</LoginBtn>
        <SignTxt>아직 미쏘 회원이 아니시라면 어쩌구</SignTxt>
      </LoginInputWrap>
      <Footer />
    </LoginWrap>
  );
}

export default Login;
