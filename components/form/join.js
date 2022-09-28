import React, {useEffect, useState} from "react";
import DefaultInput from "./input";
import { ltbJoin, ltbLogin } from "../../api/ltb";
import {useSetRecoilState} from "recoil";
import { defaultPopup, userToken } from "../../atom";

const Join = () => {
  const setUserToken = useSetRecoilState(userToken);
  const openPopup = useSetRecoilState(defaultPopup);
  const [isDisable, setDisable] = useState(false);
  const [joinData, setJoinData] = useState({ email: '', name: '', password: '' });

  // 회원가입 버튼 활성/비활성화 처리
  useEffect(() => {
    const re = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (joinData.email.length > 0) {
      if (re.test(joinData.email)) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      setDisable(true);
    }
  }, [joinData.email])

  const register = () => {
    ltbJoin(joinData).then((res) => {
      const params = {
        email: joinData.email,
        password: joinData.password
      }
      ltbLogin(params).then((res) => {
        localStorage.setItem('user_token', res.accessToken);
        setUserToken(res.accessToken);
        openPopup('');
      })
    });
  }

  return (
    <div className='login-form'>
      <DefaultInput
        type={'text'}
        label={'아이디'}
        value={ joinData.email }
        onChange={
          (e) => setJoinData({...joinData, email: e.target.value})
        }
        isValidation={isDisable}
      />
      <DefaultInput
        type={'text'}
        label={'이름'}
        value={ joinData.name }
        onChange={
          (e) => setJoinData({...joinData, name: e.target.value})
        }
      />
      <DefaultInput
        type={'password'}
        label={'비밀번호'}
        value={ joinData.password }
        onChange={
          (e) => setJoinData({...joinData, password: e.target.value})
        }
      />
      <button
        className={`login-form-btn login ${!isDisable ? 'disabled' : ''}`}
        onClick={() => register()}
      >
        회원가입
      </button>
    </div>
  )
}

export default Join;
