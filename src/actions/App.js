import {
  SHOW_POPUP
} from '../constants/App'

export function showPopup (value) {
  return {
    type: SHOW_POPUP,
    payload: value
  }
}
