import axios from 'axios';
import {GET_CURRENCIES} from './constants/API';

export const getcurrencies = ({setChangeRates}) => {
  return axios.get(GET_CURRENCIES).then(({data}) => setChangeRates(data));
};