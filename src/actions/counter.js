import {
  SET_DATE
} from '../constants/counter'

export const setdate = () => {
  return {
    type: SET_DATE,
    value: new Date().toLocaleTimeString()
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
