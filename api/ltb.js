import axios from "axios";

export const ltbLogin = async (params) => {
  const response = await axios.post(
    'http://ec2-3-39-221-85.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
    params
  ).then((res) => {
    console.log(res);
  })
  return response;
}

export const ltbJoin = async (params) => {
  console.log(params);
  // const response = await axios.post(
  //   '',
  //   params
  // ).then((res) => {
  //   console.log(res);
  // })
  //
  // return response;
}
