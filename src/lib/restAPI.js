import { ToastAndroid } from 'react-native';
import axios from 'axios';

export const getMoviesByYear = async (name = '') => {

  const url = 'http://192.168.15.5:3000/api/movies/count';

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