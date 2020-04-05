import React, { useContext } from 'react';
import Slider from '../config/Slider';
import ConfigContext from '../../context/config/configContext';

const Config = () => {
  const configContext = useContext(ConfigContext);
  return (
    <div className='config'>
      <Slider parameterTitle={'顔の大きさ'} onChange={(_, value) => configContext.setFaceSize(value)} min={96} max={512} value={configContext.faceSize} />
      <Slider parameterTitle={'目の大きさ'} onChange={(_, value) => configContext.setEyeSize(value)} min={0.7} max={1.0} step={0.02} value={configContext.eyeSize} />
      <Slider parameterTitle={'口の大きさ'} onChange={(_, value) => configContext.setMouseSize(value)} min={0.6} max={1.2} step={0.02} value={configContext.mouseSize} />
      <Slider parameterTitle={'ほっぺの大きさ'} onChange={(_, value) => configContext.setCheekSize(value)} min={0.7} max={1.3} step={0.02} value={configContext.cheekSize} />
    </div>
  );
};

export default Config;
