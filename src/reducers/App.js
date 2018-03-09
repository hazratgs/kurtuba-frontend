import {
  SHOW_POPUP
} from '../constants/App'

const initialState = {
  popup: false
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, popup: action.payload }

    default:
      return state
  }
}
