import React, {useState} from "react";
import DefaultInput from "./input";
import {ltbJoin} from "../../api/ltb";
import {useSetRecoilState} from "recoil";
import {defaultPopup} from "../../atom";

const Join = () => {
  const openPopup = useSetRecoilState(defaultPopup);
  const [joinData, setJoinData] = useState({ user_id: '', user_name: '', password: '' });

  const register = () => {
    ltbJoin(joinData);
  }

  return (
    <div className='login-form'>
      <DefaultInput
        type={'text'}
        label={'아이디'}
        value={ joinData.user_id }
        onChange={
          (e) => setJoinData({...joinData, user_id: e.target.value})
        }
      />
      <DefaultInput
        type={'text'}
        label={'이름'}
        value={ joinData.user_name }
        onChange={
          (e) => setJoinData({...joinData, user_name: e.target.value})
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
        className="login-form-btn login"
        onClick={() => register()}
      >
        회원가입
      </button>
    </div>
  )
}

export default Join;
