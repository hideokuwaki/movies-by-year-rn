import { ToastAndroid } from 'react-native';
import axios from 'axios';

//const DOMAIN = 'http://moviesbyyear.us-east-2.elasticbeanstalk.com';
const DOMAIN = 'http://192.168.15.5:3000';

export const getMoviesByYear = async (name = '') => {

  const url = DOMAIN + '/api/movies/count';

  let res = {};

  try {
    source ? source.cancel() : null; // Cancels previous search
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const req = await axios.get(url, {
      params: {
        Title: name.trim()
      },
      cancelToken: source.token
    });

    res = req.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      ToastAndroid.show('Network Error', ToastAndroid.SHORT);
    }
  }

  return res;
}