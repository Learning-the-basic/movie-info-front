import React, {useEffect, useState} from "react";
import DefaultInput from "./input";
import {useSetRecoilState} from "recoil";
import {defaultPopup, userToken} from "../../atom";
import {ltbLogin} from "../../api/ltb";

const Login = () => {
  const setUserToken = useSetRecoilState(userToken);
  const openPopup = useSetRecoilState(defaultPopup);
  const [isDisable, setDisable] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // 로그인 버튼 활성/비활성화 처리
  useEffect(() => {
    const re = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (loginData.email.length > 0) {
      if (re.test(loginData.email)) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      setDisable(true);
    }
  }, [loginData.email])

  const isLogin = () => {
    ltbLogin(loginData).then((res) => {
      localStorage.setItem('user_token', res.accessToken);
      setUserToken(res.accessToken);
      openPopup('');
    })
  }

  return (
    <div className='login-form'>
      <DefaultInput
        type={'text'}
        label={'아이디'}
        value={ loginData.email }
        onChange={
          (e) => setLoginData({...loginData, email: e.target.value})
        }
        isValidation={isDisable}
      />
      <DefaultInput
        type={'password'}
        label={'비밀번호'}
        value={ loginData.password }
        onChange={
          (e) => setLoginData({...loginData, password: e.target.value})
        }
      />
      <button
        className={`login-form-btn login ${!isDisable ? 'disabled' : ''}`}
        disabled={!isDisable}
        onClick={() => isLogin()}
      >
        로그인
      </button>
      <button
        className="login-form-btn join"
        onClick={() => openPopup('join')}
      >
        회원가입
      </button>
    </div>
  )
}

export default Login;
