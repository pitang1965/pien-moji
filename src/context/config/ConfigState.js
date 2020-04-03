import React, { useReducer } from 'react';
import ConfigContext from './configContext';
import ConfigReducer from './configReducer';
import {
  SET_FACE_SIZE,
  SET_EYE_SIZE,
  SET_MOUSE_SIZE,
  SET_CHEEK_SIZE
} from '../types';

const ConfigState = props => {
  const initialState = {
    faceSize: 300,
    eyeSize: 1.0,
    mouseSize: 1.0,
    cheekSize: 1.0
  };

  const [state, dispatch] = useReducer(ConfigReducer, initialState);

  const setFaceSize = value =>
    dispatch({ type: SET_FACE_SIZE, payload: value });
  const setEyeSize = value => dispatch({ type: SET_EYE_SIZE, payload: value });
  const setMouseSize = value =>
    dispatch({ type: SET_MOUSE_SIZE, payload: value });
  const setCheekSize = value =>
    dispatch({ type: SET_CHEEK_SIZE, payload: value });

  return (
    <ConfigContext.Provider
      value={{
        faceSize: state.faceSize,
        eyeSize: state.eyeSize,
        mouseSize: state.mouseSize,
        cheekSize: state.cheekSize,
        setFaceSize,
        setEyeSize,
        setMouseSize,
        setCheekSize
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigState;
