import React, { useContext, useEffect } from 'react';
import ConfigContext from '../../context/config/configContext';
//  woeu(white of eye upper): 上の白目
//  woel(white of eye lower): 下の白目

const Preview = () => {
  const configContext = useContext(ConfigContext);

  useEffect(() => {
    configContext.setFaceSize(300);
  }, []);

  // 顔
  let uiFaceSize = configContext.faceSize;
  let uiFaceColor = '#FEE99E';

  let faceStyle = {
    width: `${uiFaceSize}px`,
    height: `${uiFaceSize}px`,
    borderRadius: '50%',
    background: `${uiFaceColor}`,
    position: 'relative',
    border: 'solid #333 3px'
  };

  // 目
  let eyeSize = uiFaceSize * configContext.eyeSize * 0.25;
  let uiEyeToEyeDistancepercent = 40;

  let eyeDistanceFromOuter =
    (uiFaceSize - (uiFaceSize * uiEyeToEyeDistancepercent) / 100 - eyeSize) / 2;
  let eyeTopPercent = 45;
  let eyeTop = (uiFaceSize * eyeTopPercent) / 100 - eyeSize / 2;

  let eyeStyleLeft = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    background: '#222',
    borderRadius: '50%',
    position: 'absolute',
    top: `${eyeTop}px`,
    zIndex: '1',
    left: `${eyeDistanceFromOuter}px`
  };

  let eyeStyleRight = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    background: '#222',
    borderRadius: '50%',
    position: 'absolute',
    top: `${eyeTop}px`,
    right: `${eyeDistanceFromOuter}px`,
    zIndex: '1'
  };

  // 白目
  //  woeu(white of eye upper): 上の白目
  //  woel(white of eye lower): 下の白目
  //  woe(white of eye): 白目（共通）

  let woeuWidth = eyeSize * 0.6;
  let woeuHeight = eyeSize * 0.45;
  let woeuTop = eyeTop + eyeSize * 0.1;
  let woeuDistanceFromOuter = eyeDistanceFromOuter + eyeSize * 0.1;

  let woeuStyleLeft = {
    top: `${woeuTop}px`,
    left: `${woeuDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woeuWidth}px`,
    height: `${woeuHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(-30deg)',
    zIndex: '2'
  };

  let woeuStyleRight = {
    top: `${woeuTop}px`,
    right: `${woeuDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woeuWidth}px`,
    height: `${woeuHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(30deg)',
    zIndex: '2'
  };

  let woelWidth = eyeSize * 0.3;
  let woelHeight = eyeSize * 0.2;
  let woelTop = eyeTop + eyeSize * 0.6;
  let woelDistanceFromOuter = eyeDistanceFromOuter + eyeSize * 0.5;

  let woelStyleLeft = {
    top: `${woelTop}px`,
    left: `${woelDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woelWidth}px`,
    height: `${woelHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(-30deg)',
    zIndex: '2'
  };

  let woelStyleRight = {
    top: `${woelTop}px`,
    right: `${woelDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woelWidth}px`,
    height: `${woelHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(30deg)',
    zIndex: '2'
  };

  // 眉毛
  let eyeBlowTop = uiFaceSize * 0.18;
  let eyeBlowWidth = uiFaceSize * 0.15;
  let eyeBlowHeight = uiFaceSize * 0.15;
  let eyeBlowDistanceFromOuter = uiFaceSize * 0.12;

  let eyeBrowStyleLeft = {
    position: 'absolute',
    top: `${eyeBlowTop}px`,
    width: `${eyeBlowWidth}px`,
    height: `${eyeBlowHeight}px`,
    borderRadius: '50%',
    border: `${eyeBlowWidth * 0.48}px solid #744517`,
    left: `${eyeBlowDistanceFromOuter}px`,
    transform: 'rotate(60deg)'
  };

  let eyeBrowStyleRight = {
    position: 'absolute',
    top: `${eyeBlowTop}px`,
    width: `${eyeBlowWidth}px`,
    height: `${eyeBlowHeight}px`,
    borderRadius: '50%',
    border: `${eyeBlowWidth * 0.48}px solid #744517`,
    right: `${eyeBlowDistanceFromOuter}px`,
    transform: 'rotate(-60deg)'
  };

  // 眉毛っぽくするためのトリミング
  let eyeBlowAfterTop = uiFaceSize * 0.13;
  let eyeBlowAfterWidth = uiFaceSize * 0.14;
  let eyeBlowAfterHeight = uiFaceSize * 0.2;
  let eyeBlowAfterDistanceFromOuter = eyeBlowDistanceFromOuter * 0.9;

  let eyeBrowAfterStyleLeft = {
    position: 'absolute',
    top: `${eyeBlowAfterTop}px`,
    width: `${eyeBlowAfterWidth}px`,
    height: `${eyeBlowAfterHeight}px`,
    borderRadius: '50%',
    left: `${eyeBlowAfterDistanceFromOuter}px`,
    background: `${uiFaceColor}`,
    transform: 'rotate(60deg)',
  };

  let eyeBrowAfterStyleRight = {
    position: 'absolute',
    top: `${eyeBlowAfterTop}px`,
    width: `${eyeBlowAfterWidth}px`,
    height: `${eyeBlowAfterHeight}px`,
    borderRadius: '50%',
    right: `${eyeBlowAfterDistanceFromOuter}px`,
    background: `${uiFaceColor}`,
    transform: 'rotate(-60deg)',
  };

  // 口
  let mouseSize = uiFaceSize * configContext.mouseSize * 0.15;
  let mouseThickness = mouseSize * 0.25;
  const sin45 = 0.707;
  let mouseLeft = uiFaceSize / 2 - mouseSize / 2;
  let mouseBottom = uiFaceSize / 4 - mouseSize * sin45;

  let mouthStyle = {
    position: 'absolute',
    bottom: `${mouseBottom}px`,
    width: `${mouseSize}px`,
    height: `${mouseSize}px`,
    borderTop: `${mouseThickness}px solid #ef0853`,
    borderRight: `${mouseThickness}px solid #ef0853`,
    left: `${mouseLeft}px`,
    transform: 'rotate(-45deg)'
  };

  // ほっぺ
  let cheekSize = uiFaceSize * configContext.cheekSize * 0.15;
  let cheekBackgroundColor = '#e2a1a1';
  let cheekTop = uiFaceSize * 0.5;
  let cheekDistanceFromOuter = uiFaceSize * 0.12;
  let cheekShadow = cheekSize * 0.3;

  let cheekStyleLeft = {
    width: `${cheekSize}px`,
    height: `${cheekSize}px`,
    background: `${cheekBackgroundColor}`,
    position: 'absolute',
    top: `${cheekTop}px`,
    boxShadow: `${cheekBackgroundColor} 0px 0px ${cheekShadow}px ${cheekShadow}px`,
    borderRadius: '50%',
    left: `${cheekDistanceFromOuter}px`
  };

  let cheekStyleRight = {
    width: `${cheekSize}px`,
    height: `${cheekSize}px`,
    background: `${cheekBackgroundColor}`,
    position: 'absolute',
    top: `${cheekTop}px`,
    boxShadow: `${cheekBackgroundColor} 0px 0px ${cheekShadow}px ${cheekShadow}px`,
    borderRadius: '50%',
    right: `${cheekDistanceFromOuter}px`
  };

  return (
    <div className='preview'>
      <div style={faceStyle}>
        <div style={eyeBrowStyleLeft}></div>
        <div style={eyeBrowStyleRight}></div>
        <div style={eyeBrowAfterStyleLeft}></div>
        <div style={eyeBrowAfterStyleRight}></div>
        <div style={eyeStyleLeft}></div>
        <div style={eyeStyleRight}></div>
        <div style={woeuStyleLeft}></div>
        <div style={woeuStyleRight}></div>
        <div style={woelStyleLeft}></div>
        <div style={woelStyleRight}></div>
        <div style={cheekStyleLeft}></div>
        <div style={cheekStyleRight}></div>
        <div style={mouthStyle}></div>
      </div>
    </div>
  );
};

export default Preview;
