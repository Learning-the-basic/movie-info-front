import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from '../../util/APIUtils';
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../../constants/constants';
import "./Login.scss";



class Login extends Component {

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };   ////계산된 속성명 사용

  loginClickHandler = () => {
    const { email, password } = this.state;
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
            if(this.props.authenticated) {
                return <Redirect
                    to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>;
            }


    const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것

    return (
      <>
        {isOpen ? (
	      ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
        ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
         /// true인 상태로 있어서 화면이 안꺼진다.

          <div className="modal">
            <div onClick={close}>
           </div>

              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isOpen}>
                  <img
                    className="signinIcon"
                    src="/images/signinIcon.png"
                  />
                  <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="아이디"
                    onChange={this.loginHandler}
                  />
                  <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.loginHandler}
                  />


                  <div className="loginMid">
                  </div>
                  <button className="loginBtn" onClick={this.loginClickHandler}>
                    {" "}
                    로그인{" "}
                  </button>

                  <div className="socialBox">

                    <div className="google">
                      <img
                        className="googleLogo"
                        src="/images/google.png"
                      />

                      <a href={GOOGLE_AUTH_URL} className="googleText">
                        구글 계정으로 로그인
                      </a>
                    </div>

                  </div>


                  <div className="loginEnd">
                    <div className="loginLine">
                      회원이 아니신가요? <Link to="/signup">회원가입</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

        ) : null}
      </>
    );
  }
}

export default Login;