import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>このアプリについて</h1>
      <p>ぴえん文字を作成するためのアプリです。</p>
      <p>Version: 1.0.0</p>
      <br />
      <p>プログラミングに疲れたらどうぞ</p>
      <iframe
        title='Tomora'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/4e9PS8PYrHo'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </Fragment>
  );
};

export default About;