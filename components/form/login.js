import React, { useState } from "react";
import DefaultInput from "./input";
import {useSetRecoilState} from "recoil";
import {defaultPopupOpen} from "../../atom";

const Login = () => {
  const openPopup = useSetRecoilState(defaultPopupOpen);
  const [loginData, setLoginData] = useState({ user_id: '', password: '' });

  return (
    <form className='login-form'>
      <DefaultInput
        type={'text'}
        label={'아이디'}
        value={ loginData.user_id }
        onChange={
          (e) => setLoginData({...loginData, user_id: e.target.value})
        }
      />
      <DefaultInput
        type={'password'}
        label={'비밀번호'}
        value={ loginData.password }
        onChange={
          (e) => setLoginData({...loginData, password: e.target.value})
        }
      />
      <button className="login-form-btn login">
        로그인
      </button>
      <button
        className="login-form-btn join"
        onClick={() => openPopup('join')}
      >
        회원가입
      </button>
    </form>
  )
}

export default Login;
