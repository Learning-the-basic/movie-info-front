import React, {useEffect, useState} from "react";
import DefaultInput from "./input";
import {useSetRecoilState} from "recoil";
import {defaultPopup, userToken} from "../../atom";
// import GoogleLogin from "react-google-login";
import {ltbLogin} from "../../api/ltb";

const Login = () => {
  const setUserToken = useSetRecoilState(userToken);
  const openPopup = useSetRecoilState(defaultPopup);
  const [loginData, setLoginData] = useState({ user_id: '', password: '' });

  const googleSuccess = (res) => {
    console.log('success');
    console.log(res)
  }

  const googleFail = (res) => {
    console.log('fail');
    console.log(res);
  }

  const isLogin = () => {
    setUserToken('tokenTest');
    openPopup('');
    // ltbLogin(loginData).then((res) => {
    //   console.log(res);
    // })
  }

  return (
    <div className='login-form'>
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
      <button
        className="login-form-btn login"
        onClick={() => isLogin()}
      >
        로그인
      </button>
      {/*<GoogleLogin*/}
      {/*  clientId={'297155808615-ijupjhp7qho4ishis9ig7ftifuucvr7e.apps.googleusercontent.com'}*/}
      {/*  buttonText={'구글 로그인'}*/}
      {/*  responseType={'id_token'}*/}
      {/*  onSuccess={googleSuccess}*/}
      {/*  onFailure={googleFail}*/}
      {/*/>*/}
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
