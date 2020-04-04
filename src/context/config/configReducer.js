import { SET_FACE_SIZE, SET_EYE_SIZE, SET_MOUSE_SIZE, SET_CHEEK_SIZE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_FACE_SIZE:
      return {
        ...state,
        faceSize: action.payload
      }
      case SET_EYE_SIZE:
        return {
          ...state,
          eyeSize: action.payload
      }
      case SET_MOUSE_SIZE:
        return {
          ...state,
          mouseSize: action.payload
      }
      case SET_CHEEK_SIZE:
        return {
          ...state,
          cheekSize: action.payload
        }
    default:
      return state;
  }
};