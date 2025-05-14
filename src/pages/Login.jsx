import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginWrap = styled.div`
  padding: 130px 0 80px;
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
  padding: 10px 15px;
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
  width: 65%;
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
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const status = localStorage.getItem("login");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser();
    } catch (error) {
      console.error("로그인 처리 중 오류:", error);
    }
  };
  const loginUser = async () => {
    let id = userId;
    let pwd = userPwd;
    let url = `http://localhost:5000/user?id=${id}&password=${pwd}`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("서버 응답 오류");
    }

    let json = await response.json();

    if (json.length === 0) {
      setAuthenticate(false);
      alert("로그인 실패");
    } else {
      setAuthenticate(true);
      localStorage.setItem("login", true);
      navigate("/");
    }
  };
  useEffect(() => {
    console.log(status, "status1");
  }, [status]);

  return (
    <LoginWrap>
      <LoginInputWrap onSubmit={(e) => handleLogin(e)}>
        <LoginTitle>로그인</LoginTitle>
        <LoginInput placeholder="아이디" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <LoginInput placeholder="비밀번호" type="password" value={userPwd} onChange={(e) => setUserPwd(e.target.value)} />
        <LoginBtn type="submit">로그인</LoginBtn>
        <SignTxtWrap>
          <SignTxt>아이디∙비밀번호 찾기</SignTxt>
          <SignTxt>|</SignTxt>
          <SignTxt>회원가입</SignTxt>
        </SignTxtWrap>
      </LoginInputWrap>
    </LoginWrap>
  );
};

export default Login;
