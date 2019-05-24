import { SET_DATE } from '../constants/counter'

const INITIAL_STATE = {
  date: ''
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.value
      }
     default:
       return state
  }
}
