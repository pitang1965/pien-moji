import React from 'react';
import Slider from '../config/Slider';

const Config = () => {
  return (
    <div className='config'>
      <Slider parameterTitle={'顔の大きさ'} actionType={'SET_FACE_SIZE'} min={36} max={512} defaultValue={300} />
      <Slider parameterTitle={'目の大きさ'} actionType={'SET_EYE_SIZE'} min={0.95} max={1.05} step={0.01} defaultValue={1.0} />
      <Slider parameterTitle={'口の大きさ'} actionType={'SET_MOUSE_SIZE'} min={0.6} max={1.4} step={0.02} defaultValue={1.0} />
    </div>
  );
};

export default Config;
