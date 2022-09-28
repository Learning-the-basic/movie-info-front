import axios from "axios";

export const ltbLogin = async (params) => {
  const response = await axios.post(
    'http://ec2-3-39-221-85.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
    params
  ).then(res => {
    if (res.status) {
      return res.data;
    }
  });
  return response;
}

export const ltbJoin = async (params) => {
  const response = await axios.post(
    'http://ec2-3-39-221-85.ap-northeast-2.compute.amazonaws.com:8080/auth/signup',
    params
  ).then((res) => {
    if (res.status) {
      return res.data;
    }
  });
  return response;
}

export const userInfo = async () => {
  const response = await axios.get(
    'http://ec2-3-39-221-85.ap-northeast-2.compute.amazonaws.com:8080/user/me'
  ).then((res) => {
    if (res.status) {
      return res.data;
    }
  });

  return response;
}
