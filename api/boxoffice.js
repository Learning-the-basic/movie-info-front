import axios from "axios";
import moment from 'moment';
import { getMovieData } from "./kmdb";
import {useEffect} from "react";

const DATE = moment().subtract(1, 'day').format('YYYYMMDD');

export const getBox = async () => {
  try {
    const { data } = await axios.get(
      `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=06fe7383576234f02a83e4993c927e1f&targetDt=${DATE}`
    )
    return data;
    // .then((res) => {
    //   const result = res.data.boxOfficeResult.dailyBoxOfficeList;
    //   const boxOffice = result.map((movie) => getMovieData(movie));
    //   Promise.all(boxOffice).then((res) => {
    //     console.log(res);
    //   });
    // });
    // useEffect(() => {
    //   getBox().then((res) => {
    //     console.log(res);
    //   });
    //   // getBox().then((res) => {
    //   //   const boxOffice = res.map((movie) => getMovieData(movie));
    //   //   Promise.all(boxOffice).then((res) => {
    //   //     console.log(res);
    //   //   });
    //   // });
    // }, [])
  } catch (e) {
    console.log(e);
  }
}
