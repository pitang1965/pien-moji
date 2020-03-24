import React, { useContext } from 'react';
import Slider from '../config/Slider';
import ConfigContext from '../../context/config/configContext';

const Config = () => {
  const configContext = useContext(ConfigContext);
  return (
    <div className='config'>
      <Slider parameterTitle={'顔の大きさ'} actionType={'SET_FACE_SIZE'} min={96} max={512} value={configContext.faceSize} />
      <Slider parameterTitle={'目の大きさ'} actionType={'SET_EYE_SIZE'} min={0.7} max={1.0} step={0.1} value={configContext.eyeSize} />
      <Slider parameterTitle={'口の大きさ'} actionType={'SET_MOUSE_SIZE'} min={0.6} max={1.2} step={0.02} value={configContext.mouseSize} />
      <Slider parameterTitle={'ほっぺの大きさ'} actionType={'SET_CHEEK_SIZE'} min={0.7} max={1.3} step={0.1} value={configContext.cheekSize} />
    </div>
  );
};

export default Config;
