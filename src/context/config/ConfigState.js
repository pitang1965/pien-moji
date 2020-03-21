import React, { useReducer } from 'react';
import ConfigContext from './configContext';
import ConfigReducer from './configReducer';
import {
  SET_PARAMETER,
  SET_FACE_SIZE,
  SET_EYE_SIZE,
  SET_MOUSE_SIZE,
  SET_CHEEK_SIZE
} from '../types';

const ConfigState = props => {
  const initialState = {
    faceSize: 0,
    eyeSize: 1.0,
    mouseSize: 1.0,
    cheekSize: 1.0
  };

  const [state, dispatch] = useReducer(ConfigReducer, initialState);

  const setParameter = (parameterTitle, actionType, value) => {
    console.log(
      `setParameter(parameterTitle:${parameterTitle}, actionType:${actionType}, value:${value})`
    );

    switch (actionType) {
      case SET_FACE_SIZE:
        setFaceSize(value);
        break;

      case SET_EYE_SIZE:
        setEyeSize(value);
        break;

      case SET_MOUSE_SIZE:
        setMouseSize(value);
        break;

      case SET_CHEEK_SIZE:
        setCheekSize(value);
        break;

      default:
        console.log('Error: 不適切なactionType');
    }

    dispatch({
      type: SET_PARAMETER
    });
  };

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
        setParameter,
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
