import { SET_PARAMETER, SET_FACE_SIZE, SET_EYE_SIZE, SET_MOUSE_SIZE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_PARAMETER:
      return state;
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
    default:
      return state;
  }
};